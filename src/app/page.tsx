import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Certificates from "@/components/sections/Certificates";
import AIShowcase from "@/components/sections/AIShowcase";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Projects />
        <AIShowcase />
        <Skills />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
