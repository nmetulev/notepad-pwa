import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-menu')
export class AppMenu extends LitElement {

  static get styles() {
    return css`
      .root {
        height: 48px;
        width: 100%;
        background-color: #f0f4f9;

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
