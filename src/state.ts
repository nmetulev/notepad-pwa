import { EventDispatcher, EventHandler } from "./utils/EventDispatcher";

export class Notepad {
    private static _instance: Notepad;

    static get instance() {
        if (!this._instance) {
            this._instance = new Notepad();
        }

        return this._instance;
    }

    private _eventDispatcher = new EventDispatcher<void | string>();

    public on(eventName: string, handler: EventHandler<void | string>) {
        this._eventDispatcher.add(eventName, handler);
    }

    public removeListener(eventName: string, handler: EventHandler<void | string>) {
        this._eventDispatcher.remove(eventName, handler);
    }


    private fileHandle: FileSystemFileHandle | undefined;
    public fileName: string | undefined;
    public get isDirty() { return (this.fileContents || '') !== this.editorContents };


    private _fileContents : string | undefined;
    public get fileContents() : string | undefined {
        return this._fileContents;
    }
    public set fileContents(v : string | undefined) {
        this._fileContents = v;
        this._eventDispatcher.fire(notepadEventNames.fileChanged);
    }

    private _editorContents! : string;
    public get editorContents() : string {
        return this._editorContents;
    }
    public set editorContents(v : string) {
        this._editorContents = v;
        this._eventDispatcher.fire(notepadEventNames.editorChanged);
    }

    public async setFileHandle(handle: FileSystemFileHandle) {
        try {
            const file = await handle.getFile();
            this.fileName = handle.name;
            this.fileContents = await file.text();
            this.fileHandle = handle;
            return true;
        } catch (_) {
            this.fileHandle = undefined;
            this.fileName = undefined;
            this.fileContents = undefined;
        }
        return false;
    }

    public newFile(ignoreDirty = false) {
        if (!ignoreDirty && this.isDirty) {
            // should we save first?
            this.handleAboutToLoseChanges('new');
            return;
        }

        this.fileHandle = undefined;
        this.fileName = undefined;
        this.fileContents = undefined;
    }

    public async openFile(ignoreDirty = false) {

        if (!ignoreDirty && this.isDirty) {
            // should we save first?
            this.handleAboutToLoseChanges('open');
            return false;
        }
        try {

            const files = await window.showOpenFilePicker();
            const fileHandle = files.length ? files[0] : null;

            if (!fileHandle) {
                return false;
            }

            return this.setFileHandle(fileHandle);
        } catch (_) {
        }

        return false;
    }

    public async saveFile() {
        if (!this.fileHandle) {
            return this.saveAsFile();
        }

        try {

            const writable = await this.fileHandle.createWritable();
            await writable.write(this.editorContents || '');
            await writable.close();
            this.fileContents = this.editorContents;
            return true;
        } catch (_) {
        }
        return false;
    }

    public async saveAsFile() {
        const options = {
            types: [
                {
                description: 'Text Files',
                accept: {
                    'text/plain': ['.txt'],
                },
                },
            ],
        };
        try {
            const handle = await window.showSaveFilePicker(options);
            if (handle) {
                this.fileHandle = handle;
                this.fileName = handle.name;
                const writable = await this.fileHandle.createWritable();
                await writable.write(this.editorContents || '');
                await writable.close();
                this.fileContents = this.editorContents;
                return true;
            }
        } catch (_) {
            // NOP
        }
        return false;
    }

    private handleAboutToLoseChanges(continueWith: 'open' | 'new') {
        this._eventDispatcher.fire(notepadEventNames.decideOnChanges, continueWith);
    }
}

export const notepadEventNames = {
    fileChanged: 'notepad-file-changed',
    editorChanged: 'notepad-editor-contents-changed',
    decideOnChanges: 'notepad-need-to-decide-on-changes'
}