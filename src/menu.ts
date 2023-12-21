import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Notepad } from './state';

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
        background-color: var(--menu-background-color);
        border-bottom: solid 1.5px var(--status-bar-border-color);
        display: flex;
        flex-direction: row;
        align-items: center;

        --sl-color-neutral-0: transparent; /* background of buttons */
        --sl-color-neutral-300: transparent; /* border of buttons */
        --sl-color-neutral-700: var(--text-color); /* text color of buttons */

        --sl-color-primary-50: var(--menu-button-hover-background-color); /* hover background */
        --sl-color-primary-100: var(--menu-button-click-background-color); /* click background */
        --sl-color-primary-300: transparent; /* hover border */
        --sl-color-primary-400: transparent; /* click border */
        --sl-color-primary-700: var(--text-color); /* hover color */

        --sl-input-height-medium: 32px;

        --sl-button-font-size-medium: 14px;
        --sl-input-font-family: "Segoe UI Variable", "Segoe UI", sand-serif;
        --sl-font-weight-semibold: 400;

        --sl-spacing-medium: 8px;
      }

      sl-menu {
        background-color: var(--menu-dropdown-background-color);
        border-color: var(--menu-dropdown-background-color);
        color: var(--text-color);
      }

      sl-menu-item::part(base):hover{
        color: var(--text-color);
        background-color: var(--menu-item-hover-background-color);
      }

      sl-divider {
        --color: var(--divider-color);
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
              <sl-menu-item value="new">New Tab</sl-menu-item>
              <sl-menu-item value="new-window">New window</sl-menu-item>
              <sl-menu-item value="open">Open</sl-menu-item>
              <sl-menu-item value="save">Save</sl-menu-item>
              <sl-menu-item value="save-as">Save as</sl-menu-item>
              <sl-menu-item value="save-all">Save all</sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item value="page-setup">Page setup</sl-menu-item>
              <sl-menu-item value="print">Print</sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item value="close-tab">Close Tab</sl-menu-item>
              <sl-menu-item value="close-window">Close Window</sl-menu-item>
              <sl-menu-item value="exit">Exit</sl-menu-item>
            </sl-menu>
          </sl-dropdown>
          <sl-button>Edit</sl-button>
          <sl-button>View</sl-button>
        </div>
        <div class="settings-container">
          <sl-button @click=${() => this.showSettingsPage()}>
            <sl-icon name="gear" label="Settings"></sl-icon>
          </sl-button>
        </div>
      </div>
    `;
  }

  showSettingsPage(){
    const event = new CustomEvent('showSettingsClicked', {
      bubbles: true, // if you want the event to bubble up through the DOM
    });
    this.dispatchEvent(event);
  }

  private async menuItemClicked(item: string) {
    switch (item) {
      case 'new':
        Notepad.addNewTab();
        break;
      case 'new-window':
        window.open('/', '', 'width=1200, height=750');
        break;
      case 'open':
        Notepad.openFile();
        break;
      case 'save':
        Notepad.current.saveFile();
        break;
      case 'save-all':
        // save all files
        // Notepad.tabs.forEach(async tab => {
        //   await tab.saveFile();
        // });
        break;
      case 'save-as':
        Notepad.current.saveAsFile();
        break;
      case 'print':
        var response = await fetch('http://localhost:7083');
        console.log(await response.text());
        break;
      default:
        console.log(`${item} NOT IMPLEMENTED`)
    }
  }
}
