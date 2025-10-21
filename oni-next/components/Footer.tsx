
import { links } from "../lib/content";

export default function Footer(){
  return (
    <footer className="container py-6" role="contentinfo" aria-label="Pie de página">
      <div className="sep" aria-hidden="true"></div>
      <div className="flex items-center justify-between gap-3 flex-wrap text-gray2 text-[0.8125rem]">
        <span>© Oni Solutions</span>
        <nav aria-label="Redes sociales">
          <ul className="flex gap-3 list-none m-0 p-0">
            <li><a className="hover:opacity-90" href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a className="hover:opacity-90" href={links.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a className="hover:opacity-90" href={links.email}>hygdevelopers@gmail.com</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
