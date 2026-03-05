import { useEffect } from "react";

interface PageSEOProps {
    title: string;
    description: string;
}

/**
 * Sets document.title and meta description for SPA per-page SEO.
 * Call this hook at the top of each page component.
 */
export function usePageSEO({ title, description }: PageSEOProps) {
    useEffect(() => {
        // Set document title
        document.title = title;

        // Set meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        }

        // Set OG title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute("content", title);
        }

        // Set OG description
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute("content", description);
        }

        return () => {
            // Reset to default on unmount
            document.title = "Ringo's Taxis | Ringwood, Bournemouth & South UK Taxi Service";
        };
    }, [title, description]);
}
