import type { ReactNode } from "react";
import { usePageMeta } from "@/hooks/use-page-meta";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import BackToTop from "./BackToTop";

type PageShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

/** Every page's frame: skip link, nav, main content and footer, on the redesign's ground and fonts. */
const PageShell = ({ title, description, children }: PageShellProps) => {
  usePageMeta(title, description);
  return (
    <div className="min-h-screen bg-wg-ground font-body text-wg-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-wg-ink focus:px-5 focus:py-3 focus:text-wg-paper"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
};

export default PageShell;
