import { useLocation } from "react-router-dom";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import Marker from "@/components/site/Marker";
import { ButtonLink } from "@/components/site/Buttons";

const NotFound = () => {
  const { pathname } = useLocation();
  return (
    <PageShell title="Page not found | Wiggling Gold">
      <PageHero
        title={
          <>
            This page wandered <Marker>off.</Marker>
          </>
        }
        intro={
          <>
            We couldn't find <span className="font-semibold text-wg-ink">{pathname}</span>. It may have moved, or the link
            may have a typo.
          </>
        }
        actions={
          <>
            <ButtonLink href="/" arrow>
              Back to the homepage
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contact us
            </ButtonLink>
          </>
        }
      />
    </PageShell>
  );
};

export default NotFound;
