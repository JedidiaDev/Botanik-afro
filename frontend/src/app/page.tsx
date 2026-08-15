import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/common/Counter";
import FaqAccordion from "@/components/botanik/FaqAccordion";
import Icon from "@/components/botanik/Icons";
import ProductCard from "@/components/botanik/ProductCard";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { homeCareRows, homeFaqs, homeProducts, testimonials } from "@/config/botanik";

const advantages = [
  {
    icon: "leaf",
    title: "100% botanique",
    text: "Karité, hibiscus, moringa et huile de baobab — sourcés auprès de coopératives ouest-africaines.",
  },
  {
    icon: "clock",
    title: "Diagnostic sur-mesure",
    text: "Chaque rituel est ajusté à votre densité, votre porosité et votre courbe de boucle.",
  },
  {
    icon: "arrow-left",
    title: "Réservation instantanée",
    text: "Un créneau disponible en moins de 3 clics, confirmé immédiatement par SMS et email.",
  },
  {
    icon: "check",
    title: "Sans sulfates ni silicones",
    text: "Des formules courtes, transparentes, dermatologiquement testées sur cheveux texturés.",
  },
  {
    icon: "heart",
    title: "Accompagnement continu",
    text: "Suivi personnalisé entre les rendez-vous par notre équipe de spécialistes capillaires.",
  },
  {
    icon: "calendar",
    title: "Flexibilité totale",
    text: "Reportez ou modifiez votre rendez-vous en un clic, jusqu'à 24h avant.",
  },
] as const;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">Soins capillaires naturels</div>
              <h1>
                Vos boucles ont
                <br />
                une <em>mémoire</em>.
                <br />
                Nous la révélons.
              </h1>
              <p className="lead">
                Des rituels formulés à partir de plantes africaines pour hydrater,
                fortifier et sublimer chaque texture — de la boucle lâche au cheveu
                très crépu.
              </p>
              <div className="hero-ctas">
                <Link href="/rendezvous" className="btn btn-primary">
                  Prendre rendez-vous
                </Link>
                <Link href="/services" className="btn btn-ghost">
                  Découvrir nos soins
                </Link>
              </div>
              <div className="hero-trust">
                <div className="trust-item">
                  <strong>
                    12
                    <Counter value={12} />
                  </strong>
                  <span>Ans d&apos;expertise</span>
                </div>
                <div className="trust-item">
                  <strong>
                    <Counter value={4800} />
                  </strong>
                  <span>Client·es accompagné·es</span>
                </div>
                <div className="trust-item">
                  <strong>
                    <Counter value={98} />
                  </strong>
                  <span>% d&apos;ingrédients naturels</span>
                </div>
              </div>
            </div>
            <div className="hero-visual reveal">
              <div className="hero-blob">
                <Image
                  alt="Femme au sourire radieux et cheveux naturels sublimés"
                  fill
                  priority
                  sizes="(max-width: 1080px) 440px, 46vw"
                  src="/images/img5.jpg"
                />
              </div>
              <div className="hero-badge-top">
                <span>
                  Fait main
                  <br />
                  au Cameroun
                </span>
              </div>
              <div className="hero-float-card">
                <div className="dot">✓</div>
                <div>
                  <p>Diagnostic capillaire offert</p>
                  <span>À votre 1er rendez-vous</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <svg className="growth-line reveal" preserveAspectRatio="none" viewBox="0 0 1200 80">
          <path d="M0 40 C 150 10, 250 70, 400 40 S 650 10, 800 40 S 1050 70, 1200 40" />
        </svg>

        <div className="stats-band">
          <div className="container stats-grid reveal-stagger">
            <div className="stat">
              <strong>
                <Counter value={4800} />
              </strong>
              <span>CLIENT·ES FIDÈLES</span>
            </div>
            <div className="stat">
              <strong>
                <Counter value={60} />
              </strong>
              <span>PRODUITS ARTISANAUX</span>
            </div>
            <div className="stat">
              <strong>
                <Counter value={15} />
              </strong>
              <span>PROFESSIONNEL·LES DIPLÔMÉ·ES</span>
            </div>
            <div className="stat">
              <strong>
                <Counter value={98} />
              </strong>
              <span>% SATISFACTION</span>
            </div>
          </div>
        </div>

        <section id="avantages">
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">Pourquoi Botani&apos;K Afro</div>
              <h2>Une approche qui respecte chaque texture</h2>
            </div>
            <div className="avantages-grid reveal-stagger">
              {advantages.map((advantage) => (
                <article className="avantage-card" key={advantage.title}>
                  <div className="avantage-icon">
                    <Icon name={advantage.icon} />
                  </div>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="produits" className="produits-bg">
          <div className="container">
            <div
              className="section-head reveal"
              style={{
                alignItems: "flex-end",
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
                justifyContent: "space-between",
                maxWidth: "100%",
              }}
            >
              <div>
                <div className="eyebrow">Boutique</div>
                <h2>Nos best-sellers</h2>
              </div>
              <Link href="/produits" className="btn btn-ghost btn-sm">
                Voir tous les produits
              </Link>
            </div>
            <div className="produits-grid reveal-stagger">
              {homeProducts.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section id="soins">
          <div className="container">
            <div className="soins-wrap">
              <div>
                <div className="eyebrow reveal">En institut</div>
                <h2
                  className="reveal"
                  style={{ fontSize: "clamp(28px,3.4vw,40px)", marginBottom: 34 }}
                >
                  Des soins pensés pour chaque étape de votre parcours capillaire
                </h2>
                <div className="soins-list reveal-stagger">
                  {homeCareRows.map((row) => (
                    <div className="soin-row" key={row.number}>
                      <div className="soin-left">
                        <span className="soin-num">{row.number}</span>
                        <div>
                          <h3>{row.title}</h3>
                          <span className="soin-meta">{row.meta}</span>
                        </div>
                      </div>
                      <div className="soin-arrow">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M2 7h10M8 3l4 4-4 4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/services" className="btn btn-primary reveal" style={{ marginTop: 36 }}>
                  Voir tous les soins
                </Link>
              </div>
              <div className="soins-image reveal">
                <Image
                  alt="Soin capillaire en institut"
                  fill
                  sizes="(max-width: 1080px) 420px, 54vw"
                  src="/images/img2.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="temoignages" className="temoi-bg">
          <div className="container">
            <div className="section-head center reveal">
              <div className="eyebrow" style={{ justifyContent: "center" }}>
                Témoignages
              </div>
              <h2>Elles ont retrouvé confiance en leurs boucles</h2>
            </div>
            <div className="temoi-track reveal-stagger">
              {testimonials.map((testimonial) => (
                <article className="temoi-card" key={testimonial.name}>
                  <div className="temoi-stars">★★★★★</div>
                  <p className="quote">&quot;{testimonial.quote}&quot;</p>
                  <div className="temoi-author">
                    <div className="temoi-avatar">
                      <Image alt="" height={44} src={testimonial.image} width={44} />
                    </div>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.meta}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="container">
            <div className="section-head center reveal">
              <div className="eyebrow" style={{ justifyContent: "center" }}>
                Questions fréquentes
              </div>
              <h2>Tout ce qu&apos;il faut savoir</h2>
            </div>
            <div className="faq-wrap reveal">
              <FaqAccordion items={homeFaqs} />
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="cta-band reveal">
            <div>
              <h2>Prête à révéler la mémoire de vos boucles ?</h2>
              <p>Réservez votre diagnostic capillaire offert en moins de 3 clics.</p>
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
