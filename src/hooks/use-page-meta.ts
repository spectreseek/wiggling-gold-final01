import { useEffect } from "react";

const setContent = (selector: string, value: string) => {
  const el = document.querySelector(selector);
  if (!el) return () => {};
  const previous = el.getAttribute("content");
  el.setAttribute("content", value);
  return () => {
    if (previous !== null) el.setAttribute("content", previous);
  };
};

/**
 * Gives each route its own browser title (and optionally description) instead of
 * every page inheriting the home page's. Restores the previous values on unmount.
 */
export const usePageMeta = (title: string, description?: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const restore = [setContent('meta[property="og:title"]', title)];
    if (description) {
      restore.push(
        setContent('meta[name="description"]', description),
        setContent('meta[property="og:description"]', description),
      );
    }

    return () => {
      document.title = previousTitle;
      restore.forEach((undo) => undo());
    };
  }, [title, description]);
};
