
"use client";
import Image from "next/image";
import { brand, links } from "../lib/content";
import Logo from "../lib/public/logo-sin-fondo.png";


export default function Topbar(){
  return (
    <div className="sticky top-0 z-50 bg-black border-b-4 border-oniRed">
      <div className="container flex items-center justify-between py-[14px]" role="navigation" aria-label="Barra de navegación">
        <div className="flex items-center gap-3">
          <Image src={Logo} width={40} height={40} alt="Logo de Oni Solutions" className="rounded-[6px]" priority />
          <span className="font-extrabold tracking-tight">{brand.name}</span>
        </div>
        <a className="inline-flex items-center gap-2 bg-oniRed text-white px-4 py-2 rounded-md font-bold shadow-oni hover:opacity-95 hover:-translate-y-[1px] transition" href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Ir a Instagram de Oni Solutions">Ir a Instagram</a>
      </div>
    </div>
  );
}
