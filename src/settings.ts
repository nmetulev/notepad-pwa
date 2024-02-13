import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/radio/radio.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js';
import SlRadioGroup from '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.js';
import { styleMap } from 'lit/directives/style-map.js';
import { Settings, Theme } from './state';
import { getFonts } from './utils/font-factory';

@customElement('app-settings')
export class AppMenu extends LitElement {

  @state() availableFonts: any = {};
  @state() neededIconColor: string = "";

  /*
    Are the controls hooked up?
    [x - App Theme
    [x] - Font
    [x] - Wrap
    [ ] - Open Behavior
    [~] - Start Behvaior ... weird issue with things erasing between settings page

  */

  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }

      .root {
        /* background: var(--settings-background); */
        background: var(--header-background-color);
        color: var(--text-color);
        /* background: -moz-linear-gradient(45deg, hsla(207, 48%, 95%, 1) 0%, hsla(34, 57%, 95%, 1) 100%);
        background: -webkit-linear-gradient(45deg, hsla(207, 48%, 95%, 1) 0%, hsla(34, 57%, 95%, 1) 100%); */
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#EEF4F9", endColorstr="#F9F2E9", GradientType=1 );
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        height: 100vh;
      }

      .header label {
        font-size: 12px;
        margin-left: 16px;

      }

      .header {
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        width: env(titlebar-area-width, 100%);
        height: 44px;
        app-region: drag;

        color: var(--text-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        font-family: Segoe UI Variable Text, Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif;
        padding: 6px;
      }

      .back-button {
        background-color: transparent;
        border: none;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        app-region: no-drag;
      }

      .back-button:hover {
        background-color: #e8eaf0;
      }

      .back-button sl-icon {
        margin: 6px 2px;
        font-size: 14px
      }


      .header img {
        height: 20px;
        width: 20px;
        margin-left: 10px
      }

      .header label {
        font-size: 13px;
        margin-left: 12px;
      }

      .content {
        padding: 40px 12px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1 1 auto;
        overflow: auto;
      }

      .root h1 {
        padding-left: 20px;
      }

      .controls {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 0 20px;
      }

      sl-details {
        border-radius: 3px;
      }

      sl-details::part(base){
        background-color: var(--details-header-color);
        border-color: var(--details-border-color);
        border-radius: 3px;
      }

      sl-details::part(header){
        background-color: var(--details-header-color);
        padding: 20px;
        height: 30px;
        border-radius: 3px;
      }

      sl-details::part(content){
        background-color: var(--details-content-color);
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
      }

      sl-details::part(summary-icon){
        rotate: none;
        transition: none;
      }

      /* @keyframes rotateAnimation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(180deg);
        }
      } */

      .icon-header, .non-collapsable-setting {
        display: flex;
        align-items: center;
      }

      .non-collapsable-setting {
        justify-content: space-between;
        border: 1px solid var(--details-border-color);;
        background-color: var(--details-header-color);
        padding: 9px 20px;
        height: 50px;
        box-sizing: unset;
      }

      .ncs-item {
        align-items: center;
      }

      .icon-header div, .ncs-item div {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

      .non-collapsable-setting div {
        display: flex;
      }

      .flip_icon {
        transform: scale(-1,1);
      }

      .settings-icon, sl-icon {
        margin-right: 15px;
        font-size: 18px;
        fill: var(--text-color)
      }

      h1, h2, p {
        margin: 0;
      }

      h1 {
        font-size: 40px;
      }

      h2, h3 {
        font-size: 16px;
        font-weight: normal;
      }

      p {
        font-size: 12px;
      }

      .font-options, .font-option {
        display: flex;
        justify-content: space-between;
      }

      .font-options {
        flex-direction: column;
      }

      .font-option {
        border-bottom: 1px solid #e5e5e5;
        align-items: center;
        padding: 10px;
      }

      .font-options:last-child {
        border-bottom: unset;
      }

      h3 {
        margin: 15px;
        margin-left: 43px;
      }

      #font-details::part(content){
        padding: 0;
      }

      .font-demo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }

      .font-option sl-select {
        margin-right: 10px;
      }

      sl-select::part(combobox){
        color: var(--text-color);
        background-color: var(--select-background-color);
        border-color: var(--select-border-color);
      }

      sl-select::part(display-input){
        color: var(--text-color);
      }

      sl-select::part(listbox){
        background-color: var(--select-dropdown-background-color);
        border-color: var(--select-dropdown-background-color);
      }

      sl-option::part(label){
        color: var(--text-color);
      }

      sl-option::part(base){
        background-color: var(--select-dropdown-background-color);
      }

      sl-option::part(base):hover{
        background-color: var(--option-hover-background-color);
      }

      sl-option::part(checked-icon){
        color: var(--text-color);
      }

      sl-switch {
        margin-right: 10px;
      }

      sl-switch::part(control) {
        --height: 21px;
        --width: 48px;
        --sl-color-primary-600: var(--switch-background-color);
      }

      sl-switch::part(thumb){
        width: 15px;
        height: 15px;
        background-color: var(--switch-thumb-color)
      }

      #open-behavior-select{
        width: fit-content;
      }

      #open-behavior-select::part(display-input){
        font-size: 14px;
        white-space: nowrap;
      }

      .about-this-app {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding-left: 20px;
      }

      .about-this-app h2 {
        font-weight: bold;
      }
      .about-this-app h2, .about-this-app p {
        font-size: 16px;
      }

      .links {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: fit-content;
      }

      .links button {
        all: unset;
      }

      .links a, .links button {
        color: var(--link-text-color);
        text-decoration: none;
        font-size: 16px;
        padding: 5px 0;
        width: fit-content;
        padding: 5px 20px;
        border-radius: 3px;
      }

      .links a:visited, .links a:active {
        color: var(--link-text-color)
      }

      .links button {
        all: unset;
        color: var(--link-text-color);
        font-size: 16px;
        padding: 5px 0;
        width: fit-content;
        padding: 5px 20px;
        border-radius: 3px;
      }

      .links button:hover {
        cursor: pointer;
        background-color: var(--link-hover-background-color);
        color: var(--link-hover-text-color);
      }

      .links a:hover {
        background-color: var(--link-hover-background-color);
        color: var(--link-hover-text-color);
      }

      .buttons {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: fit-content;
        padding-left: 20px;
      }

      .buttons * {
        all: unset;
        background-color: var(--button-background-color);
        border-radius: 3px;
        border: 1px solid var(--button-border-color);
        padding: 5px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
      }

      .buttons *:hover {
        cursor: default;
        background-color: var(--button-hover-background-color);
      }

      #app-theme-details::part(content), #start-behavior-details::part(content){
        padding: 20px 43px;
      }
      sl-radio-group::part(form-control-input){
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      sl-radio::part(base){
        display: flex;
        align-items: center;
      }
      sl-radio::part(control){
        height: 20px;
        width: 20px;
        background-color: #eeeeee;
        border-color: #949494;
      }
      sl-radio::part(control):hover  {
        background-color: #e6e6e6;
      }
      sl-radio::part(control--checked)  {
        color: var(--radio-pit-color);
        background-color: var(--radio-background-color);
        border-color: var(--radio-background-color);
      }
      sl-radio::part(control--checked):hover  {
        color: var(--radio-pit-color);
        background-color: var(--radio-background-color);
        border-color: var(--radio-background-color);
      }

      .subtext {
        color: var(--subtext-color);
      }
    `;
  }

  constructor() {
    super();
  }

  async connectedCallback() {
    super.connectedCallback();
    this.availableFonts = await getFonts();
  }

  updateTheme(){
    let group = this.shadowRoot!.querySelector("#theme-group") as unknown as SlRadioGroup;
    Settings.instance.theme = group.value as Theme;
  }

  updateFont(){
    const family = this.shadowRoot?.querySelector("#family-select") as unknown as SlSelect;
    const style = this.shadowRoot?.querySelector("#style-select") as unknown as SlSelect;
    const size = this.shadowRoot?.querySelector("#size-select") as unknown as SlSelect;

    let updatedFont = {
      family: family.value as string,
      style: style.value as string,
      size: parseInt(size.value as string)
    }

    Settings.instance.font = updatedFont;

    this.requestUpdate();
  }

  toggleWordsWrapping(){

    const switcher = this.shadowRoot!.querySelector('sl-switch') as unknown as SlSwitch;

    const wrapping = switcher.checked;

    Settings.instance.wrap = wrapping;
  }

  updateStartBehvaior(){

    let group = this.shadowRoot!.querySelector("#start-group") as unknown as SlRadioGroup;

    Settings.instance.start_behavior = group.value === "true" ? true : false;
  }

  generateFontGroups(){
    if(this.availableFonts && Object.keys(this.availableFonts).length > 0){
      return html`
      <div class="font-option">
        <h3 id="font-family">Family</h3>
        <sl-select id="family-select" aria-labelledby="font-family" value=${Settings.instance.font.family} @sl-change=${() => this.updateFont()}>
          ${Object.keys(this.availableFonts).map((font: string) => html`<sl-option value="${font}">${this.availableFonts[font].full_name}</sl-option>`)}
        </sl-select>
      </div>
      <div class="font-option">
        <h3 id="font-style">Style</h3>
        <sl-select id="style-select" aria-labelledby="font-style" value=${this.availableFonts[Settings.instance.font.family].styles.includes(Settings.instance.font.style) ? Settings.instance.font.style : this.availableFonts[Settings.instance.font.family].styles[0]} @sl-change=${() => this.updateFont()}>
          ${this.availableFonts[Settings.instance.font.family].styles.map((style: string) => html`<sl-option value="${style}">${style.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</sl-option>`)}
        </sl-select>
      </div>
    `
    }
    return;
  }

   backButtonClicked() {
    const event = new CustomEvent('settingsClosed', {
      bubbles: true, // if you want the event to bubble up through the DOM
    });
    this.dispatchEvent(event);
  }

  // <!-- <sl-select id="style-select" aria-labelledby="font-style" value=${this.availableFonts[Settings.instance.font.family]?.styles?.includes(Settings.instance.font.style) ? Settings.instance.font.style : this.availableFonts[Settings.instance.font.family].styles[0]} @sl-change=${() => this.updateFont()}>
  //         ${this.availableFonts[Settings.instance.font.family].styles.map((style: string) => html`<sl-option value="${style}">${style.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</sl-option>`)}
  //       </sl-select> -->
  getColorMode() {
    const root = document.documentElement;
    const varValue = getComputedStyle(root).getPropertyValue('--text-color').trim();

    if(varValue !== "#191919"){
      this.neededIconColor = "_white";
    }
  }

  decideFontWeight(){
    const style = Settings.instance.font.style;
    if(style.includes("light")){
      return "300";
    } else if(style.includes("semilight")) {
      return "350";
    } else if(style.includes("medium")){
      return "500";
    } else if(style.includes("demi") || style.includes("semibold")) {
      return "600";
    } else if(style.includes("bold")){
      return "bold";
    } else if(style.includes("black")){
      return "900";
    }

    return "unset";
  }

  decideFontStyle(){
    const style = Settings.instance.font.style;
    if(style.includes("italic")){
      return "italic";
    } else if(style.includes("oblique")){
      return "oblique";
    }
    return "unset";
  }

  render() {

    const styleInfo = {
      'font-size': (Settings.instance.font.size).toString() + 'px',
      'font-family': Settings.instance.font.family,
      'font-style': this.decideFontStyle(),
      'font-weight': this.decideFontWeight(),
      'font-stretch': Settings.instance.font.style.includes("narrow") || Settings.instance.font.style.includes("condensed") ? "condensed" : "unset",
      'margin': '10px'
    };

    return html`
      <div class="root">
        <div class="header">
          <button class="back-button" type="button" @click=${() => this.backButtonClicked()}><sl-icon name="arrow-left"></sl-icon></button>
          <img src="/assets/icons/Square44x44Logo.scale-100.png" alt="Notepad logo" />
          <label>Notepad</label>
        </div>
        <div class="content">
          <h1>Settings</h1>
          <div class="controls">
              <sl-details id="app-theme-details">
              <sl-icon name="chevron-up" label="chevron-up" slot="expand-icon"></sl-icon>
              <sl-icon name="chevron-down" label="chevron-down" slot="collapse-icon"></sl-icon>
                  <div class="icon-header" slot="summary">
                    ${iconSvgs["theme"]}
                    <div>
                        <h2 id="app-theme">App theme</h2>
                        <p class="subtext"> Select which app theme to display</p>
                    </div>
                  </div>
                  <sl-radio-group aria-labelledby="app-theme" id="theme-group" value=${Settings.instance.theme} @sl-change=${() => this.updateTheme()}>
                      <sl-radio value="light">Light</sl-radio>
                      <sl-radio value="dark">Dark</sl-radio>
                      <sl-radio value="system">Use system setting</sl-radio>
                  </sl-radio-group>
              </sl-details>
              <sl-details id="font-details">
                <sl-icon name="chevron-up" label="chevron-up" slot="expand-icon"></sl-icon>
                <sl-icon name="chevron-down" label="chevron-down" slot="collapse-icon"></sl-icon>
                <div class="icon-header" slot="summary">
                    ${iconSvgs["font"]}
                    <h2>Font</h2>
                </div>
                <div class="font-options">

                    ${this.generateFontGroups()}

                    <div class="font-option">
                        <h3 id="font-size">Size</h3>
                        <sl-select id="size-select" aria-labelledby="font-size" value=${Settings.instance.font.size} @sl-change=${() => this.updateFont()}>
                            ${fontSizes.map((num: number) => html`<sl-option value=${num}>${num}</sl-option>`)}
                        </sl-select>
                    </div>
                    <div class="font-demo">
                        <p style=${styleMap(styleInfo)}>The sound of ocean waves calms my soul.</p>
                    </div>
                  </div>
              </sl-details>
              <div class="non-collapsable-setting">
                <div class="ncs-item">
                    ${iconSvgs["wrap"]}
                    <div>
                        <h2 id="app-theme">Word wrap</h2>
                        <p class="subtext">Fit text within window by default</p>
                    </div>
                </div>
                <sl-switch @sl-change=${() => this.toggleWordsWrapping()} .checked=${Settings.instance.wrap}>${Settings.instance.wrap ? "On" : "Off"}</sl-switch>
            </div>
          <div class="non-collapsable-setting">
              <div class="ncs-item">
                ${iconSvgs["open"]}
                <div>
                    <h2 id="opening-files">Opening files</h2>
                    <p class="subtext">Choose where your files are opened</p>
                </div>
              </div>
              <sl-select id="open-behavior-select" aria-labelledby="opening-files" value="${Settings.instance.open_behavior}">
                  <sl-option value="true">Open in a new tab</sl-option>
                  <sl-option value="false">Open in a new window</sl-option>
              </sl-select>
          </div>
            <sl-details id="start-behavior-details">
              <sl-icon name="chevron-up" label="chevron-up" slot="expand-icon"></sl-icon>
              <sl-icon name="chevron-down" label="chevron-down" slot="collapse-icon"></sl-icon>
              <div class="icon-header" slot="summary">
                  ${iconSvgs["tab"]}
                  <h2 id="start-behavior">When Notepad (PWA) starts</h2>
              </div>
              <sl-radio-group id="start-group" aria-labelledby="start-behavior" value=${Settings.instance.start_behavior} @sl-change=${() => this.updateStartBehvaior()}>
                  <sl-radio value="true">Open content from the previous session</sl-radio>
                  <sl-radio value="false">Open a new window</sl-radio>
              </sl-radio-group>
            </sl-details>


            </div>
          </div>
        <!-- <div class="about-this-app">
            <h2>About this app</h2>
            <p>Windows Notepad 11.2310.12.0<br>
            © 2023 Microsoft. All rights reserved.</p>
        </div>
        <div class="links">
            <a href="https://www.microsoft.com/en-us/Useterms/Retail/Windows/10/UseTerms_Retail_Windows_10_English.htm" target="_blank" rel="noopener">Microsoft Software License Terms</a>
            <a href="https://www.microsoft.com/en-us/servicesagreement" target="_blank" rel="noopener">Microsoft Services Agreement</a>
            <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener">Microsoft Privacy Statement</a>
            <button>Third-Party Software Acknowledgements</button>
        </div>
        <div class="buttons">
            <button>Send feedback</button>
            <a class="link-button" href="https://support.microsoft.com/en-us/windows/help-in-notepad-4d68c388-2ff2-0e7f-b706-35fb2ab88a8c" target="_blank" rel="noopener">Help</a>
        </div> -->
      </div>
    `;
  }

}

const fontSizes: number[] = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
const iconSvgs = {
  "theme": html`<svg class="settings-icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3 1a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.5 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM13.25 14a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm.45-11a7.82 7.82 0 0 0-7.93.17 9.6 9.6 0 0 0-3.25 3.89 5.9 5.9 0 0 0-.62 2.43c0 .8.27 1.57.94 2.12.61.5 1.14.74 1.66.77.51.02.92-.19 1.23-.37l.2-.12c.24-.15.44-.27.69-.35.28-.09.64-.12 1.16.04.19.06.3.14.38.24.09.1.16.26.2.47.06.21.09.46.1.76.02.1.02.24.03.37l.04.58c.05.67.17 1.44.57 2.14.42.7 1.1 1.3 2.2 1.68 1.6.54 3.07.1 4.21-.8a7.46 7.46 0 0 0 2.37-3.6C19.2 9.16 17.68 5.04 13.7 3ZM6.3 4.01a6.82 6.82 0 0 1 6.94-.14c3.5 1.8 4.87 5.4 3.69 9.25a6.46 6.46 0 0 1-2.04 3.1 3.33 3.33 0 0 1-3.26.64c-.9-.3-1.38-.76-1.66-1.24a4 4 0 0 1-.44-1.7l-.04-.54-.02-.41c-.03-.31-.06-.63-.13-.93-.07-.3-.2-.6-.4-.86-.22-.26-.5-.46-.87-.57a2.85 2.85 0 0 0-1.75-.03c-.38.12-.7.32-.95.47l-.14.09c-.29.16-.48.24-.68.23-.22-.01-.55-.12-1.08-.55-.38-.31-.57-.76-.57-1.34 0-.6.19-1.29.52-2.01A8.63 8.63 0 0 1 6.3 4.02Z"/></svg>`,
  "font": html`<svg class="settings-icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2c.2 0 .4.13.47.32L8.9 8.57v.02l.18.44-.53 1.4-.46-1.17H3.91l-.94 2.42a.5.5 0 1 1-.94-.36L3.1 8.59v-.02l2.43-6.25A.5.5 0 0 1 6 2ZM4.3 8.26h3.4L6 3.88 4.3 8.26Zm8.17-2.94a.5.5 0 0 0-.94 0L7.15 17H6.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.28l1.13-3h5.37l1.15 3h-.37a.5.5 0 1 0 0 1h2a.5.5 0 1 0 0-1h-.56L12.47 5.32ZM14.34 13H9.72l2.29-6.09L14.34 13Z"/></svg>`,
  "wrap": html`<svg class="settings-icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5H16a3 3 0 1 1 0 6h-4.3l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 0 1 .7.7l-.64.65H16a2 2 0 1 0 0-4H2.5a.5.5 0 0 1-.5-.5Zm0 5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z"/></svg>`,
  "open": html`<svg class="settings-icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2.5a.5.5 0 0 1 0 1H6Zm5-.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V4.7l-4.15 4.15a.5.5 0 0 1-.7-.7L15.29 4H11.5a.5.5 0 0 1-.5-.5Z"/></svg>`,
  "tab": html`<svg class="settings-icon flip_icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM16 6v-.5c0-.83-.67-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16ZM8 4H5.5C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4Z"/></svg>`
}