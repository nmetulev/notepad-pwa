import { LitElement, css, html, PropertyValueMap } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Notepad, notepadEventNames } from './state';

@customElement('app-editor')
export class AppMenu extends LitElement {

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

      .editor {
        padding: 16px;
        min-height: calc(100% - 32px);
        min-width: calc(100% - 32px);
        width: max-content;
        white-space: pre;
        overflow-wrap: normal;
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
    Notepad.instance.removeListener(notepadEventNames.fileChanged, this.onFileChangedHandler)
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.setEditorContents();
    this.editor?.focus();
  }

  private onFileChangedHandler = this.setEditorContents.bind(this);
  private setEditorContents() {
    if (this.editor) {
      this.editor.textContent = Notepad.instance.fileContents || "";
      Notepad.instance.editorContents = this.editor.innerText;
    }
  }

  render() {
    return html`
      <div class="root" >
        <div class="editor"
          contenteditable
          spellcheck="false"
          @input=${(e: InputEvent) => Notepad.instance.editorContents = (e.target as HTMLDivElement).innerText}
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
