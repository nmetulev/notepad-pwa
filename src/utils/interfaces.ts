export interface Settings {
    theme: string;
    font: Font;
    wrap: boolean;
    open_behavior: boolean; // new tab = true, window = false
    start_behavior: boolean; // previous session = true, new window = false
}

export interface Font {
    family: string;
    style: string; //"regular" | "italic" | "bold" | "bold+italic"
    size: number;
}