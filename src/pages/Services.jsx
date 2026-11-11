import { Link } from "react-router-dom";
import { ShieldCheck, FileText, Building2, TrendingUp, Rocket, Scale, HeartHandshake, BookOpen, Briefcase, Globe, Gavel, Ship, BadgeCheck, Check, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { SERVICES } from "../lib/site";

const iconMap = { ShieldCheck, FileText, Building2, TrendingUp, Rocket, Scale, HeartHandshake, BookOpen, Briefcase, Globe, Gavel, Ship, BadgeCheck };

export default function Services() {
  return (
    <div data-testid="services-page">
      <PageHero
        overline="Practice Areas"
        title="Every discipline, one standard of care."
        subtitle="From the rigour of statutory audit to the nuance of cross-border tax structuring, every engagement is led by a partner and delivered by a senior team."
      />

      <section className="bg-white">
        <div className="container-edit py-16 md:py-24 space-y-px bg-[#1e3a5f]/15">
          {SERVICES.map((s, idx) => {
            const Icon = iconMap[s.icon] || ShieldCheck;
            const isReversed = idx % 2 === 1;
            return (
              <article
                id={s.slug}
                key={s.slug}
                data-testid={`service-detail-${s.slug}`}
                className="scroll-mt-28 bg-[#f5f1ea] grid grid-cols-1 md:grid-cols-12 gap-10 p-8 md:p-14"
              >
                <div className={`md:col-span-5 ${isReversed ? "md:order-2" : ""}`}>
                  <p className="overline">{String(idx + 1).padStart(2, "0")} · Practice</p>
                  <div className="mt-6 flex items-center gap-4">
                    <Icon size={48} className="text-[#d97334]" strokeWidth={1.2} />
                  </div>
                  <h3 className="font-heading text-3xl md:text-5xl font-medium text-[#1e3a5f] mt-5 leading-[1.06]">{s.title}</h3>
                  <p className="font-body text-lg text-[#4a5568] leading-relaxed mt-5">{s.short}</p>
                  <Link to="/contact" data-testid={`service-cta-${s.slug}`} className="btn-outline-navy mt-8">
                    Discuss this Practice <ArrowRight size={14} />
                  </Link>
                </div>
                <div className={`md:col-span-7 ${isReversed ? "md:order-1" : ""}`}>
                  <div className="bg-white border border-[#1e3a5f]/10 p-8 md:p-10 h-full">
                    <p className="overline">Capabilities</p>
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-1.5 inline-flex w-5 h-5 items-center justify-center bg-[#1e3a5f] text-white">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span className="font-body text-[#1e3a5f] text-sm md:text-base">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#1e3a5f] text-white">
        <div className="container-edit py-20 md:py-24 text-center">
          <p className="overline">Not sure where to start?</p>
          <h3 className="font-heading text-4xl md:text-5xl font-medium mt-5 leading-tight max-w-3xl mx-auto">
            Schedule a complimentary 30-minute consultation with a Partner.
          </h3>
          <Link to="/contact" data-testid="services-bottom-cta" className="btn-accent mt-8">
            Book a Consultation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
