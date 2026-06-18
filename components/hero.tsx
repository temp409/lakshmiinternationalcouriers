import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="cloud cloud-left" />
      <div className="cloud cloud-right" />
      <div className="cloud cloud-mobile" />

      <div className="hero-copy">
        <h1>
          <span>Reliable Domestic &amp;</span>
          <span>International Courier</span>
          <span>Services</span>
        </h1>
        <p>
          Pickup, packing, and safe delivery of parcels, food items, gifts, and
          personal items across India and worldwide with end-to-end support.
        </p>

        <div className="hero-actions">
          <Link className="btn btn-dark" href="#contact">
            Contact Us
          </Link>
          <Link className="btn btn-light" href="#process">
            How it works
            <ChevronRight aria-hidden="true" size={18} strokeWidth={2.4} />
          </Link>
        </div>
      </div>

      <div className="hero-art-wrap" aria-label="Lakshmi courier packages and aircraft">
        <Image
          className="hero-art"
          src="/assets/lakshmi-hero-updated.jpeg"
          alt="Connecting distances, delivering trust with Lakshmi International Couriers"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1280px"
          priority
          quality={100}
          unoptimized
        />
      </div>
    </section>
  );
}
