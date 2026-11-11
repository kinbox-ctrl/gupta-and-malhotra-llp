export default function PageHero({ overline, title, subtitle }) {
  return (
    <section data-testid="page-hero" className="border-b border-[#1e3a5f]/10 bg-[#f5f1ea]">
      <div className="container-edit pt-12 md:pt-16 pb-16 md:pb-20">
        {overline && <p className="overline reveal">{overline}</p>}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-[#1e3a5f] mt-5 leading-[1.05] tracking-tight reveal reveal-delay-1">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-[#4a5568] font-body leading-relaxed reveal reveal-delay-2">
            {subtitle}
          </p>
        )}
        <div className="mt-8 divider-orange reveal reveal-delay-3" />
      </div>
    </section>
  );
}
