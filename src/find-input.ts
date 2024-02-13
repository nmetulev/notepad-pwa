import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Notepad } from './state';
import { Settings } from './settings-state';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('find-input')
export class AppMenu extends LitElement {

    @state() showClear = false;
    @state() showReplace = false;
    @state() inputValue = "";

  static get styles() {
    return css`

    * {
        box-sizing: border-box;
    }

    .root {
        display: flex;
        flex-direction: column;
        width: fit-content;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border: 1px solid #bfbfbf;
        background-color: #fbfbfb;
        border-radius: 8px;
        gap: 10px;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    }

    .find-holder {
      display: flex;
      width: 100%;
      gap: 10px;
    }

    .replace-holder {
      display: flex;
      width: 100%;
      gap: 10px;
    }

    .ghost {
      height: 35px;
      width: 35px;
    }

    .input-and-actions {
      background-color: #ffffff;
      border-radius: 4px;
      border: 1px solid #e5e5e5;
      border-bottom: 1px solid #000000;
      width: 250px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 5px;
    }

    .the-input {
        width: 100%;
        border: none;
        outline: none;
    }

    .the-input:focus-visible {
        outline: none;
    }

    .input-and-actions:focus-within {
        outline: none;
        border-bottom: 2px solid var(--link-text-color);
    }

    .icon-button {
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        width: 35px;
        height: 35px;
        border-radius: 8px;
    }

    .icon-button:hover {
        background-color: #f3f3f3;
    }

    .search-action {
        padding: 5px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        width: 35px;
        height: 25px;
        border-radius: 8px;
    }

    .search-action:hover {
        background-color: #f3f3f3;
    }

    sl-menu {
        background-color: var(--menu-dropdown-background-color);
        border-color: var(--menu-dropdown-background-color);
        color: var(--text-color);
        padding: 5px;
        --auto-size-available-height: calc(var(--auto-size-available-height) + 20px);
    }

    sl-menu-item::part(base){
        border-radius: 4px;
        width: 100%;
    }

    sl-menu-item:hover {
        cursor: default;
    }

    sl-menu-item::part(base):hover{
        cursor: default;
        color: var(--text-color);
        background-color: var(--menu-item-hover-background-color);
    }

    sl-menu-item::part(label){
        font-size: 14px;
    }

    .replace-holder button {
      all: unset;
      background-color: var(--button-background-color);
      border-radius: 3px;
      border: 1px solid var(--button-border-color);
      padding: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      width: 18%;
    }

    .replace-holder button:hover {
      cursor: default;
      background-color: var(--button-hover-background-color);
    }

    #replace-form {
      display: flex;
      gap: 10px;
    }

    .replace-input-box {
      width: 245px;
    }

    `;
  }

  constructor() {
    super();
    // puts the last value back in the box
    if(localStorage.getItem("search-string-setting-state")){
      Notepad.instance.substringToFind = JSON.parse(localStorage.getItem("search-string-setting-state")!);
    }
    if(localStorage.getItem('notepadSettings')){
      Settings.instance.matchCaseForSearchResult = JSON.parse(localStorage.getItem('notepadSettings')!).matchCaseForSearchResult || false;
    }
    this.inputValue = Notepad.instance.substringToFind;
  }


  firstUpdated(){
    let input = this.shadowRoot!.querySelector('input')!;
    input?.focus();
  }

  updateSubstringToFind(){
    const input = this.shadowRoot!.querySelector('input');
    const newSubstring = input!.value;
    newSubstring.length === 0 ? this.showClear = false : this.showClear = true;
    Notepad.instance.substringToFind = newSubstring;
    this.requestUpdate();
  }

  handleSubmit(e: Event){
    e.preventDefault()
    Notepad.instance.search(Notepad.instance.findListIndex)
  }

  updateIndex(value: number){
    Notepad.instance.findListIndex += value;
  }

  clearInput(){
    const input = this.shadowRoot!.querySelector('input') as HTMLInputElement;
    input.value = "";
    this.showClear = true;
    Notepad.instance.selection.removeAllRanges();
    Notepad.instance.substringToFind = "";
  }

  handleCloseComponent(){
    this.dispatchEvent(new Event('close-find-input', { bubbles: true, composed: true }));
  }

  menuItemClicked(item: string){
    switch (item) {
        case 'match-case':
          Settings.instance.matchCaseForSearchResult = !Settings.instance.matchCaseForSearchResult;
          break;
        case 'wrap':
          Settings.instance.wrapSearchResults = !Settings.instance.wrapSearchResults;
          break;
        default:
          console.log(`${item} NOT IMPLEMENTED`)
    }
  }

  handleShowingReplace(){
    this.showReplace = !this.showReplace;
    this.requestUpdate();
  }

  handleReplace(all: boolean){
    const form = this.shadowRoot!.getElementById('replace-form') as HTMLFormElement;
    const formData = new FormData(form);

    const replaceText = formData.get('replaceText') as string;

    if(all){
      Notepad.instance.replaceAll(replaceText);
    } else {
      Notepad.instance.replace(replaceText);
    }

  }

  render() {

    const replaceDisplaySetting = {
      display: this.showReplace ? 'flex' : 'none'
    }

    return html`
        <div class="root">
          <div class="find-holder">
            <button type="button" class="icon-button" value="show-more" @click=${() => this.handleShowingReplace()}><sl-icon name="chevron-up" label="chevron-up"></sl-icon></button>

            <form class="input-and-actions" @submit=${(e: Event) => this.handleSubmit(e)}>
              <input .value=${this.inputValue} class="the-input" placeholder="Find" @input=${() => this.updateSubstringToFind()} />
              ${this.showClear ? html`<button type="button" class="search-action" value="clear" @click=${() => this.clearInput()}><sl-icon name="x-lg" label="close"></sl-icon></button>` : null }
              <button type="button" class="search-action" value="search" @click=${() => Notepad.instance.search()}><sl-icon name="search" label="search"></sl-icon></button>
            </form>
            <button type="button" class="icon-button" value="previous" @click=${() => this.updateIndex(1)}><sl-icon name="arrow-down" label="arrow-down"></sl-icon></button>
            <button type="button" class="icon-button" value="next" @click=${() => this.updateIndex(-1)}><sl-icon name="arrow-up" label="arrow-up"></sl-icon></button>
            <sl-dropdown placement="bottom">
                <button type="button" slot="trigger" class="icon-button" value="options"><sl-icon name="sliders" label="sliders"></sl-icon></button>
                <sl-menu class="zoom-menu" @sl-select=${(e: any) => this.menuItemClicked(e.detail.item.value)}>
                    <sl-menu-item type="checkbox" value="match-case" ?checked=${Settings.instance.matchCaseForSearchResult}>Match case</sl-menu-item>
                    <sl-menu-item type="checkbox" value="wrap" ?checked=${Settings.instance.wrapSearchResults}>Wrap around</sl-menu-item>
                </sl-menu>
            </sl-dropdown>
            <button type="button" class="icon-button" value="close" @click=${() => this.handleCloseComponent()}><sl-icon name="x-lg" label="close"></sl-icon></button>
          </div>

          <div class="replace-holder" style=${styleMap(replaceDisplaySetting)}>
          <div class="ghost"></div>
          <form id="replace-form" @submit=${(e: Event) => e.preventDefault() }>
            <div class="input-and-actions replace-input-box"><input name="replaceText" class="the-input" placeholder="Replace" /></div>
            <button type="submit" @click=${() => this.handleReplace(false)}>Replace</button>
            <button type="submit" @click=${() => this.handleReplace(true)}>Replace all</button>
          </form>
          </div>

        </div>
    `;
  }
}
