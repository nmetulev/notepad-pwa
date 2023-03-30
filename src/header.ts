import { LitElement, css, html, PropertyValueMap } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { Notepad, notepadEventNames } from './state';

import TabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group';
import Tab from '@shoelace-style/shoelace/dist/components/tab/tab';

import '@shoelace-style/shoelace/dist/components/tab-group/tab-group';
import '@shoelace-style/shoelace/dist/components/tab/tab';


@customElement('app-header')
export class AppHeader extends LitElement {
  @property() title = 'Untitled';
  @property() edited = false;
  @query('.tabGroup') tabGroup!: TabGroup;
  private shouldTearTab = false;

  static get styles() {
    return css`
      :host {
        display: block;
        width: env(titlebar-area-width, 100%);
        height: env(titlebar-area-height, 33px);
        min-height: env(titlebar-area-height, 33px);
      }

     .root {
        position: fixed;

        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        width: env(titlebar-area-width, 100%);
        height: env(titlebar-area-height, 33px);
        app-region: drag;

        background-color: #f0f4f9;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        font-family: Segoe UI Variable Text, Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif;
    }

    .root img {
      margin-left: 14px;
      height: 18px;
      width: 18px;
    }

    .root label {
      font-size: 12px;
      margin-left: 16px;

    }
    `;
  }

  constructor() {
    super();
    Notepad.on(notepadEventNames.fileChanged, this.onFileChangedHandler)
    Notepad.on(notepadEventNames.editorChanged, this.onFileChangedHandler)
  }

  disconnectedCallback(): void {
    Notepad.removeListener(notepadEventNames.fileChanged, this.onFileChangedHandler)
    Notepad.removeListener(notepadEventNames.editorChanged, this.onFileChangedHandler)
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.updateTitle();
  }

  private onFileChangedHandler = this.updateTitle.bind(this);
  private updateTitle() {
    // this.title = Notepad.instance.fileName || 'Untitled'
    // this.edited = Notepad.instance.isDirty;
    document.title = this.title;
  }

  private handleDragStart(e: DragEvent) {
    console.log('handleDragStart');
    this.shouldTearTab = true;
  }

  private handleDragEnd(e: DragEvent) {
    console.log('handleDragEnd');

    // todo: use windows.screen to get current position and to open new window closer to existing window
    // https://web.dev/learn/pwa/windows/

    if (this.shouldTearTab) {
      window.open('/', undefined, `width=${window.innerWidth},height=${window.innerHeight}}`);
    }

    this.shouldTearTab = false;
  }

  private handleDrop(e: DragEvent) {
    this.shouldTearTab = false;
    this.createTab();
    console.log('handleDrop');
    e.stopPropagation();
    return false;
  }

  private handleDragOver(e: DragEvent) {
    // console.log(e);
    e.preventDefault();
  }

  private handleTabCloseClicked(e: Event) {
    const tab = e.target as Tab;
    if (tab.active) {
      (tab.previousElementSibling as Tab).active = true;
    }
    tab.remove();
  }

  private createTab() {
    const tab = document.createElement('sl-tab') as Tab;
    tab.draggable = true;
    tab.closable = true;
    tab.slot = 'nav';
    tab.addEventListener('dragstart', (e: DragEvent) => this.handleDragStart(e));
    tab.addEventListener('dragend', (e: DragEvent) => this.handleDragEnd(e));
    tab.innerText = 'Untitled';

    this.tabGroup?.appendChild(tab);
  }

  render() {
    return html`
      <div class="root" @drop=${(e: DragEvent) => this.handleDrop(e)} @dragover=${(e: DragEvent) => this.handleDragOver(e)}>
        <img src="/assets/icons/Square44x44Logo.scale-100.png" alt="Notepad logo" />
        <sl-tab-group class="tabGroup" @sl-close=${(e: Event) => this.handleTabCloseClicked(e)}>
          <sl-tab slot="nav" draggable="true" @dragstart=${(e: DragEvent) => this.handleDragStart(e)} @dragend=${(e: DragEvent) => this.handleDragEnd(e)} closable>${this.edited ? "*" : ""}${this.title}</sl-tab>
          <!-- <sl-tab slot="nav" draggable="true" closable>${this.edited ? "*" : ""}${this.title}</sl-tab> -->
        </sl-tab-group>
        <sl-button @click=${(_: any) => this.createTab()}>+</sl-button>

        <!-- <label>
          ${this.edited ? "*" : ""}${this.title} - Notepad
        </label> -->
      </div>
    `;
  }
}
