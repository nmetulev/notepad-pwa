import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Notepad } from './state';

@customElement('find-input')
export class AppMenu extends LitElement {

    @state() firstEnter = false;

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

  handleSubmit(e: Event){
    e.preventDefault()
    Notepad.instance.highlightText()
  }

  updateIndex(value: number){
    Notepad.instance.findListIndex += value;
  }

  render() {
    return html`
        <div class="root">
            <form @submit=${(e: Event) => this.handleSubmit(e)}>
                <input @input=${() => this.updateSubstringToFind()} />
            </form>
            <button type="button" @click=${() => this.updateIndex(-1)}>prev</button>
            <button type="button" @click=${() => this.updateIndex(1)}>next</button>
        </div>
    `;
  }
}
