
import { signals } from "../lib/content";

export default function Signals(){
  return (
    <section className="container py-7" aria-labelledby="senales-lentitud">
      <h2 id="senales-lentitud" className="font-extrabold mb-4" style={{ fontSize: "var(--fs-h2)" }}>7 señales de que tu PC está lenta</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {signals.map((s, i) => (
          <article key={i} className="bg-surface border border-surface2 rounded-r2 p-4">
            <h4 className="text-base mb-2"><span className="text-purple font-extrabold mr-2" aria-hidden="true">{s.n}</span>{s.title}</h4>
            <ul className="text-gray1 pl-5 list-disc text-[0.9375rem]">{s.items.map((it, j) => <li key={j} className="my-1">{it}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
