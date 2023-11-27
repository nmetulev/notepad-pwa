import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/radio/radio.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import { Settings } from './utils/interfaces';
import SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js';
import SlRadioGroup from '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.js';

@customElement('app-settings')
export class AppMenu extends LitElement {

  // prefilled with the default settings
  @property({type: Object}) appSettings: Settings = {
    theme: "light",
    font: {family: "Consolas", style: "regular", size: 11},
    wrap: false,
    open_behavior: true,
    start_behavior: true
  };

  /*
    Are the controls hooked up?
    [ ] - App Theme
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
        padding: 5px;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;
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
        border-color: #e5e5e5;
        border-radius: 3px;
      }

      sl-details::part(header){
        background-color: #fbfbfb;
        padding: 20px;
        height: 30px;
        border-radius: 3px;
      }

      sl-details::part(content){
        background-color: #f4f4f4;
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
        border: 1px solid #e5e5e5;
        background-color: #fbfbfb;
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

      sl-icon {
        margin-right: 15px;
        font-size: 18px;

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

      sl-switch {
        margin-right: 10px;
      }

      sl-switch::part(control) {
        --height: 21px;
        --width: 48px;
        --sl-color-primary-600: #0067c0;
      }

      sl-switch::part(thumb){
        width: 15px;
        height: 15px;
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
        color: #0067c0;
        text-decoration: none;
        font-size: 16px;
        padding: 5px 0;
        width: fit-content;
        padding: 5px 20px;
        border-radius: 3px;
      }

      .links a:visited, .links a:active {
        color: #0067c0
      }

      .links button {
        all: unset;
        color: #0067c0;
        font-size: 16px;
        padding: 5px 0;
        width: fit-content;
        padding: 5px 20px;
        border-radius: 3px;
      }

      .links button:hover {
        cursor: pointer;
        background-color: #eaeaea;
        color: #20377a;
      }

      .links a:hover {
        background-color: #eaeaea;
        color: #20377a;
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
        background-color: #fbfbfb;
        border-radius: 3px;
        border: 1px solid #e5e5e5;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
      }

      .buttons *:hover {
        cursor: default;
        background-color: #f6f6f6;
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
        background-color: #0067c0;
        border-color: #0067c0;
      }
      sl-radio::part(control--checked):hover  {
        background-color: #0067c0;
        border-color: #0067c0;
      }
    `;
  }

  constructor() {
    super();
  }

  connectedCallback(){
    super.connectedCallback();
    console.log(this.appSettings);
  }

  toggleWordsWrapping(){

    const switcher = this.shadowRoot!.querySelector('sl-switch') as unknown as SlSwitch;

    const wrapping = switcher.checked;

    this.appSettings.wrap = wrapping;
    this.writeSettings();

    const event = new CustomEvent('updateSettings', {
      bubbles: true, // if you want the event to bubble up through the DOM
    });
    this.dispatchEvent(event);
  }

  writeSettings(){
    localStorage.setItem('notepadSettings', JSON.stringify(this.appSettings));
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

    this.appSettings.font = updatedFont;
    this.writeSettings();

    const event = new CustomEvent('updateSettings', {
      bubbles: true, // if you want the event to bubble up through the DOM
    });
    this.dispatchEvent(event);
  }

  backToEditor(){
    const event = new CustomEvent('showEditor', {
      bubbles: true, // if you want the event to bubble up through the DOM
    });
    this.dispatchEvent(event);
  }

  updateStartBehvaior(){

    let group = this.shadowRoot!.querySelector("#start-group") as unknown as SlRadioGroup;

    this.appSettings.start_behavior = group.value === "true" ? true : false;
    this.writeSettings();

    const event = new CustomEvent('updateSettings', {
      bubbles: true, // if you want the event to bubble up through the DOM
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="root">
        <button type="button" @click=${() => this.backToEditor()}>Back</button>
        <h1>Settings</h1>
        <div class="controls">
            <sl-details id="app-theme-details">
            <sl-icon name="chevron-up" label="chevron-up" slot="expand-icon"></sl-icon>
            <sl-icon name="chevron-down" label="chevron-down" slot="collapse-icon"></sl-icon>
                <div class="icon-header" slot="summary">
                    <sl-icon name="palette" label="palette"></sl-icon>
                    <div>
                        <h2 id="app-theme">App theme</h2>
                        <p> Select which app theme to display</p>
                    </div>
                </div>
                <sl-radio-group aria-labelledby="app-theme" value=${this.appSettings.theme}>
                    <sl-radio value="light">Light</sl-radio>
                    <sl-radio value="dark">Dark</sl-radio>
                    <sl-radio value="system">Use system setting</sl-radio>
                </sl-radio-group>
            </sl-details>
            <sl-details id="font-details">
              <sl-icon name="chevron-up" label="chevron-up" slot="expand-icon"></sl-icon>
              <sl-icon name="chevron-down" label="chevron-down" slot="collapse-icon"></sl-icon>
              <div class="icon-header" slot="summary">
                  <sl-icon name="fonts" label="fonts"></sl-icon>
                  <h2>Font</h2>
              </div>
              <div class="font-options">
                  <div class="font-option">
                      <h3 id="font-family">Family</h3>
                      <sl-select id="family-select" aria-labelledby="font-family" value=${this.appSettings.font.family} @sl-change=${() => this.updateFont()}>
                        ${fonts.map((font: string) => html`<sl-option value="${font}">${font}</sl-option>`)}
                      </sl-select>
                  </div>
                  <div class="font-option">
                      <h3 id="font-style">Style</h3>
                      <sl-select id="style-select" aria-labelledby="font-style" value=${this.appSettings.font.style} @sl-change=${() => this.updateFont()}>
                        <sl-option value="regular">Regular</sl-option>
                        <sl-option value="italic">Italic</sl-option>
                        <sl-option value="bold">Bold</sl-option>
                        <sl-option value="bold+italic">Bold Italic</sl-option>
                      </sl-select>
                  </div>
                  <div class="font-option">
                      <h3 id="font-size">Size</h3>
                      <sl-select id="size-select" aria-labelledby="font-size" value=${this.appSettings.font.size} @sl-change=${() => this.updateFont()}>
                          ${fontSizes.map((num: number) => html`<sl-option value=${num}>${num}</sl-option>`)}
                      </sl-select>
                  </div>
                  <div class="font-demo">
                      <p>The sound of ocean waves calms my soul</p>
                  </div>
                </div>
            </sl-details>
            <div class="non-collapsable-setting">
                <div class="ncs-item">
                    <sl-icon name="text-wrap" label="text-wrap"></sl-icon>
                    <div>
                        <h2 id="app-theme">Word wrap</h2>
                        <p>Fit text within window by default</p>
                    </div>
                </div>
                <sl-switch @sl-change=${() => this.toggleWordsWrapping()} .checked=${this.appSettings.wrap}>${this.appSettings.wrap ? "On" : "Off"}</sl-switch>
            </div>
            <div class="non-collapsable-setting">
                <div class="ncs-item">
                    <sl-icon name="box-arrow-up-right" label="box-arrow-up-right"></sl-icon>
                    <div>
                        <h2 id="opening-files">Opening files</h2>
                        <p>Choose where your files are opened</p>
                    </div>
                </div>
                <sl-select id="open-behavior-select" aria-labelledby="opening-files" value="new-tab">
                    <sl-option value="new-tab">Open in a new tab</sl-option>
                    <sl-option value="new-window">Open in a new window</sl-option>
                </sl-select>
            </div>
            <sl-details id="start-behavior-details">
              <sl-icon name="chevron-up" label="chevron-up" slot="expand-icon"></sl-icon>
              <sl-icon name="chevron-down" label="chevron-down" slot="collapse-icon"></sl-icon>
              <div class="icon-header" slot="summary">
                  <sl-icon name="sticky" label="sticky"></sl-icon>
                  <h2 id="start-behavior">When Notepad (PWA) starts</h2>
              </div>
              <sl-radio-group id="start-group" aria-labelledby="start-behavior" value=${this.appSettings.start_behavior} @sl-change=${() => this.updateStartBehvaior()}>
                  <sl-radio value="true">Open content from the previous session</sl-radio>
                  <sl-radio value="false">Open a new window</sl-radio>
              </sl-radio-group>
          </sl-details>
        </div>
        <div class="about-this-app">
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
        </div>
      </div>
    `;
  }


}

const fontSizes: number[] = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
const fonts: string[] = [
  "Arial",
  "Calibri",
  "Consolas",
  "Georgia",
  "Impact",
  "Magneto",
  "Segoe UI",
  "Tahoma",
  "Times New Roman",
  "Verdana"
]