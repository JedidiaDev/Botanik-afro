"use client";

import { useMemo, useState } from "react";
import FaqAccordion from "./FaqAccordion";
import { faqGroups, type FaqGroup } from "@/config/botanik";

const tabs: { label: string; value: "all" | FaqGroup["id"] }[] = [
  { label: "Toutes", value: "all" },
  { label: "Général", value: "general" },
  { label: "Produits", value: "produits" },
  { label: "Rendez-vous", value: "rdv" },
  { label: "Livraison & paiement", value: "livraison" },
];

export default function FaqExperience() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["value"]>("all");
  const [query, setQuery] = useState("");

  const visibleGroups = useMemo(() => {
    const term = query.trim().toLowerCase();

    return faqGroups
      .filter((group) => activeTab === "all" || group.id === activeTab)
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => {
          if (!term) return true;
          return `${item.question} ${item.answer}`.toLowerCase().includes(term);
        }),
      }))
      .filter((group) => group.items.length > 0);
  }, [activeTab, query]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow reveal">Centre d&apos;aide</div>
          <h1 className="reveal">Toutes les réponses à vos questions</h1>
          <p className="reveal">
            Rituels, rendez-vous, livraison, paiement — retrouvez tout ce qu&apos;il
            faut savoir avant de nous rejoindre.
          </p>
          <div className="faq-search reveal">
            <span>🔍</span>
            <input
              onChange={(event) => {
                setQuery(event.target.value);
                if (event.target.value) setActiveTab("all");
              }}
              placeholder="Rechercher une question… (ex. livraison, annulation, texture)"
              type="text"
              value={query}
            />
          </div>
          <div className="faq-tabs reveal">
            {tabs.map((tab) => (
              <button
                className={`faq-tab ${activeTab === tab.value ? "active" : ""}`}
                key={tab.value}
                onClick={() => {
                  setActiveTab(tab.value);
                  setQuery("");
                }}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="faq-wrap">
            <p className={`faq-no-result ${visibleGroups.length === 0 ? "show" : ""}`}>
              Aucune question ne correspond à votre recherche. Essayez un autre
              mot-clé, ou{" "}
              <a href="/contact" style={{ color: "var(--vert)", fontWeight: 700 }}>
                contactez-nous directement
              </a>
              .
            </p>

            {visibleGroups.map((group) => (
              <div className="faq-group" key={group.id}>
                <div className="faq-group-title reveal">{group.title}</div>
                <FaqAccordion items={group.items} initialOpen={group.id === "general" ? 0 : -1} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
