import { LitElement, css, html, PropertyValueMap } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Notepad, notepadEventNames } from './state';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property() title = 'Untitled';
  @property() edited = false;

  static get styles() {
    return css`
      :host {
        display: block;
        width: env(titlebar-area-width, 100%);
        height: env(titlebar-area-height, 33px);
        min-height: env(titlebar-area-height, 33px);
      }

     .root {
        position: fixed;

        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        width: env(titlebar-area-width, 100%);
        height: env(titlebar-area-height, 33px);
        app-region: drag;

        background-color: #f0f4f9;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        font-family: Segoe UI Variable Text, Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif;
    }

    .root.dark-mode {
      background-color: #202020;
      color: #ffffff;
    }

    .root img {
      margin-left: 14px;
      height: 18px;
      width: 18px;
    }

    .root label {
      font-size: 12px;
      margin-left: 16px;

    }
    `;
  }

  constructor() {
    super();
    Notepad.instance.on(notepadEventNames.fileChanged, this.onFileChangedHandler)
    Notepad.instance.on(notepadEventNames.editorChanged, this.onFileChangedHandler)
  }

  disconnectedCallback(): void {
    Notepad.instance.removeListener(notepadEventNames.fileChanged, this.onFileChangedHandler)
    Notepad.instance.removeListener(notepadEventNames.editorChanged, this.onFileChangedHandler)
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.updateTitle();
  }

  private onFileChangedHandler = this.updateTitle.bind(this);
  private updateTitle() {
    this.title = Notepad.instance.fileName || 'Untitled'
    this.edited = Notepad.instance.isDirty;
    document.title = this.title;
  }

  render() {
    return html`
      <div class="root">
        <img src="/assets/icons/Square44x44Logo.scale-100.png" alt="Notepad logo" />
        <label>
          ${this.edited ? "*" : ""}${this.title} - Notepad
        </label>
      </div>
    `;
  }
}
