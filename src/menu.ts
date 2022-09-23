import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { NotepadContentState } from './state';

import '@shoelace-style/shoelace/dist/components/button/button'
import '@shoelace-style/shoelace/dist/components/icon/icon'
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown'
import '@shoelace-style/shoelace/dist/components/menu/menu'
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item'
import '@shoelace-style/shoelace/dist/components/divider/divider'

// import { setDefaultAnimation } from '@shoelace-style/shoelace/dist/utilities/animation-registry.js';
// setDefaultAnimation('dropdown.show', {
//   keyframes: [
//     { transform: 'translateY(-200px)'},
//     { transform: 'translateY(0)' }
//   ],
//   options: {
//     duration: 500
//   }
// });

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

      sl-menu {
        --sl-color-neutral-0: #191919; /* color */
        --sl-color-primary-600: #e4e4e4; /* hover background */
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
          <sl-dropdown>
            <sl-button slot="trigger">File</sl-button>
            <sl-menu @sl-select=${(e: any) => this.menuItemClicked(e.detail.item.value)}>
              <sl-menu-item value="new">New</sl-menu-item>
              <sl-menu-item value="new-window">New window</sl-menu-item>
              <sl-menu-item value="open">Open</sl-menu-item>
              <sl-menu-item value="save">Save</sl-menu-item>
              <sl-menu-item value="save-as">Save as</sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item value="page-setup">Page setup</sl-menu-item>
              <sl-menu-item value="print">Print</sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item value="exit">Exit</sl-menu-item>
            </sl-menu>
          </sl-dropdown>
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

  private menuItemClicked(item: string) {
    switch (item) {
      case 'new':
        NotepadContentState.instance.newFile();
        break;
      case 'new-window':
        window.open('/', '', 'width=1200, height=750');
        break;
      case 'open':
        NotepadContentState.instance.openFile();
        break;
      case 'save':
        NotepadContentState.instance.saveFile();
        break;
      case 'save-as':
        NotepadContentState.instance.saveAsFile();
        break;
      default:
        console.log(`${item} NOT IMPLEMENTED`)
    }
  }
}
