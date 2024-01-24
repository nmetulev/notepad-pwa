import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Notepad, notepadEventNames } from './state';

@customElement('app-status-bar')
export class AppMenu extends LitElement {

  @state() start: number = 0;
  @state() end: number = 0;
  @state() line: number = 0;
  @state() lineEnding: string = "Windows (CRLF)";

  static get styles() {
    return css`
      .root {
        height: 22px;
        width: 100%;
        background-color: var(--status-bar-background-color);
        border-top: solid 1.5px var(--status-bar-border-color);
        display: grid;
        grid-template-columns: 9fr 2fr 4fr 3fr;
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
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    Notepad.instance.on(notepadEventNames.cursorPositionChanged, () => this.handleCursorUpdate(this));
    Notepad.instance.on(notepadEventNames.fileEndingChanged, () => this.handleFileEndingChange(this));
  }

  disconnectedCallback(): void {
    Notepad.instance.removeListener(notepadEventNames.cursorPositionChanged, this.handleCursorUpdate);
    Notepad.instance.removeListener(notepadEventNames.fileEndingChanged, this.handleFileEndingChange);
  }

  handleCursorUpdate(root: any){
    if(Notepad.instance.cursorPosition){
      const cursorPosition = Notepad.instance.cursorPosition;

      root.start = cursorPosition.start;
      root.end = Notepad.instance.cursorPosition.end;
      root.line = Notepad.instance.cursorPosition.line;
    }
  }

  handleFileEndingChange(root: any){
    if(Notepad.instance.fileEnding){
      root.lineEnding = Notepad.instance.fileEnding;
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="root">
        <div class="position">
          Ln ${this.line}, Col ${this.end}
        </div>
        <div class="zoom">100%</div>
        <div class="line-endings">${this.lineEnding}</div>
        <div class="text-type">UTF-8</div>
      </div>
    `;
  }
}
