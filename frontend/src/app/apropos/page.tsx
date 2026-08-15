import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Icon from "@/components/botanik/Icons";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { team, timeline } from "@/config/botanik";

export const metadata: Metadata = {
  title: "À propos — Botani'K Afro",
};

const values = [
  {
    icon: "leaf",
    title: "Naturalité",
    text: "Des ingrédients bruts, tracés, sans compromis.",
  },
  {
    icon: "heart",
    title: "Bienveillance",
    text: "Chaque conseil part de votre histoire capillaire.",
  },
  {
    icon: "check",
    title: "Exigence",
    text: "Des formules testées, jamais approximatives.",
  },
  {
    icon: "chart",
    title: "Ancrage local",
    text: "Fabriqué au Cameroun, avec des filières locales.",
  },
] as const;

export default function AproposPage() {
  return (
    <>
      <Header active="apropos" />
      <main>
        <section className="page-hero" style={{ paddingBottom: 20 }}>
          <div className="container">
            <div className="eyebrow reveal">Notre histoire</div>
            <h1 className="reveal">
              Nées d&apos;une frustration,
              <br />
              devenues une conviction
            </h1>
          </div>
        </section>

        <section>
          <div className="container story-wrap">
            <div className="reveal">
              <p style={{ color: "var(--santal)", fontSize: 16, marginBottom: 24 }}>
                Botanik&apos;Afro est née en 2014 à Yaoundé, du constat que les
                cheveux texturés étaient mal compris — par les produits comme par
                les instituts. Depuis, nous formulons chaque soin avec des
                ingrédients africains, pour des textures africaines.
              </p>
              <div className="timeline">
                {timeline.map((item) => (
                  <div className="tl-item" key={item.year}>
                    <div className="tl-year">{item.year}</div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="story-img reveal">
              <Image
                alt="Fondatrice de Botani'K Afro"
                fill
                sizes="(max-width: 1080px) 420px, 50vw"
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=900&auto=format&fit=crop"
              />
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head center reveal">
              <div className="eyebrow" style={{ justifyContent: "center" }}>
                Nos valeurs
              </div>
              <h2>Ce qui guide chacune de nos décisions</h2>
            </div>
            <div className="valeurs-grid reveal-stagger">
              {values.map((value) => (
                <article className="valeur-card card" key={value.title}>
                  <div className="valeur-icon">
                    <Icon name={value.icon} size={22} />
                  </div>
                  <h4>{value.title}</h4>
                  <p style={{ color: "var(--santal)", fontSize: 13.5 }}>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mission-band">
          <div className="container reveal">
            <blockquote>
              « Nous ne cherchons pas à discipliner les cheveux africains. Nous
              cherchons à les comprendre — et à les révéler. »
            </blockquote>
            <cite>Notre philosophie</cite>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head center reveal">
              <div className="eyebrow" style={{ justifyContent: "center" }}>
                L&apos;équipe
              </div>
              <h2>Les mains derrière vos rituels</h2>
            </div>
            <div className="team-grid reveal-stagger">
              {team.map((member) => (
                <article className="team-card" key={member.name}>
                  <div className="team-photo">
                    <Image
                      alt={member.alt}
                      fill
                      sizes="(max-width: 720px) 50vw, (max-width: 1080px) 50vw, 25vw"
                      src={member.image}
                    />
                  </div>
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="cta-band reveal">
            <div>
              <h2>Venez rencontrer l&apos;équipe</h2>
              <p>Le premier diagnostic capillaire est toujours offert.</p>
            </div>
            <Link href="/rendezvous" className="btn btn-light">
              Prendre rendez-vous
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
