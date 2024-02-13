import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Notepad, NotepadFile, Settings, settingsEventNames } from './state';

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
        height: 22px;
        width: 100%;
        background-color: var(--status-bar-background-color);
        border-top: solid 1.5px var(--status-bar-border-color);
        display: grid;
        grid-template-columns: 6fr 13fr 5fr 10fr 10fr;
        padding: 7px;
        font-family: "Segoe UI Variable Text", "Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 12px;
        color: #696969;
      }

      .position, .zoom, .line-endings {
        border-right: 1px solid #d6dcdd;
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
    Notepad.current.on(NotepadFile.eventNames.cursorPositionChanged, () => this.handleCursorUpdate(this));
    Notepad.current.on(NotepadFile.eventNames.fileEndingChanged, () => this.handleDataChange(this, 'file-ending'));
    Notepad.current.on(NotepadFile.eventNames.encodingChanged, () => this.handleDataChange(this, 'encoding'));
    Settings.instance.on(settingsEventNames.zoomChanged, () => this.handleDataChange(this, 'zoom'));
  }

  disconnectedCallback(): void {
    Notepad.current.removeListener(NotepadFile.eventNames.cursorPositionChanged, this.handleCursorUpdate);
    Notepad.current.removeListener(NotepadFile.eventNames.fileEndingChanged, () => this.handleDataChange(this, 'file-ending'));
    Notepad.current.removeListener(NotepadFile.eventNames.encodingChanged, () => this.handleDataChange(this, 'encoding'));
  }

  handleCursorUpdate(root: any){
    if(Notepad.current.cursorPosition){
      const cursorPosition = Notepad.current.cursorPosition;

      root.start = cursorPosition.start;
      root.end = Notepad.current.cursorPosition.end;
      root.line = Notepad.current.cursorPosition.line;
    }
  }

  handleDataChange(root: any, changedField: string){
    switch (changedField) {
      case 'file-ending':
        if(Notepad.current.fileEnding){
          root.lineEnding = Notepad.current.fileEnding;
        }
        break;
      case 'encoding':
        if(Notepad.current.encoding){
          root.encoding = Notepad.current.encoding
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
        <div class="zoom">${Notepad.current.editorContents.length} characters</div>
        <div class="zoom">${this.zoom}%</div>
        <div class="line-endings">${this.lineEnding}</div>
        <div class="text-type">${this.encoding}</div>
      </div>
    `;
  }
}
