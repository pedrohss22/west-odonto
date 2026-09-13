import React from "react";
import Header from "@/components/west/Header";
import Hero from "@/components/west/Hero";
import Services from "@/components/west/Services";
import About from "@/components/west/About";
import Reviews from "@/components/west/Reviews";
import Gallery from "@/components/west/Gallery";
import FAQ from "@/components/west/FAQ";
import Contact from "@/components/west/Contact";
import Footer from "@/components/west/Footer";
import StickyMobileNav from "@/components/west/StickyMobileNav";

export default function Home() {
  return (
    <div className="relative bg-[#F8FAFC] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyMobileNav />
    </div>
  );
}