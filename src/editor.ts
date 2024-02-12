import { LitElement, css, html, PropertyValueMap } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { Font, Settings, settingsEventNames } from './state/notepadSettings';
import { Notepad, NotepadFile } from './state';

@customElement('app-editor')
export class AppMenu extends LitElement {

  @property({type: Object}) selectedFonts: Font  = {family: "Consolas", style: "regular", size: 11};
  @property({type: Boolean}) wrapWords: boolean = false;

  static get styles() {
    return css`
      :host {
        display: block
      }

      .root {
        background-color: var(--editor-background-color);
        color: var(--text-color);
        /* padding: 16px; */
        font-family: "Lucida Console";
        font-size: 12pt;
        font-style: regular;
        height: 100%;
      }

      .editor {
        padding: 16px;
        min-height: 100%;
        min-width: 100%;
        overflow-wrap: normal;
        box-sizing: border-box;
        line-height: 1.2;
      }

      .editor.wrap {
        white-space: pre-wrap;
        word-break: break-all;
      }

      .editor.no-wrap {
        white-space: pre;
        width: max-content;
        word-break: unset;
      }

      *:focus {
          outline: none;
      }
    `;
  }

  @query('.editor', true) private editor!: HTMLDivElement;
  @state() private file: NotepadFile | undefined;

  constructor() {
    super();
    Notepad.on(Notepad.eventNames.currentTabIndexChanged, this.onFileChangedHandler);
    Notepad.on(NotepadFile.eventNames.fileChanged, this.onFileChangedHandler);
    // Notepad.on(NotepadFile.eventNames.insertedText, this.updateText);
    // Settings.on(Notepad.eventNames.settingsChanged, () => this.updateSettings(this))
  }

  disconnectedCallback(): void {
    Notepad.removeListener(Notepad.eventNames.currentTabIndexChanged, this.onFileChangedHandler);
    localStorage.setItem('lastSession', this.editor.innerText);

    // if (this.file) {
    //   this.file.removeListener(NotepadFile.eventNames.fileChanged, this.onFileChangedHandler)
    // }
    localStorage.setItem('lastSession', encodeURIComponent(Notepad.current.editorContents));
    Notepad.current.removeListener(NotepadFile.eventNames.fileChanged, this.onFileChangedHandler);
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.setEditorContents();
    this.editor?.focus();
    this.updateCursorPosition();
    Notepad.current.editorDiv = this.shadowRoot!.querySelector('.editor') as HTMLDivElement;
    //@ts-ignore
    Notepad.instance.selection = this.shadowRoot!.getSelection();
  }

  private onFileChangedHandler = this.setEditorContents.bind(this);

  private setEditorContents() {
    this.file = Notepad.current;
    if (this.editor) {
      this.editor.textContent = this.file.editorContents || this.file.fileContents || "";
      // this.file.editorContents = this.editor.innerText;
      this.editor?.focus();
      this.setCaretPosition(this.editor, this.editor.innerText.length);
    }
  }

  // function to set caret position
  private setCaretPosition(el: HTMLDivElement, caretPos: number) {
    try {
      var range = document.createRange();
      var sel = window.getSelection();
      range.setStart(el.childNodes[0], caretPos);
      range.collapse(true);
      sel?.removeAllRanges();
      sel?.addRange(range);
    } catch (error) {
      // console.error(error);
    }
  }

  updateText(e: InputEvent){
    this.file!.editorContents = (e.target as HTMLDivElement).innerText;
      this.editor.textContent = Notepad.current.fileContents || ""; // sets editor to file contents if file contents exist.
      if(localStorage.getItem('lastSession') && Settings.instance.start_behavior && this.editor.textContent.length === 0){
        this.editor.textContent = decodeURIComponent(localStorage.getItem('lastSession')!);
      }
      Notepad.current.editorContents = this.editor.textContent;
    }

  updateSettings(root: any){
    root.requestUpdate();
  }

  decideFontWeight(){
    const style = Settings.instance.font.style;
    if(style.includes("light")){
      return "300";
    } else if(style.includes("semilight")) {
      return "350";
    } else if(style.includes("medium")){
      return "500";
    } else if(style.includes("demi") || style.includes("semibold")) {
      return "600";
    } else if(style.includes("bold")){
      return "bold";
    } else if(style.includes("black")){
      return "900";
    }

    return "unset";
  }


  updateCursorPosition() {

    const contentEditableDiv = this.shadowRoot!.querySelector(".editor")!;

    //@ts-ignore
    const selection = this.shadowRoot!.getSelection();
    if (selection!.rangeCount > 0) {
      const range = selection!.getRangeAt(0);
      const start = range.startOffset;
      const end = range.endOffset;

      const contentDivRect = contentEditableDiv.getBoundingClientRect();
      const rangeRect = range.getBoundingClientRect();

      const lineHeight = parseInt(getComputedStyle(contentEditableDiv).lineHeight);

      // Calculate line number, ensuring it's not negative
      let line = Math.floor((rangeRect.top - contentDivRect.top) / lineHeight) + 1;
      line = Math.max(line, 1); // Ensure line number is at least 1

      // Handling special cases
      if (contentEditableDiv.textContent === '') {
          // If there's no text, default to the first line
          line = 1;
      }

      Notepad.current.cursorPosition = {
          start: start + 1,
          end: end + 1,
          line: line
      }
    }
  }

  render() {

    const styleInfo = {
      'font-size': (Settings.instance.displayFontSize).toString() + 'px',
      'font-family': Settings.instance.font.family,
      'font-style': Settings.instance.font.style.includes("italic") ? "italic" : "unset",
      'font-weight': this.decideFontWeight(),
      'font-stretch': Settings.instance.font.style.includes("narrow") || Settings.instance.font.style.includes("condensed") ? "condensed" : "unset",
    };

    const wrapClasses = {
      'wrap': Settings.instance.wrap,
      'no-wrap': !Settings.instance.wrap
    };

    return html`
      <div class="root" style=${styleMap(styleInfo)}>
        <div class="${classMap(wrapClasses)} editor"
          contenteditable
          spellcheck="false"
          @input=${(e: InputEvent) => this.updateText(e)}
          @keydown=${this.handleTab}
          @paste=${this.pasteAsPlainText}
          @click=${() => this.updateCursorPosition()}
          @keyup=${() => this.updateCursorPosition()}></div>
      </div>
    `;
  }

  private pasteAsPlainText(e: ClipboardEvent) {
    // cancel paste
    e.preventDefault();

    // get text representation of clipboard
    var text = e.clipboardData?.getData('text/plain');
    if (text) {
      document.execCommand('insertHTML', false, text)
    }
  }

  private handleTab(e: KeyboardEvent) {
    if(e.key == "Tab"){ //Tab
      e.preventDefault();
      document.execCommand('insertHTML', false, '&#009');
    }
  }
}