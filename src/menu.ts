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

      .settings-wheel {
        fill: var(--text-color);
      }
      .settings-button::part(label) {
        display: flex;
        justify-content: center;
        align-items: center;
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
          <sl-button class="settings-button" @click=${() => this.showSettingsPage()}>
            <svg class="settings-wheel" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M1.91 7.38A8.5 8.5 0 0 1 3.7 4.3a.5.5 0 0 1 .54-.13l1.92.68a1 1 0 0 0 1.32-.76l.36-2a.5.5 0 0 1 .4-.4 8.53 8.53 0 0 1 3.55 0c.2.04.35.2.38.4l.37 2a1 1 0 0 0 1.32.76l1.92-.68a.5.5 0 0 1 .54.13 8.5 8.5 0 0 1 1.78 3.08c.06.2 0 .4-.15.54l-1.56 1.32a1 1 0 0 0 0 1.52l1.56 1.32a.5.5 0 0 1 .15.54 8.5 8.5 0 0 1-1.78 3.08.5.5 0 0 1-.54.13l-1.92-.68a1 1 0 0 0-1.32.76l-.37 2a.5.5 0 0 1-.38.4 8.53 8.53 0 0 1-3.56 0 .5.5 0 0 1-.39-.4l-.36-2a1 1 0 0 0-1.32-.76l-1.92.68a.5.5 0 0 1-.54-.13 8.5 8.5 0 0 1-1.78-3.08.5.5 0 0 1 .15-.54l1.56-1.32a1 1 0 0 0 0-1.52L2.06 7.92a.5.5 0 0 1-.15-.54Zm1.06 0 1.3 1.1a2 2 0 0 1 0 3.04l-1.3 1.1c.3.79.72 1.51 1.25 2.16l1.6-.58a2 2 0 0 1 2.63 1.53l.3 1.67a7.56 7.56 0 0 0 2.5 0l.3-1.67a2 2 0 0 1 2.64-1.53l1.6.58a7.5 7.5 0 0 0 1.24-2.16l-1.3-1.1a2 2 0 0 1 0-3.04l1.3-1.1a7.5 7.5 0 0 0-1.25-2.16l-1.6.58a2 2 0 0 1-2.63-1.53l-.3-1.67a7.55 7.55 0 0 0-2.5 0l-.3 1.67A2 2 0 0 1 5.81 5.8l-1.6-.58a7.5 7.5 0 0 0-1.24 2.16ZM7.5 10a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm1 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"/></svg>
          </sl-button>
        </div>
      </div>
    `;
  }

  showSettingsPage(){
    const event = new CustomEvent('showSettingsPage', {
      bubbles: true, // if you want the event to bubble up through the DOM
    });
    this.dispatchEvent(event);
  }

  private async menuItemClicked(item: string) {
    switch (item) {
      case 'new':
        Notepad.instance.newFile();
        break;
      case 'new-window':
        window.open('/', '', 'width=1200, height=750');
        break;
      case 'open':
        Notepad.instance.openFile();
        break;
      case 'save':
        Notepad.instance.saveFile();
        break;
      case 'save-as':
        Notepad.instance.saveAsFile();
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
