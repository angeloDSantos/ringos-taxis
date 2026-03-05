import { useState } from "react";

/**
 * Hook to determine the page style variant.
 * Reads from URL param ?style=fold or ?style=standard
 * Default is "standard".
 */
export type PageStyle = "fold" | "standard";

export function usePageStyle(): {
    pageStyle: PageStyle;
    setPageStyle: (style: PageStyle) => void;
    isFoldStyle: boolean;
} {
    const params = new URLSearchParams(window.location.search);
    const initialStyle = (params.get("style") as PageStyle) || "standard";

    const [pageStyle, setPageStyle] = useState<PageStyle>(initialStyle);

    return {
        pageStyle,
        setPageStyle,
        isFoldStyle: pageStyle === "fold",
    };
}
