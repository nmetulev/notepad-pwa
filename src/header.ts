import { LitElement, css, html, PropertyValueMap } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Notepad, notepadEventNames } from './state';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property() title = 'Untitled';
  @property({type: Boolean}) edited = false;
  @property({type: Boolean}) settingsShowing: boolean = false;

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

        background-color: var(--header-background-color);
        color: var(--text-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        font-family: Segoe UI Variable Text, Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif;
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

    #back-button {
      background-color: transparent;
      border: none;
      margin-left: 5px;
      margin-top: 5px;
      padding: 3px 5px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      app-region: no-drag;
    }
    #back-button:hover {
        background-color: #e8eaf0;
      }

      sl-icon {
        color: var(--text-color);
      }
    `;
  }

  constructor() {
    super();
    Notepad.instance.on(notepadEventNames.fileChanged, this.onFileChangedHandler)
    Notepad.instance.on(notepadEventNames.editorChanged, this.onFileChangedHandler)
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.updateTitle();
  }

  disconnectedCallback(): void {
    Notepad.instance.removeListener(notepadEventNames.fileChanged, this.onFileChangedHandler)
    Notepad.instance.removeListener(notepadEventNames.editorChanged, this.onFileChangedHandler)
  }

  private onFileChangedHandler = this.updateTitle.bind(this);
  private updateTitle() {
    this.title = Notepad.instance.fileName || 'Untitled'
    this.edited = Notepad.instance.isDirty;
    document.title = this.title;
  }

  backToEditor(){
    const event = new CustomEvent('showEditor', {
      bubbles: true, // if you want the event to bubble up through the DOM
    });
    this.dispatchEvent(event);
  }

  render() {

    const styleInfo = {
      'background-color': this.settingsShowing ? 'transparent' : 'var(--header-background-color)',
    };

    return html`
      <div class="root" style=${styleMap(styleInfo)}>
        ${this.settingsShowing ?
          html`
            <button id="back-button" type="button" @click=${() => this.backToEditor()}><sl-icon name="arrow-left"></sl-icon></button>
          `
          :
          null
        }
        <img src="/assets/icons/Square44x44Logo.scale-100.png" alt="Notepad logo" />
        ${this.settingsShowing ?
          html`
          <label>
            Notepad
          </label>
          `
          :
          html`
          <label>
            ${this.edited ? "*" : ""}${this.title} - Notepad
          </label>
          `
        }


      </div>
    `;
  }
}
