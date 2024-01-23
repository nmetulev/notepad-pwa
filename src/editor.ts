import { LitElement, css, html, PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { Notepad, notepadEventNames } from './state';
import { Font, Settings, settingsEventNames } from './settings-state';


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

  constructor() {
    super();
    Notepad.instance.on(notepadEventNames.fileChanged, this.onFileChangedHandler);
    Settings.instance.on(settingsEventNames.settingsChanged, () => this.updateSettings(this));
  }

  disconnectedCallback(): void {
    localStorage.setItem('lastSession', encodeURIComponent(Notepad.instance.editorContents));
    Notepad.instance.removeListener(notepadEventNames.fileChanged, this.onFileChangedHandler);
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.setEditorContents();
    this.editor?.focus();
    this.updateCursorPosition();
  }

  private onFileChangedHandler = this.setEditorContents.bind(this);

  private setEditorContents() {
    if (this.editor) {
      this.editor.textContent = Notepad.instance.fileContents || ""; // sets editor to file contents if file contents exist.
      if(localStorage.getItem('lastSession') && Settings.instance.start_behavior){
        this.editor.innerText = decodeURIComponent(localStorage.getItem('lastSession')!);
      }
      Notepad.instance.editorContents = this.editor.innerText;
    }
  }

  updateText(e: InputEvent){
    this.updateCursorPosition();
    Notepad.instance.editorContents = (e.target as HTMLDivElement).innerText;
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
        const line = Math.floor((rangeRect.top - contentDivRect.top) / lineHeight) + 1;


        Notepad.instance.cursorPosition = {
          start: start + 1,
          end: end + 1,
          line: line
        }
    }
  }

  render() {

    const styleInfo = {
      'font-size': (Settings.instance.font.size).toString() + 'px',
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
          @click=${() => this.updateCursorPosition()}></div>
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