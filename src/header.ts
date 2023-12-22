import { LitElement, css, html, PropertyValueMap } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import { Notepad, NotepadFile } from './state';
import { styleMap } from 'lit/directives/style-map.js';

import TabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group';
import Tab from '@shoelace-style/shoelace/dist/components/tab/tab';

import '@shoelace-style/shoelace/dist/components/tab-group/tab-group';
import '@shoelace-style/shoelace/dist/components/tab/tab';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({type: Boolean}) settingsShowing: boolean = false;
  @query('.tabGroup') tabGroup!: TabGroup;
  @state() tabs : NotepadFile[] = [];
  @state() selectedTabIndex = 0;
  private _currentNotepadFile: NotepadFile | undefined;
  private shouldTearTab = false;

  private set currentNotepadFile(file: NotepadFile | undefined) {
    if (this._currentNotepadFile) {
      this._currentNotepadFile.removeListener(NotepadFile.eventNames.fileNameChanged, this.onFileHameChangedHandler);
    }

    this._currentNotepadFile = file;
    if (this._currentNotepadFile) {
      this._currentNotepadFile.on(NotepadFile.eventNames.fileNameChanged, this.onFileHameChangedHandler);
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        min-height: env(titlebar-area-height, 33px);
        background-color: var(--header-background-color);
      }

      .root {
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        width: env(titlebar-area-width, 100%);
        height: 40px;
        app-region: drag;

        color: var(--text-color);
        display: flex;
        flex-direction: row;
        align-items: end;
        align-content: center;
        font-family: Segoe UI Variable Text, Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif;
      }

      .root img {
        margin-left: 14px;
        margin-bottom: 8px;
        height: 20px;
        width: 20px;
      }

      .root label {
        font-size: 12px;
        margin-left: 16px;
      }

      .new-tab-button {
        background-color: transparent;
        border: none;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        app-region: no-drag;
        font-weight: 100;
        color: #4f4f4f;
        padding: 2px 8px;
        align-self: end;
        margin: 3px 12px;
      }

      .new-tab-button:hover {
        background-color: #e8eaf0;
      }

      .tabGroup {
        app-region: no-drag;
        margin-left: 16px;
        align-self: end;
        --track-color: transparent;
      }

      .tabGroup::part(active-tab-indicator) {
        display: none;
      }

      .tabGroup::part(tabs) {
        border: none
      }

      .file-name {
        width: 160px;
        overflow: hidden;
        font-size: 12px;
      }

      .dirty-flag {
        font-size: 26px;
      }

      sl-icon {
        color: var(--text-color);
      }

      sl-tab {
        height: 30px;
        border-radius: 8px 8px 0 0;
        font-size: 8px;
      }

      sl-tab::part(base) {
        padding: 6px;
      }

      sl-tab[active] {
        background: var(--menu-background-color);
        border: solid 1.5px var(--status-bar-border-color);
        border-width: 1px 1px 0 1px;
        --sl-color-primary-600: #4f4f4f;
      }
    `;
  }

  constructor() {
    super();
    this.tabs = Notepad.tabs;
    this.currentNotepadFile = Notepad.current;
    Notepad.on(Notepad.eventNames.tabsChanged, this.onTabCountChangedHandler);
    Notepad.on(Notepad.eventNames.currentTabIndexChanged, this.onCurrentTabChangedHandler);
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  disconnectedCallback(): void {
    Notepad.removeListener(Notepad.eventNames.tabsChanged, this.onTabCountChangedHandler);
    Notepad.removeListener(Notepad.eventNames.currentTabIndexChanged, this.onCurrentTabChangedHandler);
  }

  backToEditor(){
    const event = new CustomEvent('showEditor', {
      bubbles: true, // if you want the event to bubble up through the DOM
    });
    this.dispatchEvent(event);
  }

  private onTabCountChangedHandler = this.handleTabCountChanged.bind(this);
  private handleTabCountChanged() {
    console.log('number of tabs changed', Notepad.tabs)
    this.tabs = [...Notepad.tabs];
  }

  private onCurrentTabChangedHandler = this.handleCurrentTabChanged.bind(this);
  private handleCurrentTabChanged() {
    console.log('Current tab changed', Notepad.currentTabIndex)
    this.selectedTabIndex = Notepad.currentTabIndex;
    this.currentNotepadFile = Notepad.current;
  }

  private onFileHameChangedHandler = this.handleFileNameChanged.bind(this);
  private handleFileNameChanged() {
    console.log('File name changed', Notepad.current.fileName)
    this.requestUpdate();
  }

  private handleDragStart(e: DragEvent) {
    // console.log('handleDragStart');
    // this.shouldTearTab = true;
  }

  private handleDragEnd(e: DragEvent) {
    // console.log('handleDragEnd');

    // todo: use windows.screen to get current position and to open new window closer to existing window
    // https://web.dev/learn/pwa/windows/

    // if (this.shouldTearTab) {
    //   window.open('/', undefined, `width=${window.innerWidth},height=${window.innerHeight}}`);
    // }

    // this.shouldTearTab = false;
  }

  private handleDrop(e: DragEvent) {
    // this.shouldTearTab = false;
    // this.createTab();
    // console.log('handleDrop');
    // e.stopPropagation();
    return false;
  }

  private handleDragOver(e: DragEvent) {
    // console.log(e);
    // e.preventDefault();
  }

  private handleTabCloseClicked(e: Event) {

    const tab = e.target as Tab;
    const index = Array.from(tab.parentElement?.children || []).indexOf(tab);
    Notepad.removeTab(index);
  }

  private handleNewTabClicked() {
    Notepad.addNewTab();
  }

  // private createTab() {
  //   const tab = document.createElement('sl-tab') as Tab;
  //   tab.draggable = true;
  //   tab.closable = true;
  //   tab.slot = 'nav';
  //   tab.addEventListener('dragstart', (e: DragEvent) => this.handleDragStart(e));
  //   tab.addEventListener('dragend', (e: DragEvent) => this.handleDragEnd(e));
  //   tab.innerText = 'Untitled';

  //   this.tabGroup?.appendChild(tab);
  // }

  render() {

    const styleInfo = {
      'background-color': this.settingsShowing ? 'transparent' : 'var(--header-background-color)',
    };

    return html`
      <!-- <div class="root" style=${styleMap(styleInfo)}>
        ${this.settingsShowing ?
          html`
            <button id="back-button" type="button" @click=${() => this.backToEditor()}><sl-icon name="arrow-left"></sl-icon></button>
          `
          :
          null
        }
        <img src="/assets/icons/Square44x44Logo.scale-100.png" alt="Notepad logo" />
        ${this.settingsShowing ?
          html`
          <label>
            Notepad
          </label>
          `
          :
          html`
          <label>
            ${this.title} - Notepad
          </label>
          `
        } -->


      <div class="root" @drop=${(e: DragEvent) => this.handleDrop(e)} @dragover=${(e: DragEvent) => this.handleDragOver(e)}>
        <img src="/assets/icons/Square44x44Logo.scale-100.png" alt="Notepad logo" />
        <sl-tab-group class="tabGroup" @sl-close=${(e: Event) => this.handleTabCloseClicked(e)}>
          ${this.tabs.map((tab, index) => {
            // console.log(tab, index)
            return html`
            <sl-tab
              slot="nav"
              ?active=${index === this.selectedTabIndex}
              panel=${tab.id}
              @dragstart=${(e: DragEvent) => this.handleDragStart(e)}
              @dragend=${(e: DragEvent) => this.handleDragEnd(e)}
              @click=${(e: Event) => {Notepad.changeTabById(tab.id)}}
              draggable="true"
              closable
              ><span class="file-name">${tab.fileName}</span>${tab.isDirty ? html`<sl-icon class="dirty-flag" name="dot"></sl-icon>` : html``}</sl-tab>

          `})}
        </sl-tab-group>
        <button class="new-tab-button" @click=${(_: any) => this.handleNewTabClicked()}>+</button>
      </div>
    `;
  }
}
