"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "About us", href: "#about" }
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="nav-shell">
        <Link className="brand-logo" href="#home" aria-label="Lakshmi International Couriers home">
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
      </div>
    </header>
  );
}
