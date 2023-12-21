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
      }

      .editor.wrap {
        white-space: unset;
        width: 100vw;
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
  }

  disconnectedCallback(): void {
    Notepad.removeListener(Notepad.eventNames.currentTabIndexChanged, this.onFileChangedHandler);
    localStorage.setItem('lastSession', this.editor.innerText);

    // if (this.file) {
    //   this.file.removeListener(NotepadFile.eventNames.fileChanged, this.onFileChangedHandler)
    // }
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.setEditorContents();
    this.editor?.focus();
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
  }

  updateSettings(root: any){
    root.requestUpdate();
  }

  render() {

    const styleInfo = {
      'font-size': (Settings.instance.font.size).toString() + 'px',
      'font-family': Settings.instance.font.family,
      'font-style': Settings.instance.font.style.includes("italic") ? "italic" : "unset",
      'font-weight':  Settings.instance.font.style.includes("bold") ? "bold" : "unset",
      'font-stretch': Settings.instance.font.style.includes("narrow") ? "condensed" : "unset"
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
          @paste=${this.pasteAsPlainText}></div>
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
    if(e.keyCode == 9){ //Tab
      e.preventDefault()
      document.execCommand('insertHTML', false, '&#009');
    }
  }
}