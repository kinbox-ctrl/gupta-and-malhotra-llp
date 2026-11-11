import PageHero from "../components/PageHero";
import { INDUSTRIES } from "../lib/site";

export default function Industries() {
  return (
    <div data-testid="industries-page">
      <PageHero
        overline="Industries We Serve"
        title="Sector fluency, built case by case."
        subtitle="We invest in deep, vertical knowledge — so our counsel sounds like it was written by an insider, because it was."
      />

      <section className="bg-[#f5f1ea]">
        <div className="container-edit py-20 md:py-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e3a5f]/15">
            {INDUSTRIES.map((ind, i) => (
              <article
                key={ind.name}
                data-testid={`industry-card-${ind.name}`}
                className={`group relative overflow-hidden bg-white aspect-[4/5] ${i === INDUSTRIES.length - 1 ? "sm:col-span-2 sm:aspect-[8/5]" : ""}`}
              >
                <img src={ind.image} alt={ind.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1200ms] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/95 via-[#1e3a5f]/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <p className="text-xs uppercase tracking-[0.18em] font-bold text-[#d97334]">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-heading text-3xl md:text-4xl mt-3 font-medium leading-tight">{ind.name}</h3>
                  <p className="font-body text-sm text-white/85 mt-4 leading-relaxed max-w-sm">{ind.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-[#1e3a5f]/10">
        <div className="container-edit py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="overline">Don't see your industry?</p>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-[#1e3a5f] mt-4 leading-[1.08]">
              Our framework adapts to any sector with statutory complexity.
            </h2>
          </div>
          <div className="md:col-span-5 font-body text-[#4a5568] leading-relaxed">
            <p>From cooperatives to crypto-natives, we have advised across the spectrum. Tell us about your industry — we'll tell you exactly where your compliance edges and tax leverage points live.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
