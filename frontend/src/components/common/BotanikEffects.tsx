"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BotanikEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-stagger, .growth-line",
    );

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
