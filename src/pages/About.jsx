import PageHero from "../components/PageHero";
import { VALUES, SITE } from "../lib/site";

const PARTNERS = [
  { name: "CA Rohan Gupta", role: "Founding Partner", focus: "Audit & Assurance, Litigation", image: "/images/partner-1.jpg" },
  { name: "CA Aman Malhotra", role: "Founding Partner", focus: "Direct & Indirect Tax, Advisory", image: "/images/partner-2.jpg" },
  { name: "CA Priya Sharma", role: "Partner", focus: "Corporate Compliance, FEMA", image: "/images/partner-3.jpg" },
  { name: "CA Vivek Joshi", role: "Partner", focus: "Valuations, M&A, Startups", image: "/images/partner-4.jpg" },
];

export default function About() {
  return (
    <div data-testid="about-page">
      <PageHero
        overline="About the Firm"
        title="A practice built on trust, rigour and continuity."
        subtitle="Our partners and managers bring decades of combined experience across the chartered accountancy profession — and a shared belief that great advisory begins with listening."
      />

      {/* Story */}
      <section className="bg-white border-b border-[#1e3a5f]/10">
        <div className="container-edit py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img
              src="/images/tax-papers.jpg"
              alt="Architectural detail"
              className="w-full aspect-[4/5] object-cover border border-[#1e3a5f]/15"
            />
          </div>
          <div className="md:col-span-7">
            <p className="overline">Our Story</p>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#1e3a5f] mt-4 leading-[1.08]">From a partnership of conviction.</h2>
            <p className="font-body text-lg text-[#4a5568] leading-[1.9] mt-8 dropcap">
              Gupta & Malhotra was founded on the conviction that founders and family businesses
              deserve the same calibre of counsel offered to listed enterprises. From a quiet
              office in Yamunanagar, we have grown into a multidisciplinary practice serving
              clients across northern India and abroad — guided by an old-fashioned ethic of
              technical conservatism, candour and continuity.
            </p>
            <p className="font-body text-[#4a5568] leading-relaxed mt-6">
              Today, the firm operates as a tightly knit team of chartered accountants,
              advocates and management consultants. We invest deeply in long-term relationships,
              maintain measured caseloads per partner, and refuse to outsource work that
              demands our judgment.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#f5f1ea]">
        <div className="container-edit py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1e3a5f]/15">
          <div className="bg-white p-10 md:p-14">
            <p className="overline">Our Vision</p>
            <h3 className="font-heading text-3xl md:text-4xl font-medium text-[#1e3a5f] mt-4 leading-tight">
              To be the most trusted advisor at the inflection points of every client we serve.
            </h3>
            <p className="font-body text-[#4a5568] leading-relaxed mt-6">A practice where reputation is the only currency that matters — earned slowly, defended fiercely.</p>
          </div>
          <div className="bg-[#1e3a5f] text-white p-10 md:p-14">
            <p className="overline">Our Mission</p>
            <h3 className="font-heading text-3xl md:text-4xl font-medium mt-4 leading-tight">
              To deliver counsel that is technically sound, ethically grounded, and commercially useful.
            </h3>
            <p className="font-body text-white/75 leading-relaxed mt-6">Every engagement begins with a conversation, not a checklist — because every client is a partnership in the making.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white border-y border-[#1e3a5f]/10">
        <div className="container-edit py-20 md:py-28">
          <p className="overline">Our Code</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#1e3a5f] mt-4 leading-[1.08] max-w-2xl">The four ideas that govern everything we do.</h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-px bg-[#1e3a5f]/15">
            {VALUES.map((v, i) => (
              <div key={v.title} className="bg-white p-8">
                <p className="font-heading text-5xl text-[#d97334] font-medium">0{i + 1}</p>
                <p className="font-heading text-2xl text-[#1e3a5f] mt-4 font-medium">{v.title}</p>
                <p className="font-body text-[#4a5568] text-sm leading-relaxed mt-3">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-[#f5f1ea]">
        <div className="container-edit py-20 md:py-28">
          <p className="overline">Leadership</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#1e3a5f] mt-4 leading-[1.08]">Partners who stay with the work.</h2>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PARTNERS.map((p) => (
              <div key={p.name} data-testid={`partner-${p.name}`} className="group">
                <div className="aspect-[3/4] overflow-hidden border border-[#1e3a5f]/15 bg-white">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <p className="font-heading text-2xl text-[#1e3a5f] mt-5 font-medium">{p.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-[#d97334] font-bold mt-1">{p.role}</p>
                <p className="font-body text-sm text-[#4a5568] mt-3">{p.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
