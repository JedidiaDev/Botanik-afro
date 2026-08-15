import type { Metadata } from "next";
import ShopExperience from "@/components/botanik/ShopExperience";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Boutique — Botanik'Afro",
};

export default function ProduitsPage() {
  return (
    <>
      <Header active="produits" />
      <main>
        <section className="page-hero" style={{ paddingBottom: 40 }}>
          <div className="container">
            <div className="eyebrow reveal">Boutique</div>
            <h1 className="reveal">Des rituels naturels pour chaque texture</h1>
          </div>
        </section>

        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <ShopExperience />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
