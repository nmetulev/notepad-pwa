import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-status-bar')
export class AppMenu extends LitElement {

  static get styles() {
    return css`
      .root {
        height: 32px;
        width: 100%;
        background-color: lightgray

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
