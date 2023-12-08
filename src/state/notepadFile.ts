import { EventProducer } from "../utils/EventDispatcher";

export class NotepadFile extends EventProducer<void | string> {
    static eventNames = {
        fileChanged: 'notepad-file-changed',
        editorChanged: 'notepad-editor-contents-changed',
        decideOnChanges: 'notepad-need-to-decide-on-changes',
        fileNameChanged: 'notepad-file-name-changed',
    }

    private _fileHandle: FileSystemFileHandle | undefined;
    private get fileHandle() { return this._fileHandle; }
    private set fileHandle(v: FileSystemFileHandle | undefined) {
        if (this._fileHandle !== v) {
            this._fileHandle = v;
            this.updateFileName();
        }
    }

    // generate new random guid
    private _id: string = crypto.randomUUID();
    public get id() { return this._id; }

    private _fileName: string = 'Untitled';
    public get fileName() {
        return this._fileName;
    }

    private updateFileName() {
        let oldValue = this._fileName;

        if (this.fileHandle)
            this._fileName = this.fileHandle?.name;
        else if (!this.editorContents || this.editorContents.length === 0)
            this._fileName = 'Untitled';
        else
            this._fileName = this.editorContents.split('\n')[0].substring(0,30);

        if (oldValue !== this._fileName)
            this.fire(NotepadFile.eventNames.fileNameChanged);
    }

    public get isDirty() {
        return (this.fileContents || '') !== this.editorContents };

    private _fileContents : string | undefined;
    public get fileContents() : string | undefined {
        return this._fileContents;
    }
    public set fileContents(v : string | undefined) {
        this._fileContents = v;
        this.fire(NotepadFile.eventNames.fileChanged);
    }

    private _editorContents : string = '';
    public get editorContents() : string {
        return this._editorContents;
    }
    public set editorContents(v : string) {
        this._editorContents = v;
        if (!this.fileHandle) {
            this.updateFileName();
        }
        this.fire(NotepadFile.eventNames.editorChanged);
    }

    public async setFileHandle(handle: FileSystemFileHandle) {
        try {
            const file = await handle.getFile();
            this.fileContents = await file.text();
            this.editorContents = this.fileContents;
            this.fileHandle = handle;
            return true;
        } catch (_) {
            this.fileHandle = undefined;
            this.editorContents = '';
            this.fileContents = undefined;
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
}