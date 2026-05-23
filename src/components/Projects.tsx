import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { projects } from "@/data/projects";
import { pageTransition } from "@/lib/animation";

export function Projects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="work" className="relative px-4 md:px-6 py-28 max-w-[1280px] mx-auto">
      <Reveal>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-bold tracking-[-0.045em] leading-[0.92] text-[clamp(2.5rem,7vw,6rem)]">
              Things I've <span className="font-serif italic font-normal">shipped</span>.
            </h2>
          </div>
          <Link
            to="/work"
            data-cursor="hover"
            className="group inline-flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-foreground hover:text-background hover:border-foreground transition-colors"
          >
            See the full archive
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              data-cursor="hover"
              className="group block"
            >
              <div
                className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-card"
                style={{ background: p.cover }}
              >
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-70"
                  style={{
                    background: `radial-gradient(120% 80% at 0% 0%, ${p.accent}50, transparent 60%), radial-gradient(80% 60% at 100% 100%, ${p.accent}30, transparent 60%)`,
                  }}
                />
                <div className="absolute inset-0 grain opacity-30 mix-blend-overlay" />
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">{p.n} · {p.category}</span>
                  <motion.div
                    whileHover={{ rotate: 0, scale: 1.05 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    initial={{ rotate: -45 }}
                    className="grid place-items-center w-10 h-10 rounded-full bg-white/15 backdrop-blur text-white border border-white/20"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-bold text-white text-2xl md:text-3xl tracking-tight leading-[0.95]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-white/70 text-sm">{p.tagline}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between px-1 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                <span>{p.stack.slice(0, 2).join(" · ")}</span>
                <span>{p.year}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
