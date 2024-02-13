import { SlDialog } from "@shoelace-style/shoelace";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export class MessageDialogService {

    private static _dialog: SlDialog | undefined;

    static set dialog(dialog: SlDialog | undefined) {
        this._dialog = dialog;
    }

    static show(message: string, title: string = "Message") {
        console.log(message, title, this._dialog)
        document.querySelector('body')?.appendChild(document.createElement('div'));
    }
}

@customElement('notepad-message-dialog')
export class AppMenu extends LitElement {

    @property() title!: string;

    static get styles() {
        return css`
        `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <div class="root">
            <sl-dialog label="Notepad" class="dialog">
            ${this.title}
            </sl-dialog>
        </div>
        `;
    }
}