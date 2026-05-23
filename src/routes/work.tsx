import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Building2, User } from "lucide-react";
import { projects } from "@/data/projects";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { MeshBackground } from "@/components/MeshBackground";
import { Nav } from "@/components/Nav";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected work — Vaibhav Masaye" },
      { name: "description", content: "A catalogue of work shipped by Vaibhav Masaye — Dignisys, Atomos, and personal builds." },
      { property: "og:title", content: "Selected work — Vaibhav Masaye" },
      { property: "og:description", content: "Company and personal projects, with case studies." },
    ],
  }),
  component: WorkPage,
});

const tabs = [
  { id: "all", label: "Everything", icon: null },
  { id: "company", label: "Company", icon: Building2 },
  { id: "personal", label: "Personal", icon: User },
] as const;

function WorkPage() {
  const [tab, setTab] = useState<typeof tabs[number]["id"]>("all");
  const filtered = projects.filter((p) => tab === "all" || p.category === tab);

  return (
    <>
      <Preloader />
      <CustomCursor />
      <MeshBackground />
      <Nav />
      <main className="relative pt-32 md:pt-40 pb-24">
        <section className="px-4 md:px-6 max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-teal mb-4">
                /// The archive
              </p>
              <h1 className="font-display font-bold tracking-[-0.045em] leading-[0.9] text-[clamp(3rem,9vw,8rem)]">
                Selected <span className="font-serif italic font-normal">work</span>.
              </h1>
              <p className="mt-6 max-w-xl text-muted-foreground text-base md:text-lg">
                A growing catalogue — company products I've shipped at Atomos and personal builds I've put my name on. Tap any to read the case study.
              </p>
            </div>
            <div className="pill p-1.5 flex items-center gap-1">
              {tabs.map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    data-cursor="hover"
                    onClick={() => setTab(t.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full inline-flex items-center gap-2 transition-colors ${
                      active ? "text-background" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="work-tab-pill"
                        className="absolute inset-0 bg-foreground rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {t.icon && <t.icon className="w-3.5 h-3.5 relative z-10" />}
                    <span className="relative z-10">{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  layout
                  key={p.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.04, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to="/work/$slug"
                    params={{ slug: p.slug }}
                    data-cursor="hover"
                    className="group block"
                  >
                    <div
                      className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-card"
                      style={{ background: p.cover }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: `radial-gradient(120% 80% at 0% 0%, ${p.accent}40, transparent 60%), radial-gradient(80% 60% at 100% 100%, ${p.accent}20, transparent 60%)`,
                        }}
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 1 }}
                      />
                      <div className="absolute inset-0 grain opacity-30 mix-blend-overlay" />
                      <div className="absolute top-5 left-5 flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">{p.n}</span>
                        <span className="text-white/40">/</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">{p.category}</span>
                      </div>
                      <div className="absolute top-5 right-5">
                        <motion.div
                          whileHover={{ rotate: 0, scale: 1.05 }}
                          initial={{ rotate: -45 }}
                          className="grid place-items-center w-11 h-11 rounded-full bg-white/15 backdrop-blur text-white border border-white/20"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                        <h3 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight leading-[0.95]">
                          {p.name}
                        </h3>
                        <p className="mt-2 text-white/70 text-sm max-w-md">{p.tagline}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between flex-wrap gap-3 px-1">
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.slice(0, 4).map((s) => (
                          <span key={s} className="text-[10px] font-mono px-2 py-1 rounded-full border border-border text-muted-foreground">
                            {s}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.year}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
