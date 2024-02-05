import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Notepad } from './state';

@customElement('find-input')
export class AppMenu extends LitElement {

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
  }

  updateSubstringToFind(){
    const input = this.shadowRoot!.querySelector('input');
    const newSubstring = input!.value;
    Notepad.instance.substringToFind = newSubstring;
    //input?.focus()
  }

  updateIndex(value: number){
    Notepad.instance.findListIndex += value;
  }

  render() {
    return html`
      <div class="root">
        <input @input=${() => this.updateSubstringToFind()} />
        <button type="button" @click=${() => this.updateIndex(-1)}>prev</button>
        <button type="button" @click=${() => this.updateIndex(1)}>next</button>
    </div>
    `;
  }
}
