"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/config/botanik";

const filters = [
  "Tous les soins",
  "Diagnostic",
  "Hydratation",
  "Soins profonds",
  "Traitements",
  "Massage",
  "Coiffure protectrice",
];

export default function ServicesExperience() {
  const [active, setActive] = useState(filters[0]);

  return (
    <>
      <div className="filters-bar reveal">
        {filters.map((filter) => (
          <button
            className={`filter-chip ${active === filter ? "active" : ""}`}
            key={filter}
            onClick={() => setActive(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="services-grid reveal-stagger">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </>
  );
}
