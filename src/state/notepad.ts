import { EventDispatcher, EventHandler } from "../utils/EventDispatcher";
import { NotepadFile } from "./notepadFile";

export abstract class Notepad {

    static eventNames = {
        tabsChanged: 'notepad-tab-count-changed',
        currentTabIndexChanged: 'notepad-current-tab-changed',
    }

    private static _tabs : NotepadFile[] = [];
    private static _currentTabIndex: number;

    static get tabs() {
        if (!this._tabs || this._tabs.length === 0) {
            this._tabs = [new NotepadFile()];
        }

        return this._tabs;
    }

    static get current() {
        if (Notepad._tabs.length === 0) {
            Notepad._tabs.push(new NotepadFile());
            Notepad._currentTabIndex = 0;
        }

        if (Notepad._currentTabIndex < 0 || Notepad._currentTabIndex >= Notepad._tabs.length) {
            Notepad._currentTabIndex = 0;
        }

        return Notepad._tabs[Notepad._currentTabIndex];
    }

    static addNewTab(notepad: NotepadFile | undefined = undefined) {
        this._tabs.push(notepad ?? new NotepadFile());
        Notepad._eventDispatcher.fire(this.eventNames.tabsChanged);
        this.currentTabIndex = this._tabs.length - 1;
    }

    static removeTab(index: number) {
        if (index < 0 || index >= Notepad._tabs.length) {
            return;
        }

        let tab = Notepad._tabs[index];
        if (tab.isDirty) {
            return;
        }

        if (Notepad._tabs.length === 1) {
            Notepad._tabs[0] = new NotepadFile();
            Notepad.currentTabIndex = 0;
        } else if (Notepad._currentTabIndex === index) {
            Notepad._tabs.splice(index, 1);
            Notepad.currentTabIndex = index;
        } else {
            Notepad._tabs.splice(index, 1);
        }

        Notepad._eventDispatcher.fire(this.eventNames.tabsChanged);
    }

    static changeTabById(id: string) {
        const index = this._tabs.findIndex(t => t.id === id);
        if (index >= 0) {
            this.currentTabIndex = index;
        }
    }

    static set currentTabIndex(index: number) {
        if (index < 0 || index >= Notepad._tabs.length) {
            return;
        }

        Notepad._currentTabIndex = index;
        Notepad._eventDispatcher.fire(this.eventNames.currentTabIndexChanged);
    }
    static get currentTabIndex() {
        return Notepad._currentTabIndex;
    }

    static async openFile() {

        try {
            const pickerOpts = {
                types: [
                    {
                    description: "Text files",
                    accept: {
                        "text/*": [".txt"],
                    },
                    },
                ],
                multiple: true,
            };
            const files = await window.showOpenFilePicker(pickerOpts);

            if (!files.length) {
                return false;
            }

            for (const fileHandle of files) {
                await this.openFileHandle(fileHandle);
            }
        } catch (_) {
        }

        return false;
    }

    static async openFileHandle(fileHandle: FileSystemFileHandle) {
        try {
            const notepad = new NotepadFile();
            await notepad.setFileHandle(fileHandle);
            this.addNewTab(notepad);
        } catch (_) {

        }
    }

    private static _eventDispatcher = new EventDispatcher<void | string>();

    static on(eventName: string, handler: EventHandler<void | string>) {
        this._eventDispatcher.add(eventName, handler);
    }

    static removeListener(eventName: string, handler: EventHandler<void | string>) {
        this._eventDispatcher.remove(eventName, handler);
    }
}