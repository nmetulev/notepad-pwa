import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-editor')
export class AppMenu extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block
      }

      .root {
        background-color: white;
        /* padding: 16px; */
        font-family: "Lucida Console";
        font-size: 12pt;
        font-style: regular;
        height: 100%;
      }

      .editor {
        padding: 16px;
        min-height: calc(100% - 32px);
      }

      *:focus {
          outline: none;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="root" >
        <div class="editor" contenteditable>
          contenteditable
          <br />
          <br />
          TODO:
          <br />
          paste plain text only
        </div>
      </div>
    `;
  }
}
