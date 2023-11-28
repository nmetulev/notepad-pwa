import { LitElement, css, html, PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { Notepad, notepadEventNames } from './state';
import { Font } from './utils/interfaces';


@customElement('app-editor')
export class AppMenu extends LitElement {

  @property({type: Object}) fontStyles: Font = {family: "Consolas", style: "regular", size: 11};
  @property({type: Boolean}) openLastSession: boolean = false;
  @property({type: Boolean}) wrapWords: boolean = false;

  static get styles() {
    return css`
      :host {
        display: block
      }

      .root {
        background-color: white;
        /* padding: 16px; */
        font-family: "Lucida Console";
        font-size: 12pt;
        font-style: regular;
        height: 100%;
      }

      .root.dark-mode {
        color: #ffffff;
        background-color: #272727;
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

  constructor() {
    super();
    Notepad.instance.on(notepadEventNames.fileChanged, this.onFileChangedHandler)
  }

  disconnectedCallback(): void {
    localStorage.setItem('lastSession', this.editor.innerText);
    Notepad.instance.removeListener(notepadEventNames.fileChanged, this.onFileChangedHandler)
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.setEditorContents();
    this.editor?.focus();
  }

  private onFileChangedHandler = this.setEditorContents.bind(this);

  private setEditorContents() {
    if (this.editor) {
      this.editor.textContent = Notepad.instance.fileContents || ""; // sets editor to file contents?
      if(localStorage.getItem('lastSession') && this.openLastSession){
        this.editor.innerText = localStorage.getItem('lastSession')!;
      }
      Notepad.instance.editorContents = this.editor.innerText; //
    }
  }

  updateText(e: InputEvent){
    Notepad.instance.editorContents = (e.target as HTMLDivElement).innerText;
    localStorage.setItem('lastSession', this.editor.innerText);
  }

  render() {

    const styleInfo = {
      'font-size': (this.fontStyles.size).toString() + 'px',
      'font-family': this.fontStyles.family,
      'font-style': this.fontStyles.style.includes("italic") ? "italic" : "unset",
      'font-weight':  this.fontStyles.style.includes("bold") ? "bold" : "unset"
    };

    const wrapClasses = {
      'wrap': this.wrapWords,
      'no-wrap': !this.wrapWords
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