import type { Metadata } from "next";
import ContactForm from "@/components/botanik/ContactForm";
import Icon from "@/components/botanik/Icons";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Contact — Botani'K Afro",
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <main>
        <section className="page-hero" style={{ paddingBottom: 20 }}>
          <div className="container">
            <div className="eyebrow reveal">Contact</div>
            <h1 className="reveal">Une question ? Parlons-en</h1>
            <p className="reveal">Notre équipe répond sous 24h, du lundi au samedi.</p>
          </div>
        </section>

        <section style={{ paddingTop: 20 }}>
          <div className="container contact-wrap">
            <div className="card contact-form-card reveal">
              <h3>Envoyez-nous un message</h3>
              <p className="sub">
                Nous revenons vers vous rapidement, par email ou téléphone selon
                votre préférence.
              </p>
              <ContactForm />
            </div>

            <div className="reveal">
              <div className="map-frame">
                <iframe
                  loading="lazy"
                  src="https://www.google.com/maps?q=Kodengui,Yaound%C3%A9,Cameroun&output=embed"
                  title="Localisation Botani'K Afro"
                />
              </div>
              <div className="info-float">
                <div className="info-row">
                  <div className="info-icon">
                    <Icon name="phone" size={18} />
                  </div>
                  <div>
                    <h5>Téléphone</h5>
                    <a className="link" href="tel:+237690000000">
                      +237 6 90 00 00 00
                    </a>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-icon">
                    <Icon name="mail" size={18} />
                  </div>
                  <div>
                    <h5>Email</h5>
                    <a className="link" href="mailto:hello@botanikafro.com">
                      hello@botanikafro.com
                    </a>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-icon">
                    <Icon name="pin" size={18} />
                  </div>
                  <div>
                    <h5>Adresse</h5>
                    <span>Rue 1.234, Kodengui, Yaoundé — Cameroun</span>
                  </div>
                </div>
                <div className="quick-actions">
                  <a
                    className="btn btn-primary btn-sm"
                    href="https://wa.me/237690000000"
                    rel="noopener"
                    target="_blank"
                  >
                    WhatsApp
                  </a>
                  <a href="tel:+237690000000" className="btn btn-ghost btn-sm">
                    Appeler
                  </a>
                </div>
              </div>

              <div className="card hours-card">
                <h5
                  style={{
                    color: "var(--santal)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: ".06em",
                    marginBottom: 16,
                    textTransform: "uppercase",
                  }}
                >
                  Horaires d&apos;ouverture
                </h5>
                <div className="hours-row">
                  <span>Lundi – Vendredi</span>
                  <span>9h00 – 19h00</span>
                </div>
                <div className="hours-row today">
                  <span>Samedi</span>
                  <span>9h00 – 17h00</span>
                </div>
                <div className="hours-row">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
