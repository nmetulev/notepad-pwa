import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Notepad, notepadEventNames } from './state';
import { Settings, settingsEventNames } from './settings-state';

@customElement('app-status-bar')
export class AppMenu extends LitElement {

  @state() start: number = 0;
  @state() end: number = 0;
  @state() line: number = 0;
  @state() lineEnding: string = "Windows (CRLF)";
  @state() encoding: string = "UTF-8";
  @state() zoom: number = 100;

  static get styles() {
    return css`
      .root {
        height: 16px;
        width: 100%;
        background-color: var(--status-bar-background-color);
        border-top: solid 1.5px var(--status-bar-border-color);
        display: grid;
        grid-template-columns: 6fr 13fr 5fr 10fr 10fr;
        padding: 7px;
        font-family: "Segoe UI Variable Text", "Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 12px;
        color: var(--status-bar-text-color);
      }

      .position, .zoom, .line-endings {
        border-right: 1px solid var(--status-bar-gap-color);
      }

      .root > * {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 10px;
      }
    `;
  }

  constructor() {
    super();
    Notepad.instance.on(notepadEventNames.cursorPositionChanged, () => this.handleCursorUpdate(this));
    Notepad.instance.on(notepadEventNames.fileEndingChanged, () => this.handleDataChange(this, 'file-ending'));
    Notepad.instance.on(notepadEventNames.encodingChanged, () => this.handleDataChange(this, 'encoding'));
    Settings.instance.on(settingsEventNames.zoomChanged, () => this.handleDataChange(this, 'zoom'));
  }

  disconnectedCallback(): void {
    Notepad.instance.removeListener(notepadEventNames.cursorPositionChanged, this.handleCursorUpdate);
    Notepad.instance.removeListener(notepadEventNames.fileEndingChanged, () => this.handleDataChange(this, 'file-ending'));
    Notepad.instance.removeListener(notepadEventNames.encodingChanged, () => this.handleDataChange(this, 'encoding'));
  }

  handleCursorUpdate(root: any){
    if(Notepad.instance.cursorPosition){
      const cursorPosition = Notepad.instance.cursorPosition;

      root.start = cursorPosition.start;
      root.end = Notepad.instance.cursorPosition.end;
      root.line = Notepad.instance.cursorPosition.line;
    }
  }

  handleDataChange(root: any, changedField: string){
    switch (changedField) {
      case 'file-ending':
        if(Notepad.instance.fileEnding){
          root.lineEnding = Notepad.instance.fileEnding;
        }
        break;
      case 'encoding':
        if(Notepad.instance.encoding){
          root.encoding = Notepad.instance.encoding
        }
        break;
      case 'zoom':
        if(Settings.instance.zoom){
          root.zoom = Settings.instance.zoom
        }
        break
      default:
        console.log(`No implementation for ${changedField}`);
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="root">
        <div class="position">
          Ln ${this.line}, Col ${this.end}
        </div>
        <div class="zoom">${Notepad.instance.editorContents.length} characters</div>
        <div class="zoom">${this.zoom}%</div>
        <div class="line-endings">${this.lineEnding}</div>
        <div class="text-type">${this.encoding}</div>
      </div>
    `;
  }
}
