import { EventDispatcher, EventHandler } from "./utils/EventDispatcher";

type cursorInformation = {
    start: number;
    end: number;
    line: number;
}

export class Notepad {
    private static _instance: Notepad;

    constructor(){
        this._cursorPosition = { start: 1, end: 1, line: 1 };
        this._encoding = "UTF-8";
        this._fileEnding = "Windows (CRLF)";
        this._substringToFind = "";
        this._findListIndex = 0;
    }

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
        localStorage.setItem('lastSession', encodeURIComponent(this._editorContents));
        this._eventDispatcher.fire(notepadEventNames.editorChanged);
    }

    private _cursorPosition!: cursorInformation;
    public get cursorPosition(): cursorInformation {
        return this._cursorPosition;
    }

    public set cursorPosition(v: cursorInformation){
        this._cursorPosition = v;
        this._eventDispatcher.fire(notepadEventNames.cursorPositionChanged)
    }

    private _selection!: Selection;
    public get selection(): Selection {
        return this._selection;
    }

    public set selection(v: Selection){
        this._selection = v;
        //this._eventDispatcher.fire(notepadEventNames.cursorPositionChanged)
    }

    private _editorDiv!: HTMLDivElement;
    public get editorDiv(): HTMLDivElement {
        return this._editorDiv;
    }

    public set editorDiv(v: HTMLDivElement){
        this._editorDiv = v;
        //this._eventDispatcher.fire(notepadEventNames.fileEndingChanged);
    }

    private _encoding!: string;
    public get encoding(): string {
        return this._encoding;
    }

    public set encoding(v: string){
        this._encoding = v;
        this._eventDispatcher.fire(notepadEventNames.encodingChanged)
    }

    private getEncoding(file: File){
        const reader = new FileReader();
        const bom = [0xEF, 0xBB, 0xBF];
        const blob = file.slice(0, bom.length); // Read only the first few bytes

        reader.onloadend = (e) => {
            const arr = new Uint8Array(e.target!.result as ArrayBuffer);
            let hasBOM = true;
            for (let i = 0; i < bom.length; i++) {
                if (arr[i] !== bom[i]) {
                    hasBOM = false;
                    break;
                }
            }

            if (hasBOM) {
                Notepad._instance.encoding = "UTF-8 with BOM";
            }
        };

        reader.onerror = () => {
            console.log("Error reading the file");
        };

        reader.readAsArrayBuffer(blob);

    }

    private _fileEnding!: string;
    public get fileEnding(): string {
        return this._fileEnding;
    }

    public set fileEnding(v: string){
        this._fileEnding = v;
        this._eventDispatcher.fire(notepadEventNames.fileEndingChanged);
    }

    private getCarraigeReturn(file: File){
        const reader = new FileReader();

        reader.onload = () => {
            const buffer = reader.result;

            if (buffer) {
                const text = new TextDecoder("utf-8").decode(buffer as ArrayBuffer);
                const containsCRLF = text.includes('\r\n');
                const containsLF = text.includes('\n');
                const containsCR = text.includes('\r') && !text.includes('\n');

                if (containsCRLF) {
                    Notepad._instance.fileEnding = 'Windows (CRLF)';
                } else if (containsLF) {
                    Notepad._instance.fileEnding = 'Unix (LF)';
                } else if (containsCR) {
                    Notepad._instance.fileEnding = 'Macintosh (CR)';
                }
            } else {
                console.error("Buffer is null");
            }
        };

        reader.onerror = () => {
            console.error("Error reading file:", reader.error);
        };

        reader.readAsArrayBuffer(file);
    }

    public async setFileHandle(handle: FileSystemFileHandle) {
        try {
            const file = await handle.getFile();
            this.getCarraigeReturn(file);
            this.getEncoding(file);
            this.fileName = handle.name;
            this.fileContents = await file.text();
            console.log(this.fileContents)
            this.fileHandle = handle;
            return true;
        } catch (_) {
            this.fileHandle = undefined;
            this.fileContents = undefined;
            this.fileName = undefined;
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

    public async cut(){
        const selection = this._selection
        const selectedText = selection.toString();
        navigator.clipboard.writeText(selectedText).then(() => {
            document.execCommand('cut');
        }).catch(err => {
            console.error('Failed to cut text: ', err);
        });
        this._eventDispatcher.fire(notepadEventNames.insertedText)
      }

    public async copy(){
        const selection = this._selection
        const selectedText = selection.toString();

        navigator.clipboard.writeText(selectedText).then(() => {
            }).catch(err => {
                console.error('Failed to copy text: ', err);
        });
    }

    public async paste(){
        const selection = this._selection

        navigator.clipboard.readText().then(text => {
            if (text) {
                if (!selection!.rangeCount) return false;
                selection!.deleteFromDocument();
                selection!.getRangeAt(0).insertNode(document.createTextNode(text));

                // Move the cursor to the end of the inserted text
                selection!.collapseToEnd();
            }
            this._eventDispatcher.fire(notepadEventNames.insertedText)
            return;
        })

    }

    public async delete(){
        const selection = this._selection

        // Delete the contents of the selection
        selection.deleteFromDocument();

        // Clear the selection
        selection.removeAllRanges();

        this._eventDispatcher.fire(notepadEventNames.insertedText)

    }

    public selectAll(){
        var range = document.createRange();
        range.selectNodeContents(this._editorDiv);
        var selection = this._selection;
        selection.removeAllRanges();
        selection.addRange(range);
    }

    public async insertTimeDate(){

        const selection: Selection = this._selection;

        const currentDateTime = this.getCurrentDateTimeFormatted();
        // Get the first range of the selection
        const range = selection.getRangeAt(0);

        // Create a new text node
        const textNode = document.createTextNode(currentDateTime);

        range.deleteContents(); // Delete any selected text
        range.insertNode(textNode); // Insert the new text

        // Move the cursor to the end of the inserted text
        range.setStartAfter(textNode);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);

        this._eventDispatcher.fire(notepadEventNames.insertedText)

    }

    private getCurrentDateTimeFormatted() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
        const day = now.getDate().toString().padStart(2, '0');
        const year = now.getFullYear();

        return `${hours}:${minutes} ${month}/${day}/${year}`;
    }

    private _substringToFind!: string;
    public get substringToFind(): string {
        return this._substringToFind;
    }

    private findPostions: { startIndex: number; endIndex: number; }[] = [];
    public set substringToFind(v: string){
        this._substringToFind = v;
        this.findPostions = this.find();
        if(this.findPostions.length > 0){
            this.highlightText()
        }
    }


    private find(){
        let startIndex = 0;
        let positions = [];
        const substring = this._substringToFind;
        const str = this._editorContents;

        while (startIndex < str.length) {
            // Find the start position of the substring, searching from the current startIndex
            let index = str.indexOf(substring, startIndex);

            // If the substring is not found, break out of the loop
            if (index === -1) break;

            // Calculate the end position
            let endIndex = index + substring.length;

            // Add the start and end positions to the positions array
            positions.push({startIndex: index, endIndex});

            // Set the next start index to be one after the current start index
            startIndex = index + 1;
        }

       return positions;

    }

    // bug where it can't find stuff past the first line
    private highlightText() {
        // Get the element
        const element = this._editorDiv;
        const startIndex = this.findPostions[this._findListIndex].startIndex
        const endIndex = this.findPostions[this._findListIndex].endIndex

        console.log(startIndex, endIndex)

        if (element) {
            // Create a range
            const range = document.createRange();
            const selection = this._selection;

            // Set start and end positions
            range.setStart(element.childNodes[0], startIndex);
            range.setEnd(element.childNodes[0], endIndex);

            // Remove any existing selections
            selection.removeAllRanges();

            // Add the new range to the selection
            selection.addRange(range);
        }
    }

    private _findListIndex!: number;
    public get findListIndex(): number {
        return this._findListIndex;
    }

    public set findListIndex(v: number){
        if(v < 0) v = 0;
        if(v > this.findPostions.length) v = this.findPostions.length - 1;
        this._findListIndex = v;
        if(this.findPostions.length > 0){
            this.highlightText()
        }
    }


}

export const notepadEventNames = {
    fileChanged: 'notepad-file-changed',
    editorChanged: 'notepad-editor-contents-changed',
    decideOnChanges: 'notepad-need-to-decide-on-changes',
    cursorPositionChanged: 'cursor-position-changed',
    encodingChanged: 'encoding-changed',
    fileEndingChanged: 'file-ending-changed',
    insertedText: 'insert-text-to-editor',
    findSubstringChanged: 'find-substring-changed',
    showFindInput: 'show-find-input'
}