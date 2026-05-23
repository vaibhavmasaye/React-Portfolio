import { motion } from "motion/react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { MeshBackground } from "@/components/MeshBackground";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Marquee } from "@/components/Marquee";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaibhav Masaye — Full Stack Developer" },
      { name: "description", content: "Full Stack Developer at Atomos Technology — crafting useful, mindful web & mobile products. Currently building Dignisys." },
      { property: "og:title", content: "Vaibhav Masaye — Full Stack Developer" },
      { property: "og:description", content: "Portfolio of Vaibhav Masaye, Full Stack Developer based in India." },
    ],
  }),
  component: Index,
});

function Index() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <>
      <Preloader videoSrc="/hero.mp4" onComplete={() => setPreloaderComplete(true)} />
      <CustomCursor />
      <MeshBackground />
      <Nav />
      <motion.main
        className="relative"
        initial={{ opacity: 0 }}
        animate={preloaderComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        <Mission />
        <Marquee />
        <TechStack />
        <Projects />
        <Contact />
      </motion.main>
    </>
  );
}
