import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './header';
import './menu';
import './editor';
import './status-bar';

import './styles/global.css';

@customElement('app-index')
export class AppIndex extends LitElement {
  static get styles() {
    return css`
      .root {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
      }

      app-editor {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: auto;
        background-color: pink; //todo - remove
      }

      /* app-header,
      app-menu {
        flex-grow: 0;
        flex-shrink: 0;
      } */
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {

  }

  render() {
    return html`
      <div class="root">
        <app-header></app-header>
        <app-menu></app-menu>
        <app-editor></app-editor>
        <app-status-bar></app-status-bar>
      </div>
    `;
  }
}
