
import Image from "next/image";
import { brand, links } from "../lib/content";
import Logo2 from "../lib/public/logo-sin-fondo.png";

export default function Hero(){
  return (
    <header className="container text-center py-16 lg:py-20">
      <Image src={Logo2} width={160} height={160} alt="Máscara Oni — identidad de marca" className="mx-auto mb-4 rounded-[12px]" priority />
      <h1 className="font-extrabold" style={{ fontSize: "var(--fs-hero)" }}>{brand.tagline}</h1>
      <p className="text-gray1 max-w-[800px] mx-auto mt-2 mb-4 text-[clamp(0.875rem,2.4vw,1.125rem)]">{brand.description}</p>
      <div className="flex justify-center flex-wrap gap-3">
        <a className="btn-primary" href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Contactar por Instagram">Contactar por Instagram</a>
        <a className="btn-secondary" href={links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp 351 240 5292">WhatsApp: 351 240 5292</a>
      </div>
      <div className="sep" aria-hidden="true"></div>
    </header>
  );
}
