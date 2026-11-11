import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section data-testid="not-found-page" className="container-edit py-24 md:py-32">
      <p className="overline">404</p>
      <h1 className="font-heading text-5xl md:text-6xl font-medium text-[#1e3a5f] mt-5 leading-[1.05]">
        This page could not be found.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-[#4a5568] font-body leading-relaxed">
        The link may be out of date. Head back to the home page or get in touch with us directly.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link to="/" className="btn-primary">Back to Home <ArrowRight size={16} /></Link>
        <Link to="/contact" className="btn-outline-navy">Contact Us</Link>
      </div>
    </section>
  );
}
