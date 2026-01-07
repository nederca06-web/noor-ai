import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Principles } from "@/components/Principles";
import { AiCompanion } from "@/components/AiCompanion";
import { Transparency } from "@/components/Transparency";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Principles />
        <AiCompanion />
        <Transparency />
      </main>
      <Footer />
    </div>
  );
}
