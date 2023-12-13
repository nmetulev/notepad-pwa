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

    const styles = ["regular", "bold", "italic", "bold_italic"];
    return defaultFonts.reduce((acc: any, font: any) => {
        acc[font] = styles;
        return acc;
    }, {});
}

function transformFontFormat(fonts: Record<string, string[]>): Record<string, { full_name: string; styles: string[] }> {
    console.log(fonts)
    return Object.keys(fonts).reduce((acc, fontName) => {
        const key = fontName.toLowerCase().split(' ').join('_');

        let styles = fonts[fontName].map((style: string) => style.toLowerCase().split(' ').join('_'));
        styles = styles.filter((style: string) => supportedStyles.includes(style));

        if(styles.length === 0){
            styles = ["regular", "bold", "italic", "bold_italic"];
        }

        acc[key] = {
            full_name: fontName,
            styles: styles
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
    "black",
    "light",
    "light_italic",
    "medium",
    "demi",
    "demibold",
    "demibold_italic",
    "semibold",
    "semibold_italic",
    "semilight",
    "semilight_italic",
    "oblique",
    "bold_oblique",
    "semibold_condensed",
    "bold_condensed",
    "light_condensed",
    "condensed_bold",
    "condensed_bold_italic",
    "condensed_italic",
    "condensed"
]