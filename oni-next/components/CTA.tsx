
import { brand, links } from "../lib/content";

export default function CTA(){
  return (
    <section className="container py-7" aria-labelledby="cta-final">
      <div className="bg-surface border border-surface2 rounded-r3 p-5 text-center shadow-oni" role="region" aria-label="Contacto">
        <h2 id="cta-final" className="font-extrabold mb-2" style={{ fontSize: "var(--fs-h2)" }}>¿Tu PC está lenta?</h2>
        <p className="text-gray1 max-w-[800px] mx-auto mb-3 text-[clamp(0.875rem,2.4vw,1.125rem)]">Te ayudamos a recuperar rendimiento y estabilidad con un plan claro.</p>
        <div className="flex justify-center flex-wrap gap-3 mt-2">
          <a className="btn-primary" href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Contactar por Instagram">Contactar por Instagram</a>
          <a className="btn-secondary" href={links.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: 351 240 5292</a>
          <a className="btn-secondary" href={links.email} aria-label="Enviar correo a hygdevelopers@gmail.com">hygdevelopers@gmail.com</a>
        </div>
        <p className="text-gray2 text-[0.8125rem] mt-3">@oni.solutions.cba — {brand.city}</p>
      </div>
    </section>
  );
}
