import { EventDispatcher, EventHandler } from "./utils/EventDispatcher";

export type Theme = "light" | "dark" | "system";

export type Font = {
    family: string, style: string, size: number
}

//export type fontStyle = "regular" | "bold" | "italic" | "bold+italic"

export class Settings {
    private static _instance: Settings;

    // defaults
    constructor(){
        if(!localStorage.getItem('notepadSettings')){
            this.theme = "system";
            this.font = {
             family: "times_new_roman", style: "regular", size: 11
            }
            this.wrap = true; // true = wrap, false = don't wrap
            this.open_behavior = true; // true = new tab, false = new window
            this.start_behavior = true; // true = open from previous session, false = new note
            this.zoom = 100;
            this.displayFontSize = 11
        }
    }

    static get instance() {
        if (!this._instance) {
            let settingsData = localStorage.getItem('notepadSettings');
            if(settingsData){
                let tempSettings = JSON.parse(settingsData);
                this._instance = new Settings();
                Object.assign(this._instance, tempSettings);

                this._instance._eventDispatcher = new EventDispatcher<void | string>();
            } else {
                this._instance = new Settings()
            }
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

    private writeSettings(){
        localStorage.setItem('notepadSettings', JSON.stringify(this));
    }

    private _theme!: Theme;
    public get theme(): string {
        return this._theme;
    }
    public set theme(v: Theme) {
        if(this._theme !== v){
            this._theme = v;
            this.writeSettings();
            this._eventDispatcher.fire(settingsEventNames.themeChanged);
        }
    }

    private _font!: Font;
    public get font(): Font {
        return this._font;
    }
    public set font(v: Font) {
        this._font = v;
        this.writeSettings();
        this._eventDispatcher.fire(settingsEventNames.settingsChanged);
    }

    private _wrap!: boolean;
    public get wrap(): boolean {
        return this._wrap;
    }
    public set wrap(v: boolean) {
        this._wrap = v;
        this.writeSettings();
        this._eventDispatcher.fire(settingsEventNames.settingsChanged);
    }

    private _open_behavior!: boolean;
    public get open_behavior(): boolean {
        return this._open_behavior;
    }
    public set open_behavior(v: boolean) {
        this._open_behavior = v;
        this.writeSettings();
        this._eventDispatcher.fire(settingsEventNames.settingsChanged);
    }

    private _start_behavior!: boolean;
    public get start_behavior(): boolean {
        return this._start_behavior;
    }
    public set start_behavior(v: boolean) {
        this._start_behavior = v;
        this.writeSettings();
        this._eventDispatcher.fire(settingsEventNames.settingsChanged);
    }

    private _zoom!: number;
    public get zoom(): number {
        return this._zoom;
    }
    public set zoom(v: number) {
        this._zoom = Math.max(10, Math.min(v, 500));
        Settings.instance.displayFontSize = (this._zoom / 100) * this._font.size;
    }

    private _displayFontSize!: number;
    public get displayFontSize(): number {
        return this._displayFontSize;
    }
    private set displayFontSize(v: number) {
        this._displayFontSize = v;
        this._eventDispatcher.fire(settingsEventNames.settingsChanged);
    }
}

export const settingsEventNames = {
    themeChanged: 'settings-theme-changed',
    settingsChanged: 'settings-changed',
    zoomChanged: 'zoom-changed'
}