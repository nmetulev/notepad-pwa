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

declare global {
  interface Window { launchQueue: any; }
}


let rootUrl = `/shoelace`
setBasePath(rootUrl)

@customElement('app-index')
export class AppIndex extends LitElement {

  @state() showSettings: boolean = false;

  static get styles() {
    return css`
      .root {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
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
  }

  render() {
    return html`
      <div class="root">
        ${!this.showSettings ?
          html`
            <app-header></app-header>
            <app-menu @showSettingsPage=${() => this.showSettings = true}></app-menu>
            <app-editor></app-editor>
            <app-status-bar></app-status-bar>
          ` :
          html`
            <app-settings @changedWordsWrapping=${() => this.updateWordsWrapping()}></app-settings>
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
