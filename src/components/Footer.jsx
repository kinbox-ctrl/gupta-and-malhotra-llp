import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SITE, NAV, QUICK_LINKS, SERVICES } from "../lib/site";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#1e3a5f] text-white">
      <div className="container-edit py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* CTA + brand */}
          <div className="md:col-span-5">
            <p className="overline text-[#d97334]">Let's Talk</p>
            <h3 className="font-heading text-4xl md:text-5xl font-medium mt-4 leading-tight">
              Speak directly with a Partner about your firm's next chapter.
            </h3>
            <Link to="/contact" data-testid="footer-cta-contact" className="btn-accent mt-8">
              Schedule a Consultation <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <p className="overline mb-5">Explore</p>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    data-testid={`footer-nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/80 hover:text-[#d97334] font-body text-sm transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <p className="overline mb-5">Government Portals</p>
            <ul className="space-y-3">
              {QUICK_LINKS.map((q) => (
                <li key={q.name}>
                  <a
                    href={q.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`footer-portal-${q.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white/80 hover:text-[#d97334] font-body text-sm transition-colors flex items-center gap-1"
                  >
                    {q.name} <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="overline mb-5">Corporate Office</p>
            <ul className="space-y-4 font-body text-sm text-white/85">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-[#d97334]" />
                <span data-testid="footer-address">{SITE.address}</span>
              </li>
              {SITE.phones.map((p) => (
                <li key={p} className="flex gap-3 items-center">
                  <Phone size={16} className="text-[#d97334]" />
                  <a href={`tel:${p.replace(/\s/g, "")}`} data-testid={`footer-phone-${p}`} className="hover:text-[#d97334]">{p}</a>
                </li>
              ))}
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[#d97334]" />
                <a href={`mailto:${SITE.email}`} data-testid="footer-email" className="hover:text-[#d97334]">{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/60 font-body">
          <p>© {new Date().getFullYear()} {SITE.full}. All rights reserved.</p>
          <p className="font-heading italic text-base">Empowering Your Financial Future with Integrity.</p>
        </div>
      </div>
    </footer>
  );
}
