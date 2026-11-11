import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import { SITE, SERVICES } from "../lib/site";
import { submitInquiry, HAS_BACKEND } from "../lib/api";
import { toast } from "sonner";

const initialForm = { name: "", email: "", phone: "", service: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    if (!HAS_BACKEND) {
      // No API configured: hand the inquiry to the visitor's email app instead.
      const body = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.phone ? `Phone: ${form.phone}` : null,
        form.service ? `Service of interest: ${form.service}` : null,
        "",
        form.message,
      ].filter((line) => typeof line === "string").join("\n");
      const subject = form.subject || `Inquiry from ${form.name}`;
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSuccess("email");
      setForm(initialForm);
      return;
    }
    setSubmitting(true);
    try {
      await submitInquiry(form);
      setSuccess("sent");
      setForm(initialForm);
      toast.success("Thank you — a Partner will be in touch within one business day.");
    } catch (err) {
      const msg = err?.response?.data?.detail?.[0]?.msg || err?.response?.data?.detail || "Unable to submit. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Unable to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page">
      <PageHero
        overline="Get in Touch"
        title="Begin a conversation with a Partner."
        subtitle="We respond to every inquiry within one business day. Confidentiality is assured."
      />

      <section className="bg-white border-b border-[#1e3a5f]/10">
        <div className="container-edit py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Details */}
          <aside className="md:col-span-5">
            <p className="overline">Corporate Office</p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1e3a5f] font-medium mt-4 leading-tight">Yamunanagar, Haryana</h2>
            <ul className="mt-10 space-y-7 font-body text-[#1e3a5f]">
              <li className="flex gap-4">
                <MapPin size={22} className="text-[#d97334] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#d97334] font-bold">Address</p>
                  <p className="mt-1 text-[#4a5568] leading-relaxed" data-testid="contact-address">{SITE.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone size={22} className="text-[#d97334] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#d97334] font-bold">Phone</p>
                  {SITE.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} data-testid={`contact-phone-${p}`} className="block mt-1 text-[#4a5568] hover:text-[#1e3a5f]">{p}</a>
                  ))}
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={22} className="text-[#d97334] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#d97334] font-bold">Email</p>
                  <a href={`mailto:${SITE.email}`} data-testid="contact-info-email" className="mt-1 text-[#4a5568] hover:text-[#1e3a5f] block">{SITE.email}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock size={22} className="text-[#d97334] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#d97334] font-bold">Office Hours</p>
                  <p className="mt-1 text-[#4a5568]">Mon – Sat · 10:00 AM – 7:00 PM</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 aspect-video overflow-hidden border border-[#1e3a5f]/15">
              <iframe
                title="Office Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent("Raghunath Puri, Yamunanagar, Haryana 135001")}&output=embed`}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-7">
            <div className="bg-[#f5f1ea] p-8 md:p-12 border border-[#1e3a5f]/10">
              <p className="overline">Inquiry Form</p>
              <h3 className="font-heading text-3xl md:text-4xl text-[#1e3a5f] font-medium mt-3 leading-tight">Tell us about your firm.</h3>

              {success ? (
                <div data-testid="contact-success" className="mt-10 flex flex-col items-start gap-4">
                  <CheckCircle2 size={48} className="text-[#d97334]" strokeWidth={1.3} />
                  <h4 className="font-heading text-2xl text-[#1e3a5f]">{success === "email" ? "Almost done — send the email." : "Inquiry received."}</h4>
                  <p className="font-body text-[#4a5568] max-w-md">
                    {success === "email"
                      ? <>Your email app should have opened with your inquiry filled in. Press send to reach us. If nothing opened, write to <a href={`mailto:${SITE.email}`} className="text-[#d97334] underline">{SITE.email}</a>.</>
                      : "Thank you. A partner from our practice will be in touch within one business day."}
                  </p>
                  <button onClick={() => setSuccess(false)} data-testid="contact-new-inquiry" className="btn-outline-navy mt-2">Send another inquiry</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5" data-testid="contact-form">
                  <Field label="Full Name *" name="name" value={form.name} onChange={onChange} required />
                  <Field label="Email *" name="email" type="email" value={form.email} onChange={onChange} required />
                  <Field label="Phone" name="phone" value={form.phone} onChange={onChange} />
                  <div className="flex flex-col">
                    <label htmlFor="contact-service" className="text-xs uppercase tracking-[0.18em] font-bold text-[#1e3a5f] mb-2">Service of Interest</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      data-testid="contact-service"
                      className="bg-white border border-[#1e3a5f]/20 px-4 py-3 font-body text-[#1e3a5f] focus:outline-none focus:border-[#d97334]"
                    >
                      <option value="">Select a practice area</option>
                      {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <Field label="Subject" name="subject" value={form.subject} onChange={onChange} />
                  </div>
                  <div className="sm:col-span-2 flex flex-col">
                    <label htmlFor="contact-message" className="text-xs uppercase tracking-[0.18em] font-bold text-[#1e3a5f] mb-2">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={6}
                      required
                      data-testid="contact-message"
                      className="bg-white border border-[#1e3a5f]/20 px-4 py-3 font-body text-[#1e3a5f] focus:outline-none focus:border-[#d97334] resize-none"
                      placeholder="Briefly describe your business and what you are looking to discuss…"
                    />
                  </div>
                  <div className="sm:col-span-2 flex items-center justify-between gap-4 mt-2">
                    <p className="text-xs text-[#718096] font-body">By submitting, you consent to be contacted by {SITE.name} regarding your inquiry.</p>
                    <button type="submit" disabled={submitting} data-testid="contact-submit" className="btn-accent shrink-0 whitespace-nowrap">
                      {submitting ? "Sending…" : <>Send Inquiry <Send size={14} /></>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text", required }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={`contact-${name}`} className="text-xs uppercase tracking-[0.18em] font-bold text-[#1e3a5f] mb-2">{label}</label>
      <input
        type={type}
        id={`contact-${name}`}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        data-testid={`contact-${name}`}
        className="bg-white border border-[#1e3a5f]/20 px-4 py-3 font-body text-[#1e3a5f] focus:outline-none focus:border-[#d97334]"
      />
    </div>
  );
}
