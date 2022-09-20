import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-status-bar')
export class AppMenu extends LitElement {

  static get styles() {
    return css`
      .root {
        height: 32px;
        width: 100%;
        background-color: #f3f3f3;
        border-top: solid 1.5px #e6e6e6;

      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="root">

      </div>
    `;
  }
}
