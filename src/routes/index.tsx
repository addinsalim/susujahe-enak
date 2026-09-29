import { createFileRoute } from "@tanstack/react-router";

import { LanguageProvider } from "@/i18n/LanguageProvider";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Highlights } from "@/components/site/Highlights";
import { About } from "@/components/site/About";
import { Benefits } from "@/components/site/Benefits";
import { Ingredients } from "@/components/site/Ingredients";
import { Product } from "@/components/site/Product";
import { Gallery } from "@/components/site/Gallery";
import { HowTo } from "@/components/site/HowTo";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

const title = "Seribu Rempah, Seribu Manfaat | Susu Jahe Sehat & Nikmat";
const description =
  "Nikmati susu jahe dengan perpaduan rasa susu yang lembut dan jahe yang hangat. Temukan produk Seribu Rempah dan pesan dengan mudah melalui WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content: "susu jahe, minuman rempah, seribu rempah, minuman hangat, jahe susu, pesan whatsapp",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Benefits />
        <Ingredients />
        <Product />
        <Gallery />
        <HowTo />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </LanguageProvider>
  );
}
