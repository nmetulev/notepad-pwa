import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/radio/radio.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';

@customElement('app-settings')
export class AppMenu extends LitElement {

    @state() wordsWrapping: boolean = false;

  static get styles() {
    return css`

    * {
      box-sizing: border-box;
    }

      .root {
        padding: 40px;
      }

      .controls {
        display: flex;
        flex-direction: column;
        gap: 5px;
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
        margin-bottom: 20px;
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
        margin-left: 40px;
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
    `;
  }

  constructor() {
    super();
  }

  toggleWordsWrapping(){
    this.wordsWrapping = !this.wordsWrapping;
    const event = new CustomEvent('changedWordsWrapping', {
        bubbles: true, // if you want the event to bubble up through the DOM
      });
      this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="root">
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
                <sl-radio-group aria-labelledby="app-theme">
                    <sl-radio>Light</sl-radio>
                    <sl-radio>Dark</sl-radio>
                    <sl-radio>Use system setting</sl-radio>
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
                      <sl-select aria-labelledby="font-family" value="font-Consolas">
                        ${fonts.map((font: string) => html`<sl-option value="font-${font}">${font}</sl-option>`)}
                      </sl-select>
                  </div>
                  <div class="font-option">
                      <h3 id="font-style">Style</h3>
                      <sl-select aria-labelledby="font-style">
                          <!-- Loop through font styles -->
                      </sl-select>
                  </div>
                  <div class="font-option">
                      <h3 id="font-size">Size</h3>
                      <sl-select aria-labelledby="font-size" value="font-size-11">
                          ${fontSizes.map((num: number) => html`<sl-option value="font-size-${num}">${num}</sl-option>`)}
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
                <sl-switch @sl-change=${() => this.toggleWordsWrapping()}>${this.wordsWrapping ? "On" : "Off"}</sl-switch>
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
              <sl-radio-group aria-labelledby="start-behavior">
                  <sl-radio>Open content from the previous session</sl-radio>
                  <sl-radio>Open a new window</sl-radio>
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