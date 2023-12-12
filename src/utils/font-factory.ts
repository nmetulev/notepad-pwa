export interface FontGroup {
    fontFamily: string[];
}

export async function getFonts() {
    if ("queryLocalFonts" in window) {
        try {
            //@ts-ignore
            const fonts = await window.queryLocalFonts();
            return transformFontFormat(groupFontsByFamily(fonts));
        } catch (error) {
            console.error("Error accessing local fonts:", error);
            return transformFontFormat(getDefaultFonts());
        }
    } else {
        return transformFontFormat(getDefaultFonts());
    }
}

function groupFontsByFamily(fonts: any) {
    return fonts.reduce((acc: any, font: any) => {
        const { family, style } = font;
        if (!acc[family]) {
            acc[family] = [];
        }
        if (!acc[family].includes(style)) {
            acc[family].push(style);
        }
        return acc;
    }, {});
}

function getDefaultFonts() {
    const defaultFonts = [
        "Arial",
        "Calibri",
        "Consolas",
        "Georgia",
        "Impact",
        "Magneto",
        "Segoe UI",
        "Tahoma",
        "Times New Roman",
        "Verdana"
    ];

    const styles = ["regular", "bold", "italic", "bold italic"];
    return defaultFonts.reduce((acc: any, font: any) => {
        acc[font] = styles;
        return acc;
    }, {});
}

function transformFontFormat(fonts: Record<string, string[]>): Record<string, { full_name: string; styles: string[] }> {
    return Object.keys(fonts).reduce((acc, fontName) => {
        const key = fontName.toLowerCase().split(' ').join('_');
        const styles = fonts[fontName].map((style: string) => style.toLowerCase().split(' ').join('_'));
        acc[key] = {
            full_name: fontName,
            styles: styles.filter((style: string) => supportedStyles.includes(style))
        };
        return acc;
    }, {} as Record<string, { full_name: string; styles: string[] }>);
}

const supportedStyles: string[] = [
    "regular",
    "bold",
    "italic",
    "bold_italic",
    "narrow",
    "narrow_italic",
    "narrow_bold_italic",
    "black"
]