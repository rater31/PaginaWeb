
import { services } from "../lib/content";

export default function Services(){
  return (
    <section className="container py-7" aria-labelledby="servicios">
      <h2 id="servicios" className="font-extrabold mb-4" style={{ fontSize: "var(--fs-h2)" }}>Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <article key={i} className="bg-surface border border-surface2 rounded-r2 p-4 min-h-[120px] hover:border-[#2b2b2b] hover:-translate-y-[1px] transition">
            <h3 className="text-[1.125rem] mb-1">{s.title}</h3>
            <p className="text-gray1 text-[0.9375rem] leading-[1.55]">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
