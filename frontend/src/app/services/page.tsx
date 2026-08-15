import Link from "next/link";
import type { Metadata } from "next";
import ServicesExperience from "@/components/botanik/ServicesExperience";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Nos Soins — Botanik'Afro",
};

export default function ServicesPage() {
  return (
    <>
      <Header active="services" />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="eyebrow reveal">Nos prestations</div>
            <h1 className="reveal">Des soins pour chaque besoin capillaire</h1>
            <p className="reveal">
              Diagnostic, hydratation, traitement, coiffure — chaque prestation est
              réalisée par un·e spécialiste des cheveux texturés.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <ServicesExperience />
          </div>
        </section>

        <section>
          <div className="cta-band reveal">
            <div>
              <h2>Pas sûre du soin idéal ?</h2>
              <p>Commencez par un diagnostic capillaire offert, nous vous orientons ensuite.</p>
            </div>
            <Link href="/rendezvous" className="btn btn-light">
              Réserver mon diagnostic
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
