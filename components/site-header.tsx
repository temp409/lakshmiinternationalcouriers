"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "About us", href: "#about" }
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 1280) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" data-menu-open={menuOpen} data-scrolled={scrolled}>
      <div className="nav-shell">
        <Link
          className="brand-logo"
          href="#home"
          aria-label="Lakshmi International Couriers home"
          onClick={closeMenu}
        >
          <Image
            src="/assets/lakshmi-logo.png"
            alt="Lakshmi International Couriers"
            width={1713}
            height={624}
            priority
          />
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <Link className={index === 0 ? "is-active" : ""} href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="nav-cta" href="#contact">
          Contact US
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      <div className="mobile-menu" id="mobile-navigation" aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.label} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="mobile-menu-cta" href="#contact" onClick={closeMenu}>
          Contact Us
        </Link>
      </div>
    </header>
  );
}
