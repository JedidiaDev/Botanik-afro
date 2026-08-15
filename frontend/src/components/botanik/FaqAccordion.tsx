"use client";

import { useState } from "react";
import type { FaqItem } from "@/config/botanik";

type FaqAccordionProps = {
  items: FaqItem[];
  initialOpen?: number;
};

export default function FaqAccordion({ items, initialOpen = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpen);

  return (
    <>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.question}>
            <button
              className="faq-q"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              {item.question}
              <span className="faq-plus" />
            </button>
            <div className="faq-a" style={{ maxHeight: isOpen ? 240 : 0 }}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
