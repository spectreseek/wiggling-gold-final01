import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/wigo-logo.png";
import { ADDRESS, EMAIL, MAPS_URL, ORDER_WHATSAPP_URL, PHONES, SOCIAL_HANDLE } from "@/lib/contact";

const links = [
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/products", label: "Products" },
  { to: "/project-mansa", label: "Project Mansa" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

// The old LinkedIn and Facebook icons pointed at those sites' home pages. Until the profile links are
// confirmed, the footer shows the handle from the flyers as text.
const SiteFooter = () => (
  <footer className="border-t border-wg-line bg-wg-paper">
    <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 lg:px-10">
      <div className="md:col-span-5">
        <img src={logo} alt="WIGO, Wiggling Gold Limited" width={320} height={132} className="h-14 w-auto" />
        <p className="mt-5 font-display text-2xl font-bold text-wg-ink">Turning dirt into gold.</p>
        <p className="mt-2 max-w-[36ch] text-wg-muted">Black soldier fly feed and fertilizer, made from Ghana's organic waste.</p>
        <p className="mt-4 font-semibold text-wg-ink">{SOCIAL_HANDLE} <span className="font-normal text-wg-muted">on social media</span></p>
      </div>

      <nav aria-label="Footer" className="md:col-span-3">
        <ul className="grid gap-2.5">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-wg-ink/80 transition-colors hover:text-wg-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <address className="grid gap-2.5 not-italic text-wg-ink/80 md:col-span-4">
        <a href={`mailto:${EMAIL}`} className="hover:text-wg-ink">{EMAIL}</a>
        {PHONES.map((p) => (
          <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-wg-ink">{p}</a>
        ))}
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-wg-ink">
          {ADDRESS.street}, {ADDRESS.city}
        </a>
        <a
          href={ORDER_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 self-start font-semibold text-wg-ink"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp us
        </a>
      </address>
    </div>
    <div className="border-t border-wg-line">
      <p className="mx-auto max-w-[1400px] px-4 py-6 text-sm text-wg-muted sm:px-6 lg:px-10">
        © {new Date().getFullYear()} Wiggling Gold Limited. All rights reserved.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
