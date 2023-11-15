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
      .root {

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
                <div slot="summary">
                    <sl-icon name="palette" label="palette"></sl-icon>
                    <h2 id="app-theme">App theme</h2>
                    <p> Select which app theme to display</p>
                </div>
                <sl-radio-group aria-labelledby="app-theme">
                    <sl-radio>Light</sl-radio>
                    <sl-radio>Dark</sl-radio>
                    <sl-radio>Use system setting</sl-radio>
                </sl-radio-group>
            </sl-details>
            <sl-details id="font-details">
                <div slot="summary">
                    <sl-icon name="fonts" label="fonts"></sl-icon>
                    <h2>Font</h2>
                </div>
                <div class="font-options">
                    <div class="font-option">
                        <h3 id="font-family">Family</h3>
                        <sl-select aria-labelledby="font-family">
                            <!-- Loop through font families -->
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
                <div>
                    <sl-icon name="text-wrap" label="text-wrap"></sl-icon>
                    <h2 id="app-theme">Word wrap</h2>
                    <p>Fit text within window by default</p>
                </div>
                <sl-switch @sl-change=${() => this.toggleWordsWrapping()}>${this.wordsWrapping ? "On" : "Off"}</sl-switch>
            </div>
            <div class="non-collapsable-setting">
                <div>
                    <sl-icon name="box-arrow-up-right" label="box-arrow-up-right"></sl-icon>
                    <h2 id="opening-files">Opening files</h2>
                    <p>Choose where your files are opened</p>
                </div>
                <sl-select aria-labelledby="opening-files" value="new-tab">
                    <sl-option value="new-tab">Open in a new tab</sl-option>
                    <sl-option value="new-window">Open in a new window</sl-option>
                </sl-select>
            </div>
            <sl-details id="start-behavior-details">
                <div slot="summary">
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
            <a class="link-button" href="" target="_blank" rel="noopener">Help</a>
        </div>
      </div>
    `;
  }


}

const fontSizes: number[] = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];