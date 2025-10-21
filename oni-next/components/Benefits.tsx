
import { benefits } from "../lib/content";

export default function Benefits(){
  return (
    <section className="container py-7" aria-labelledby="porque-oni">
      <h2 id="porque-oni" className="font-extrabold mb-4" style={{ fontSize: "var(--fs-h2)" }}>¿Por qué elegir Oni?</h2>
      <div aria-label="Beneficios principales">
        {benefits.map((b, i) => (
          <span key={i} className="inline-block border border-gray2 text-gray1 px-3 py-2 rounded-full mr-2 mt-2 text-[0.9375rem]">{b}</span>
        ))}
      </div>
    </section>
  );
}
