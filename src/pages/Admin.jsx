import { useEffect, useState } from "react";
import { Mail, Phone, RefreshCw } from "lucide-react";
import { fetchInquiries } from "../lib/api";

const STATUS_BADGES = {
  new: { label: "New", cls: "bg-[#d97334] text-white" },
  in_progress: { label: "In Progress", cls: "bg-[#1e3a5f] text-white" },
  resolved: { label: "Resolved", cls: "bg-green-700 text-white" },
  archived: { label: "Archived", cls: "bg-[#718096] text-white" },
};

export default function Admin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [active, setActive] = useState(null);

  const load = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchInquiries();
      setItems(data);
    } catch (e) {
      setError("Failed to load inquiries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  return (
    <div data-testid="admin-page" className="bg-[#f5f1ea] min-h-screen">
      <section className="border-b border-[#1e3a5f]/10 bg-white">
        <div className="container-edit py-14 flex items-center justify-between">
          <div>
            <p className="overline">Internal · Admin</p>
            <h1 className="font-heading text-4xl md:text-5xl text-[#1e3a5f] font-medium mt-3">Client Inquiries</h1>
          </div>
          <button onClick={load} data-testid="admin-refresh" className="btn-outline-navy">
            <RefreshCw size={14} /> Refresh
          </button>
        </div>
      </section>

      <section className="container-edit py-16">
        {loading && <p data-testid="admin-loading" className="font-body text-[#4a5568]">Loading…</p>}
        {error && <p data-testid="admin-error" className="font-body text-red-700">{error}</p>}
        {!loading && !error && items.length === 0 && (
          <div data-testid="admin-empty" className="bg-white border border-[#1e3a5f]/10 p-10 text-center">
            <p className="font-heading text-2xl text-[#1e3a5f]">No inquiries yet.</p>
            <p className="font-body text-[#4a5568] mt-2">Inquiries submitted via the Contact page will appear here.</p>
          </div>
        )}
        {!loading && items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* List */}
            <div className="lg:col-span-1 space-y-px bg-[#1e3a5f]/15">
              {items.map((it) => {
                const badge = STATUS_BADGES[it.status] || STATUS_BADGES.new;
                return (
                  <button
                    key={it.id}
                    data-testid={`admin-item-${it.id}`}
                    onClick={() => setActive(it)}
                    className={`text-left w-full bg-white p-5 hover:bg-[#1e3a5f]/5 transition-colors ${active?.id === it.id ? "border-l-4 border-[#d97334]" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-heading text-lg text-[#1e3a5f] font-medium">{it.name}</p>
                      <span className={`text-[10px] uppercase tracking-[0.16em] font-bold px-2 py-1 ${badge.cls}`}>{badge.label}</span>
                    </div>
                    <p className="font-body text-sm text-[#4a5568] truncate mt-1">{it.subject || it.service || "General Inquiry"}</p>
                    <p className="font-body text-xs text-[#718096] mt-2">{new Date(it.created_at).toLocaleString()}</p>
                  </button>
                );
              })}
            </div>

            {/* Detail */}
            <div className="lg:col-span-2">
              {active ? (
                <div data-testid="admin-detail" className="bg-white border border-[#1e3a5f]/10 p-8 md:p-10">
                  <p className="overline">Inquiry</p>
                  <h2 className="font-heading text-3xl md:text-4xl text-[#1e3a5f] font-medium mt-3">{active.name}</h2>
                  <div className="mt-6 flex flex-wrap gap-6 font-body text-sm text-[#1e3a5f]">
                    <a href={`mailto:${active.email}`} className="flex items-center gap-2 hover:text-[#d97334]"><Mail size={14} /> {active.email}</a>
                    {active.phone && <a href={`tel:${active.phone}`} className="flex items-center gap-2 hover:text-[#d97334]"><Phone size={14} /> {active.phone}</a>}
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <Detail k="Service" v={active.service || "—"} />
                    <Detail k="Subject" v={active.subject || "—"} />
                    <Detail k="Status" v={active.status} />
                    <Detail k="Submitted" v={new Date(active.created_at).toLocaleString()} />
                  </div>
                  <div className="mt-8">
                    <p className="overline">Message</p>
                    <p className="mt-3 font-body text-[#4a5568] whitespace-pre-wrap leading-relaxed">{active.message}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-[#1e3a5f]/10 p-10 text-center font-body text-[#4a5568]">
                  Select an inquiry from the list to view details.
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function Detail({ k, v }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] font-bold text-[#d97334]">{k}</p>
      <p className="font-body text-[#1e3a5f] mt-1">{v}</p>
    </div>
  );
}
