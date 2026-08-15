import Link from "next/link";
import type { Metadata } from "next";
import FaqExperience from "@/components/botanik/FaqExperience";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "FAQ — Botani'K Afro",
};

export default function FaqPage() {
  return (
    <>
      <Header active="faq" />
      <main>
        <FaqExperience />
        <section>
          <div className="cta-band reveal">
            <div>
              <h2>Une autre question ?</h2>
              <p>Notre équipe répond en moins de 24h, du lundi au samedi.</p>
            </div>
            <Link href="/contact" className="btn btn-light">
              Contacter l&apos;équipe
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
