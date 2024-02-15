import { LitElement, css, html } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { Notepad, notepadEventNames } from './state';
//import { styleMap } from 'lit/directives/style-map.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property() title = 'Untitled';
  @property({type: Boolean}) settingsShowing: boolean = false;

  @state() edited = false;

  static get styles() {
    return css`
      :host {
        display: block;
        width: env(titlebar-area-width, 100%);
        min-height: env(titlebar-area-height, 33px);
      }

     .root {
        position: fixed;

        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        width: env(titlebar-area-width, 100%);
        height: env(titlebar-area-height, 33px);
        app-region: drag;

        background: var(--settings-background);
        color: var(--text-color);
        display: flex;
        flex-direction: row;
        align-items: center;
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
      padding: 3px 5px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      app-region: no-drag;
    }
    #back-button:hover {
        background-color: var(--back-button-hover-color);
      }

      sl-icon {
        color: var(--text-color);
      }

      .tab {
        box-sizing: border-box;
        background-color: var(--menu-background-color);
        height: 85%;
        align-self: flex-end;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 235px;
        padding: 10px;
        padding-right: 5px;

      }

      .tab h1 {
        all: unset;
      }

      .indicators {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 16px;
        height: 30px;
        width: 30px;
      }

      .edited-icon {
        font-size: 24px;
        color: #a0a0a0;
      }

      sl-icon {
        border-radius: 4px;
      }

      sl-icon:hover {
        background-color: var(--menu-button-hover-background-color);
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

    this.requestUpdate();
  }

  backToEditor(){
    const event = new CustomEvent('showEditor', {
      bubbles: true, // if you want the event to bubble up through the DOM
    });
    this.dispatchEvent(event);
  }

  render() {

    /* const styleInfo = {
      'background-color': this.settingsShowing ? 'transparent' : 'var(--header-background-color)',
    }; */

    return html`
      <div class="root">
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
          <label class="tab">
            <h1>${this.title}</h1>
            <div class="indicators">
              ${this.edited ? html`<sl-icon name="dot" label="dot" class="edited-icon"></sl-icon>` : html`<sl-icon name="x" label="x" class="close-icon"></sl-icon>`}
            </div>
          </label>
          `
        }


      </div>
    `;
  }
}
