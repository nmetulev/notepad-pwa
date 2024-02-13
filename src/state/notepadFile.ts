import { EventProducer } from "../utils/EventDispatcher";
import { Settings } from "./notepadSettings";

type cursorInformation = {
    start: number;
    end: number;
    line: number;
}

export class NotepadFile extends EventProducer<void | string> {
    static eventNames = {
        fileChanged: 'notepad-file-changed',
        editorChanged: 'notepad-editor-contents-changed',
        decideOnChanges: 'notepad-need-to-decide-on-changes',
        fileNameChanged: 'notepad-file-name-changed',
        cursorPositionChanged: 'cursor-position-changed',
        encodingChanged: 'encoding-changed',
        fileEndingChanged: 'file-ending-changed',
        insertedText: 'insert-text-to-editor',
        findSubstringChanged: 'find-substring-changed',
        showFindInput: 'show-find-input'
    }

    constructor(){
        super();
        this._cursorPosition = { start: 1, end: 1, line: 1 };
        this._encoding = "UTF-8";
        this._fileEnding = "Windows (CRLF)";
        this._substringToFind = "";
        this._findListIndex = 0;
        this._findPositions = [];
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
        localStorage.setItem(`lastSession-${this._id}`, encodeURIComponent(this._editorContents));
        this.fire(NotepadFile.eventNames.editorChanged);
    }

    private _cursorPosition!: cursorInformation;
    public get cursorPosition(): cursorInformation {
        return this._cursorPosition;
    }

    public set cursorPosition(v: cursorInformation){
        this._cursorPosition = v;
        this._eventDispatcher.fire(NotepadFile.eventNames.cursorPositionChanged)
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
        this._eventDispatcher.fire(NotepadFile.eventNames.encodingChanged)
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
                this.encoding = "UTF-8 with BOM";
            } else {
                this.encoding = "UTF-8";
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
        this._eventDispatcher.fire(NotepadFile.eventNames.fileEndingChanged);
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
                    this.fileEnding = 'Windows (CRLF)';
                } else if (containsLF) {
                    this.fileEnding = 'Unix (LF)';
                } else if (containsCR) {
                    this.fileEnding = 'Macintosh (CR)';
                } else {
                    this.fileEnding = 'Windows (CRLF)';
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

    public async cut(){
        const selection = this._selection
        const selectedText = selection.toString();
        navigator.clipboard.writeText(selectedText).then(() => {
            document.execCommand('cut');
        }).catch(err => {
            console.error('Failed to cut text: ', err);
        });
        this._eventDispatcher.fire(NotepadFile.eventNames.insertedText)
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
            this._eventDispatcher.fire(NotepadFile.eventNames.insertedText)
            return;
        })

    }

    public async delete(){
        const selection = this._selection

        // Delete the contents of the selection
        selection.deleteFromDocument();

        // Clear the selection
        selection.removeAllRanges();

        this._eventDispatcher.fire(NotepadFile.eventNames.insertedText)

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

        this._eventDispatcher.fire(NotepadFile.eventNames.insertedText)

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

    public set substringToFind(v: string){
        this._substringToFind = v;
        this.writeSettings('search-string', this._substringToFind);
        this._findListIndex = 0;
        this.findSubstringPositions();
    }

    private writeSettings(settingName: string, settingValue: any){
        localStorage.setItem(`${settingName}-state-setting`, JSON.stringify(settingValue));
    }

    private _findPositions: { startIndex: number; endIndex: number; }[];
    public get findPositions(): { startIndex: number; endIndex: number; }[] {
        return this._findPositions;
    }

    private set findPositions(v: { startIndex: number; endIndex: number; }[]){
        this._findPositions = v;
    }

    public findSubstringPositions(){
        let startIndex = 0;
        let positions = [];

        const substring = Settings.instance.matchCaseForSearchResult ? this._substringToFind : this._substringToFind.toLowerCase() ;
        const str = Settings.instance.matchCaseForSearchResult ? this._editorContents : this._editorContents.toLowerCase();

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

       this._findPositions = positions;

    }

    public search() {
        const element = this._editorDiv;
        if (!element) return;

        //console.log("after searching from changing case", this.findPositions)

        const { startIndex, endIndex } = this._findPositions[this._findListIndex];
        let cumulativeLength = 0;
        let startNode: any = null;
        let startNodeOffset = 0;
        let endNode: any = null;
        let endNodeOffset = 0;

        const iterateNodes = (node: any) => {
            node.childNodes.forEach((child: any) => {
                if (child.nodeType === Node.TEXT_NODE) {
                    const textLength = child.textContent.length;
                    if (!startNode && cumulativeLength + textLength >= startIndex) {
                        startNode = child;
                        startNodeOffset = startIndex - cumulativeLength;
                    }
                    if (!endNode && cumulativeLength + textLength >= endIndex) {
                        endNode = child;
                        endNodeOffset = endIndex - cumulativeLength;
                    }
                    cumulativeLength += textLength;
                } else if (child.nodeType === Node.ELEMENT_NODE) {
                    // Assuming that <br>, <div>, and <p> could introduce new lines
                    if (child.nodeName === "BR" || child.nodeName === "DIV" || child.nodeName === "P") {
                        cumulativeLength++; // Adjust this based on how you count line breaks
                    }
                    iterateNodes(child); // Recurse into child elements
                }
            });
        };

        iterateNodes(element);

        if (startNode && endNode) {
            const range = document.createRange();
            const selection = this._selection;
            try {
                range.setStart(startNode, startNodeOffset);
                range.setEnd(endNode, endNodeOffset);
                selection.removeAllRanges();
                selection.addRange(range);

                let tempEl = document.createElement("span"); // Create a temporary element

                // Insert the temporary element into the range
                range.insertNode(tempEl);

                // Scroll the temporary element into view
                tempEl.scrollIntoView({
                    behavior: "smooth", // Optional: Defines the transition animation
                    block: "center", // Optional: Vertical alignment
                    inline: "nearest" // Optional: Horizontal alignment
                });

                // Remove the temporary element from the document
                tempEl.parentNode!.removeChild(tempEl);

            } catch (error) {
                console.error('Error setting range:', error);
            }
        }
    }

    private _findListIndex!: number;
    public get findListIndex(): number {
        return this._findListIndex;
    }

    public set findListIndex(v: number){
        if(v < 0){
            if(Settings.instance.wrapSearchResults){
                v = this._findPositions.length - 1;
            } else {
                v = 0;
            }
        }
        if(v >= this._findPositions.length){
            if(Settings.instance.wrapSearchResults){
                v = 0;
            } else {
                v = this._findPositions.length - 1;
            }
        }
        this._findListIndex = v;

        //console.log("searching next", this.findPositions)

        if(this._findPositions.length > 0){
            this.search()
        }
    }

}