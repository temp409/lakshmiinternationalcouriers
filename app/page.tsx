import { Hero } from "@/components/hero";
import {
  AboutSection,
  BenefitsSection,
  ContactSection,
  CoverageSection,
  DeliverySection,
  FaqSection,
  Footer,
  PartnerStrip,
  ProcessSection,
  ServicesSection,
  TestimonialsSection,
  WhyChooseSection
} from "@/components/sections";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PartnerStrip />
        <ProcessSection />
        <ServicesSection />
        <WhyChooseSection />
        <AboutSection />
        <CoverageSection />
        <DeliverySection />
        <BenefitsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
