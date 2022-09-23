import { LitElement, css, html, PropertyValueMap } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { NotepadContentState, notepadEventNames } from './state';

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
    NotepadContentState.instance.on(notepadEventNames.fileChanged, this.onFileChangedHandler)
  }

  disconnectedCallback(): void {
    NotepadContentState.instance.removeListener(notepadEventNames.fileChanged, this.onFileChangedHandler)
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.setEditorContents();
  }

  private onFileChangedHandler = this.setEditorContents.bind(this);
  private setEditorContents() {
    if (this.editor) {
      this.editor.textContent = NotepadContentState.instance.fileContents || "";
      NotepadContentState.instance.editorContents = this.editor.innerText;
    }
  }

  render() {
    return html`
      <div class="root" >
        <div class="editor"
          contenteditable
          spellcheck="false"
          @input=${(e: InputEvent) => NotepadContentState.instance.editorContents = (e.target as HTMLDivElement).innerText}
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
}
