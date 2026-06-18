import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Globe2,
  Home,
  Mail,
  MapPin,
  PackageCheck,
  Plane,
  PhoneCall,
  Route,
  Star,
  Truck
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Doorstep Pickup",
    copy: "Schedule a pickup from your home, office, or store with parcel details captured before dispatch."
  },
  {
    icon: PackageCheck,
    title: "Secure Packing",
    copy: "Protective packing for documents, gifts, food items, samples, and fragile parcels."
  },
  {
    icon: Plane,
    title: "International Shipping",
    copy: "Reliable export handling for personal and commercial shipments across major global routes."
  },
  {
    icon: Route,
    title: "Real-Time Tracking",
    copy: "Shipment milestones, route updates, and delivery confirmation from pickup to handover."
  }
];

const reasons = [
  "Transparent support before and after booking",
  "Careful handling for food, gifts, and personal items",
  "Trusted partner networks for long-distance delivery",
  "Packing guidance matched to shipment type",
  "Clear documentation for international parcels",
  "Fast response for urgent courier requirements"
];

const timeline = [
  {
    icon: ClipboardCheck,
    title: "Book",
    copy: "Share pickup address, delivery destination, parcel type, and preferred timing."
  },
  {
    icon: Boxes,
    title: "Pack",
    copy: "We verify details, advise the right packing method, and secure the parcel for transit."
  },
  {
    icon: Truck,
    title: "Move",
    copy: "Your shipment enters the selected domestic or international courier network."
  },
  {
    icon: BadgeCheck,
    title: "Deliver",
    copy: "Tracking stays active until final delivery is completed and confirmed."
  }
];

const benefits = [
  { value: "24/7", label: "Shipment guidance" },
  { value: "180+", label: "Country routes" },
  { value: "5-step", label: "Care process" },
  { value: "100%", label: "Parcel visibility" }
];

const testimonials = [
  {
    quote:
      "They were really helpful, and the whole process was simple and easy from pickup to delivery.",
    name: "Priya N.",
    label: "Family courier shipment"
  },
  {
    quote:
      "The delivery was fast and the service was very good. Everything was clear and easy to follow.",
    name: "Arun K.",
    label: "Family courier shipment"
  },
  {
    quote:
      "They packed everything carefully and with patience. They were polite, helpful, and the parcel reached safely.",
    name: "Meera S.",
    label: "Family courier shipment"
  }
];

const faqs = [
  {
    question: "Can I book a pickup from home?",
    answer:
      "Yes. Lakshmi International Couriers can arrange doorstep pickup after confirming your parcel details, pickup address, and delivery destination."
  },
  {
    question: "Do you help with packing?",
    answer:
      "Yes. We provide packing support and guidance for gifts, food items, documents, fragile parcels, and commercial shipments."
  },
  {
    question: "Can I track an international shipment?",
    answer:
      "Yes. Tracking details are shared after booking and updated through the courier network until delivery is complete."
  },
  {
    question: "What details are needed for international courier?",
    answer:
      "Destination address, receiver contact details, parcel contents, approximate value, weight, and any invoice or identification requirements."
  }
];

const contactDetails = [
  {
    icon: PhoneCall,
    label: "Phone",
    value: "+91 86868 56254",
    href: "tel:+918686856254"
  },
  {
    icon: PhoneCall,
    label: "Phone",
    value: "+91 98487 10109",
    href: "tel:+919848710109"
  },
  {
    icon: Mail,
    label: "Email",
    value: "lakshmiinternationalcouriers.in@gmail.com",
    href: "mailto:lakshmiinternationalcouriers.in@gmail.com"
  }
];

export function PartnerStrip() {
  return (
    <section className="partner-section" aria-label="Courier partner network">
      <div className="partner-fade">
        <div className="partner-marquee">
          {[0, 1, 2].map((item) => (
            <Image
              src="/assets/partner-logos-strip.png"
              alt="FedEx, UPS, DHL, Atlantic and courier partner logos"
              width={2750}
              height={227}
              sizes="1500px"
              priority
              unoptimized
              key={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <div className="section-container">
        <h2 className="section-title reveal">
          <span>From Pickup to Delivery We</span>
          <span>Care for Every Parcel</span>
        </h2>
        <div className="process-image reveal">
          <Image
            src="/assets/process-cycle.png"
            alt="Five step courier process from booking pickup to tracking and delivery"
            width={1254}
            height={1254}
            sizes="(max-width: 768px) 94vw, 850px"
          />
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="wide-container service-grid">
        <div className="service-panel reveal">
          <div className="mini-window courier-window">
            <div className="window-top">
              <div>
                <span />
                <span />
                <span />
              </div>
              <small>Live shipment desk</small>
            </div>

            <div className="courier-window-body">
              <div className="hub-card">
                <div>
                  <small>Pickup hub</small>
                  <strong>Hyderabad Dispatch</strong>
                  <span>Doorstep pickup scheduled</span>
                </div>
                <Truck aria-hidden="true" size={34} strokeWidth={2.1} />
              </div>

              <div className="courier-route" aria-hidden="true">
                <span className="route-stop active">
                  <MapPin size={18} />
                </span>
                <i>
                  <Plane size={24} />
                </i>
                <span className="route-stop">
                  <PackageCheck size={18} />
                </span>
              </div>

              <div className="courier-status-grid">
                <div>
                  <small>Packing</small>
                  <strong>Verified</strong>
                </div>
                <div>
                  <small>Tracking</small>
                  <strong>Live</strong>
                </div>
              </div>

              <div className="courier-summary-card">
                <div>
                  <strong>Food, gifts &amp; documents</strong>
                  <small>India and worldwide courier support</small>
                </div>
                <b>Ready</b>
              </div>
            </div>
          </div>
        </div>

        <div className="section-copy reveal">
          <span className="eyebrow">Courier services</span>
          <h2>Built for every parcel that needs extra care</h2>
          <p>
            From a single family package to recurring business dispatches, Lakshmi
            International Couriers keeps pickup, packing, shipping, and delivery
            support in one clear flow.
          </p>
        </div>

        <div className="cards-grid services-cards">
          {services.map((service) => (
            <article className="feature-card reveal" key={service.title}>
              <service.icon aria-hidden="true" size={28} strokeWidth={2.2} />
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section className="why-section">
      <div className="section-container split-layout">
        <div className="section-copy reveal">
          <span className="eyebrow">Why choose us</span>
          <h2>Reliable support before the parcel leaves and after it lands</h2>
          <p>
            Courier work is only simple when the details are handled carefully.
            Our team keeps the process clear, checks shipment needs early, and
            stays reachable while the parcel moves.
          </p>
          <Link className="text-link" href="#contact">
            Talk to our team
            <ChevronRight aria-hidden="true" size={19} />
          </Link>
        </div>

        <div className="reason-list reveal">
          {reasons.map((reason) => (
            <div className="reason-item" key={reason}>
              <CheckCircle2 aria-hidden="true" size={22} />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="wide-container about-panel reveal">
        <div>
          <span className="eyebrow">About Lakshmi</span>
          <h2>Connecting distances with careful, human courier service</h2>
        </div>
        <p>
          Lakshmi International Couriers helps families, professionals, and growing
          businesses send parcels across India and worldwide. We combine doorstep
          pickup, practical packing support, international courier coordination,
          and responsive communication so every parcel receives attention from
          booking to final delivery.
        </p>
      </div>
    </section>
  );
}

export function CoverageSection() {
  return (
    <section className="coverage-section">
      <div className="section-container coverage-layout">
        <div className="coverage-map reveal" aria-hidden="true">
          <div className="map-glow" />
          <Image
            className="world-map"
            src="/assets/world-map.svg"
            alt=""
            width={997}
            height={515}
          />
          <span className="pin pin-a"><MapPin size={30} fill="currentColor" /></span>
          <span className="pin pin-b"><MapPin size={24} fill="currentColor" /></span>
          <span className="pin pin-c"><MapPin size={26} fill="currentColor" /></span>
          <span className="pin pin-d"><MapPin size={22} fill="currentColor" /></span>
          <div className="plane-route">
            <Plane size={38} fill="currentColor" />
          </div>
        </div>

        <div className="section-copy reveal">
          <span className="eyebrow">International coverage</span>
          <h2>Domestic reach and global courier routes from one team</h2>
          <p>
            Send parcels across India or to major international destinations with
            route guidance, packing checks, documentation support, and partner
            courier coordination.
          </p>
          <div className="coverage-tags">
            <span>India</span>
            <span>UAE</span>
            <span>Singapore</span>
            <span>USA</span>
            <span>UK</span>
            <span>Australia</span>
            <span>And more</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DeliverySection() {
  return (
    <section className="delivery-section">
      <div className="section-container">
        <div className="section-heading reveal">
          <span className="eyebrow">Delivery process</span>
          <h2>Simple steps, carefully managed</h2>
        </div>

        <div className="timeline">
          {timeline.map((step, index) => (
            <article className="timeline-card reveal" key={step.title}>
              <span className="timeline-number">{index + 1}</span>
              <step.icon aria-hidden="true" size={28} />
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="wide-container benefits-panel reveal">
        <div className="benefit-copy">
          <span className="eyebrow">Customer benefits</span>
          <h2>Clear updates, safer handling, and support that stays close</h2>
        </div>

        <div className="benefit-stats">
          {benefits.map((benefit) => (
            <div className="stat-card" key={benefit.label}>
              <strong>{benefit.value}</strong>
              <span>{benefit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="section-heading reveal">
          <span className="eyebrow">Testimonials</span>
          <h2>Trusted by families and businesses</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card reveal" key={testimonial.name}>
              <div className="stars" aria-label="Five star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>
              <p>“{testimonial.quote}”</p>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="faq-section">
      <div className="section-container faq-layout">
        <div className="section-copy reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Questions before you send a parcel?</h2>
          <p>
            Here are the most common details customers ask about before booking
            pickup, packing, and international delivery.
          </p>
        </div>

        <div className="faq-list reveal">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="wide-container contact-panel reveal">
        <div className="contact-copy">
          <span className="eyebrow">Contact</span>
          <h2>Ready to send your next parcel?</h2>
          <p>
            Share where your parcel needs to go and our team will help with pickup,
            packing, courier route, and tracking details.
          </p>
        </div>

        <div className="contact-side">
          <div className="contact-details" aria-label="Lakshmi International Couriers contact details">
            {contactDetails.map((detail) => {
              const content = (
                <>
                  <detail.icon aria-hidden="true" size={22} />
                  <span>
                    <small>{detail.label}</small>
                    <strong>{detail.value}</strong>
                  </span>
                </>
              );

              return detail.href ? (
                <Link className="contact-detail" href={detail.href} key={detail.value}>
                  {content}
                </Link>
              ) : (
                <div className="contact-detail" key={detail.value}>
                  {content}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wide-container footer-grid">
        <div>
          <Image
            className="footer-logo"
            src="/assets/lakshmi-logo.png"
            alt="Lakshmi International Couriers"
            width={1713}
            height={624}
          />
          <p>
            Domestic and international courier support with pickup, packing,
            tracking, and careful delivery coordination.
          </p>
        </div>

        <div>
          <h3>Services</h3>
          <Link href="#services">Doorstep pickup</Link>
          <Link href="#services">Secure packing</Link>
          <Link href="#services">International shipping</Link>
          <Link href="#process">Shipment tracking</Link>
        </div>

        <div>
          <h3>Company</h3>
          <Link href="#about">About us</Link>
          <Link href="#process">How it works</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#home">Home</Link>
        </div>

        <div>
          <h3>Reach us</h3>
          <Link href="tel:+918686856254">
            <PhoneCall size={18} />
            <span className="footer-link-text">+91 86868 56254</span>
          </Link>
          <Link href="tel:+919848710109">
            <PhoneCall size={18} />
            <span className="footer-link-text">+91 98487 10109</span>
          </Link>
          <Link href="mailto:lakshmiinternationalcouriers.in@gmail.com">
            <Mail size={18} />
            <span className="footer-link-text">lakshmiinternationalcouriers.in@gmail.com</span>
          </Link>
          <span className="footer-line">
            <Globe2 size={18} />
            <span className="footer-link-text">India and worldwide</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
