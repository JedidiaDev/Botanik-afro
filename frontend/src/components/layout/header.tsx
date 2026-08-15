"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type HeaderProps = {
  active?: "produits" | "services" | "apropos" | "faq" | "contact" | "rendezvous";
  showFaq?: boolean;
};

const navItems = [
  { key: "produits", label: "Produits", href: "/produits" },
  { key: "services", label: "Soins", href: "/services" },
  { key: "apropos", label: "À propos", href: "/apropos" },
  { key: "faq", label: "FAQ", href: "/faq" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

function Logo({ gold = false }: { gold?: boolean }) {
  return (
    <Link href="/" className="logo">
      <Image
        alt="Botanik'Afro"
        className="logo-image"
        height={46}
        priority={!gold}
        src="/images/logo.jpg"
        width={46}
      />
      BOTANIK&apos; AFRO
    </Link>
  );
}

export function BotanikLogo({ gold = false }: { gold?: boolean }) {
  return <Logo gold={gold} />;
}

export default function Header({ active, showFaq = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const visibleItems = navItems.filter((item) => showFaq || item.key !== "faq");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`} id="siteHeader">
      <div className="container">
        <nav className="site-nav">
          <Logo />
          <div className="nav-links">
            {visibleItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={active === item.key ? "active" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="nav-cta">
            <Link
              href="/rendezvous"
              className={`btn btn-primary btn-sm ${active === "rendezvous" ? "active" : ""}`}
            >
              Prendre rendez-vous
            </Link>
            <button
              aria-label="Menu"
              className="mobile-toggle"
              onClick={() => setMobileOpen((value) => !value)}
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M2 4h14M2 9h14M2 14h14"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.6"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <nav className={`mobile-panel ${mobileOpen ? "open" : ""}`}>
        {visibleItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={active === item.key ? "active" : undefined}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/rendezvous"
          className={active === "rendezvous" ? "active" : undefined}
          onClick={() => setMobileOpen(false)}
        >
          Prendre rendez-vous
        </Link>
      </nav>
    </header>
  );
}
