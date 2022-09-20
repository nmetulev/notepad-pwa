import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/button/button'
import '@shoelace-style/shoelace/dist/components/icon/icon'

@customElement('app-menu')
export class AppMenu extends LitElement {

  static get styles() {
    return css`
      .root {
        height: 36px;
        width: 100%;
        background-color: #f0f4f9;
        border-bottom: solid 1.5px #e6e6e6;
        display: flex;
        flex-direction: row;
        align-items: flex-end;

        --sl-color-neutral-0: transparent; /* background */
        --sl-color-neutral-300: transparent; /* border */
        --sl-color-neutral-700: #191919; /* color */

        --sl-color-primary-50: #e4e4e4; /* hover background */
        --sl-color-primary-100: #f3f3f3; /* click background */
        --sl-color-primary-300: transparent; /* hover border */
        --sl-color-primary-400: transparent; /* click border */
        --sl-color-primary-700: #191919; /* hover color */

        --sl-input-height-medium: 32px;

        --sl-button-font-size-medium: 14px;
        --sl-input-font-family: "Segoe UI Variable", "Segoe UI", sand-serif;
        --sl-font-weight-semibold: 400;

        --sl-spacing-medium: 8px;
      }

      .menubar {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: left;
        padding-left: 4px;
        margin-bottom: 2px;
      }

      .menubar sl-button {
        margin-right: 8px;
      }

      .settings-container {
        margin-right: 8px;
        font-size: 42px;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="root">
        <div class="menubar">
          <sl-button>File</sl-button>
          <sl-button>Edit</sl-button>
          <sl-button>View</sl-button>
        </div>
        <div class="settings-container">
          <sl-button>
            <sl-icon name="gear" label="Settings"></sl-icon>
          </sl-button>
        </div>
      </div>
    `;
  }
}
