import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, ShieldCheck, FileText, Building2, TrendingUp, Rocket, Scale, HeartHandshake, BookOpen, Briefcase, Globe, Gavel, Ship, BadgeCheck } from "lucide-react";
import { SERVICES, QUICK_LINKS, VALUES, STATS, SITE, INDUSTRIES } from "../lib/site";

const iconMap = { ShieldCheck, FileText, Building2, TrendingUp, Rocket, Scale, HeartHandshake, BookOpen, Briefcase, Globe, Gavel, Ship, BadgeCheck };

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative">
        <div className="container-edit pt-8 md:pt-12 pb-16 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="overline reveal">Chartered Accountants · Yamunanagar</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[88px] leading-[1.02] tracking-tight text-[#1e3a5f] mt-6 font-medium reveal reveal-delay-1">
              Empowering your<br />
              financial future<br />
              with <span className="italic text-[#d97334]">integrity.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-[#4a5568] font-body leading-relaxed reveal reveal-delay-2">
              A practice built on technical depth and trusted counsel — serving founders, family
              businesses and growth-stage enterprises across audit, tax, advisory and litigation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 reveal reveal-delay-3">
              <Link to="/services" data-testid="hero-cta-services" className="btn-primary">Explore Services <ArrowRight size={16} /></Link>
              <Link to="/contact" data-testid="hero-cta-contact" className="btn-outline-navy">Talk to a Partner</Link>
            </div>
          </div>

          <div className="lg:col-span-5 reveal reveal-delay-2">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-[#1e3a5f]/15">
                <img
                  src="/images/towers.jpg"
                  alt="Modern corporate architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-[#1e3a5f]/10 bg-white">
        <div className="container-edit py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="overline">The Firm</p>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1e3a5f] font-medium mt-4 leading-[1.08]">
              An advisory house, not a vendor.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="dropcap text-lg text-[#4a5568] font-body leading-[1.9]">
              Gupta & Malhotra is a multidisciplinary chartered accountancy practice founded on
              the principle that great financial advice begins with deep listening. Our partners
              and managers bring decades of combined experience across statutory audit, direct &
              indirect taxation, corporate compliance, business valuations, restructuring and
              litigation. We work alongside founders, CFOs and boards as long-term stewards of
              their firm's financial integrity — not as transactional vendors.
            </p>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((s, i) => (
                <div key={s.label} data-testid={`stat-${i}`} className="border-l-2 border-[#d97334] pl-4">
                  <p className="font-heading text-4xl md:text-5xl font-medium text-[#1e3a5f]">{s.value}</p>
                  <p className="text-xs font-body uppercase tracking-[0.18em] text-[#718096] mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f5f1ea]">
        <div className="container-edit py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="overline">What We Do</p>
              <h2 className="font-heading text-4xl md:text-5xl text-[#1e3a5f] font-medium mt-4 leading-[1.08]">Practice areas, crafted with rigour.</h2>
            </div>
            <Link to="/services" data-testid="services-view-all" className="link-underline font-body text-sm text-[#1e3a5f] flex items-center gap-1 self-start md:self-end whitespace-nowrap shrink-0">View all services <ArrowUpRight size={14} className="inline-block align-[-2px]" /></Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e3a5f]/10">
            {SERVICES.map((s, idx) => {
              const Icon = iconMap[s.icon] || ShieldCheck;
              const isFeatured = idx === 0;
              return (
                <Link
                  to={`/services#${s.slug}`}
                  key={s.slug}
                  data-testid={`service-card-${s.slug}`}
                  className={`group bg-white p-8 md:p-10 hover:bg-[#1e3a5f] hover:text-white transition-colors duration-500 ${isFeatured ? "lg:col-span-2" : ""} ${idx === SERVICES.length - 1 ? "md:col-span-2" : ""}`}
                >
                  <Icon size={36} className="text-[#d97334]" strokeWidth={1.2} />
                  <h3 className="font-heading text-2xl md:text-3xl mt-6 font-medium leading-tight">{s.title}</h3>
                  <p className="font-body text-sm md:text-base mt-3 text-[#4a5568] group-hover:text-white/80 leading-relaxed">{s.short}</p>
                  <span className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.18em] font-bold text-[#d97334]">Learn more <ArrowRight size={14} /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES STRIP */}
      <section className="bg-white border-y border-[#1e3a5f]/10">
        <div className="container-edit py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-12">
            <div className="md:col-span-7">
              <p className="overline">Sectors We Serve</p>
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#1e3a5f] mt-4 leading-[1.08]">Industry-fluent counsel across <span className="italic text-[#d97334]">18+</span> sectors.</h2>
            </div>
            <div className="md:col-span-5 md:text-right">
              <Link to="/industries" data-testid="industries-link" className="link-underline font-body text-sm text-[#1e3a5f]">All Industries →</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INDUSTRIES.slice(0, 4).map((ind) => (
              <div key={ind.name} data-testid={`industry-tile-${ind.name}`} className="group relative overflow-hidden aspect-[4/5] border border-[#1e3a5f]/15">
                <img src={ind.image} alt={ind.name} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/85 via-[#1e3a5f]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-heading text-white text-xl md:text-2xl">{ind.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#1e3a5f] text-white">
        <div className="container-edit py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="overline">Why Choose Us</p>
              <h2 className="font-heading text-4xl md:text-5xl mt-4 font-medium leading-[1.08]">Old-fashioned diligence, modern execution.</h2>
              <p className="font-body text-white/75 mt-6 leading-relaxed">We blend the technical conservatism of a senior practice with the responsiveness of a boutique firm — so you never have to choose between rigor and pace.</p>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
              {VALUES.map((v) => (
                <div key={v.title} className="bg-[#1e3a5f] p-8 md:p-10">
                  <p className="font-heading text-2xl md:text-3xl font-medium">{v.title}</p>
                  <div className="divider-orange my-4" />
                  <p className="font-body text-white/75 text-sm md:text-base leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="bg-[#f5f1ea]">
        <div className="container-edit py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="overline">Quick Access</p>
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#1e3a5f] mt-4 leading-[1.08]">Government portals at your fingertips.</h2>
            </div>
            <p className="font-body text-sm text-[#718096] max-w-md">Direct, current links to the statutory portals our clients frequent most. Bookmark this page.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e3a5f]/15">
            {QUICK_LINKS.map((q, i) => (
              <a
                key={q.name}
                href={q.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`portal-link-${q.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group bg-white p-8 hover:bg-[#1e3a5f] hover:text-white transition-colors duration-500 flex items-start justify-between gap-4"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#d97334] font-bold">0{i + 1}</p>
                  <p className="font-heading text-2xl mt-3 font-medium leading-tight">{q.name}</p>
                  <p className="text-sm text-[#4a5568] group-hover:text-white/70 mt-2 font-body">{q.desc}</p>
                </div>
                <ArrowUpRight size={22} className="text-[#1e3a5f] group-hover:text-[#d97334] shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
