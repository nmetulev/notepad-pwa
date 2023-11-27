import { LitElement, css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import SlDialog from '@shoelace-style/shoelace/dist/components/dialog/dialog';
import '@shoelace-style/shoelace/dist/components/dialog/dialog';

import './header';
import './menu';
import './editor';
import './settings'
import './status-bar';

import './styles/global.css';
import { Notepad, notepadEventNames } from './state';
import { Settings } from './utils/interfaces';

declare global {
  interface Window { launchQueue: any; }
}


let rootUrl = `/shoelace`
setBasePath(rootUrl)

@customElement('app-index')
export class AppIndex extends LitElement {

  // prefilled with the default settings
  @state() appSettings: Settings = {
    theme: "light",
    font: {family: "Consolas", style: "regular", size: 11},
    wrap: false,
    open_behavior: true,
    start_behavior: true
  };

  @state() showSettings: boolean = false;

  static get styles() {
    return css`

      .root {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
      }

      .root.settings-root {
        justify-content: flex-start;
        backdrop-filter: blur(1px);

        background: hsla(207, 48%, 95%, 1);
        background: linear-gradient(45deg, hsla(207, 48%, 95%, 1) 0%, hsla(34, 57%, 95%, 1) 100%);
        background: -moz-linear-gradient(45deg, hsla(207, 48%, 95%, 1) 0%, hsla(34, 57%, 95%, 1) 100%);
        background: -webkit-linear-gradient(45deg, hsla(207, 48%, 95%, 1) 0%, hsla(34, 57%, 95%, 1) 100%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#EEF4F9", endColorstr="#F9F2E9", GradientType=1 );
        overflow-y: auto;
      }

      app-editor {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: auto;
        overflow: auto;


        /* background-color: pink; //todo - remove */
      }
      app-editor::-webkit-scrollbar {
        width: 14px;
        height: 14px;
      }

      app-editor::-webkit-scrollbar-track {

      }

      app-editor::-webkit-scrollbar-thumb {
        background-color: #8a8a8a;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
      }

      /* app-header,
      app-menu {
        flex-grow: 0;
        flex-shrink: 0;
      } */
    `;
  }

  protected firstUpdated(): void {

    // check if there are settings from before
    if(localStorage.getItem('notepadSettings')){

      // if there are, update the defaults to the saved settings
      this.appSettings = JSON.parse(localStorage.getItem('notepadSettings')!);
    } else {

      // else, save the default settings to storage
      localStorage.setItem('notepadSettings', JSON.stringify(this.appSettings));
    }

    console.log(this.appSettings);
  }

  @query('.dialog', true) private dialog!: SlDialog
  private afterDialogAction!: string

  constructor() {
    super();

    if ('launchQueue' in window ) {
      window.launchQueue.setConsumer((launchParams : any) => {
        if (!launchParams.files.length) {
          return;
        }
        for (const fileHandle of launchParams.files) {
          Notepad.instance.setFileHandle(fileHandle);
        }
      });
    } else {
      console.error('File Handling API is not supported!');
    }

    document.addEventListener('keydown', e => {
      if (e.ctrlKey && e.key === 's') {
        // Prevent the Save dialog to open
        e.preventDefault();
        Notepad.instance.saveFile();
      }
    });

    window.addEventListener('beforeunload', e => {
      if (Notepad.instance.isDirty) {
        const message = `Do you want to save changes to ${Notepad.instance.fileName || 'Untitled'}`;
        e.returnValue = message;
        return message;
      }
      return;
    });

    Notepad.instance.on(notepadEventNames.decideOnChanges, (afterDialog: any) => this.showDialog(afterDialog))
  }

  private showDialog(e: string) {
    this.afterDialogAction = e;
    this.dialog.show();
  }

  private async continueFromDialog(shouldSave: boolean) {
    if (shouldSave) {
      await Notepad.instance.saveFile();
    }

    this.dialog?.hide();

    if (this.afterDialogAction === 'open') {
      Notepad.instance.openFile(true);
    } else {
      Notepad.instance.newFile(true);
    }

  }

  updateWordsWrapping(){
    // change word wrap behavior
    console.log("word wrap change")

    /*
      white-space: unset;
      width: 100vw;
      word-break: break-all;
    */
  }

  updateStateForSettingsPage(){
    this.showSettings = true;
    let root: HTMLDivElement = this.shadowRoot!.querySelector('.root')! as HTMLDivElement;
    //root.style.backgroundColor = '#f9f2e9';
    root.classList.add("settings-root")
  }

  backToEditor(){
    this.showSettings = false;
    let root: HTMLDivElement = this.shadowRoot!.querySelector('.root')! as HTMLDivElement;
    //root.style.backgroundColor = '#f9f2e9';
    root.classList.remove("settings-root")
  }

  updateSettings(){
    this.appSettings = JSON.parse(localStorage.getItem('notepadSettings')!)
  }

  render() {
    return html`
      <div class="root">
        ${!this.showSettings ?
          html`
            <app-header></app-header>
            <app-menu @showSettingsPage=${() => this.updateStateForSettingsPage()}></app-menu>
            <app-editor
              .fontStyles=${this.appSettings.font}
              .openLastSession=${this.appSettings.start_behavior}
              .wrapWords=${this.appSettings.wrap}
            ></app-editor>
            <app-status-bar></app-status-bar>
          ` :
          html`
            <app-settings
              .appSettings=${this.appSettings}
              @showEditor=${() => this.backToEditor()}
              @updateSettings=${() => this.updateSettings()}
            ></app-settings>
          `
        }

        <sl-dialog label="Notepad" class="dialog">
          Do you want to save changes to ${Notepad.instance.fileName || 'Untitled'}?
          <sl-button slot="footer" variant="primary" @click=${() => this.continueFromDialog(true)}>Save</sl-button>
          <sl-button slot="footer" @click=${() => this.continueFromDialog(false)}>Don't save</sl-button>
          <sl-button slot="footer" @click=${() => this.dialog?.hide()}>Cancel</sl-button>
        </sl-dialog>
      </div>
    `;
  }
}
