import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import "../styles/globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
