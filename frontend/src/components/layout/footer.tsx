import Link from "next/link";
import { BotanikLogo } from "./header";
import { socials } from "@/config/social";
import { SocialIcon } from "../ui/social-icon";

type FooterProps = {
  compact?: boolean;
};

export default function Footer({ compact = false }: FooterProps) {
  if (compact) {
    return (
      <footer>
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: "none", paddingTop: 0 }}>
            <span>© 2026 Botanik&apos;Afro. Tous droits réservés.</span>
            <div style={{ display: "flex", gap: 24 }}>
              <Link href="/contact">Contact</Link>
              <a href="#">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer id="f">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <BotanikLogo gold />
            <p>
              Soins capillaires naturels pour cheveux afro, bouclés, frisés et
              crépus. Fabriqués à Yaoundé avec des ingrédients africains.
            </p>
            <div className="social-row">
              {socials.map((social) => (
                <Link key={social.id} href={social.href} aria-label={social.name}>
                  <SocialIcon id={social.id} size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <Link href="/produits">Produits</Link>
            <Link href="/services">Services</Link>
            <Link href="/apropos">À propos</Link>
            <Link href="/rendezvous">Rendez-vous</Link>
          </div>

          <div className="footer-col">
            <h4>Boutique</h4>
            <a href="#">Hydratation</a>
            <a href="#">Traitements</a>
            <a href="#">Accessoires</a>
            <a href="#">Coffrets</a>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>+237 6 90 00 00 00</p>
            <p>hello@botanikafro.com</p>
            <p>Kodengui, Yaoundé — Cameroun</p>
          </div>

          <div className="footer-col">
            <h4>Horaires</h4>
            <p>Lun – Ven · 9h – 19h</p>
            <p>Samedi · 10h – 17h</p>
            <p>Dimanche · Fermé</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Botanik&apos;Afro. Tous droits réservés.</span>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#">Confidentialité</a>
            <a href="#">CGV</a>
            <a href="#">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
