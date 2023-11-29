import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-status-bar')
export class AppMenu extends LitElement {

  static get styles() {
    return css`
      .root {
        height: 32px;
        width: 100%;
        background-color: var(--status-bar-background-color);
        border-top: solid 1.5px var(--status-bar-border-color);

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
