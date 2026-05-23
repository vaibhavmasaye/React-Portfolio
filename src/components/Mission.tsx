import { motion } from "motion/react";
import { Reveal } from "./Reveal";

export function Mission() {
  return (
    <section id="about" className="px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-[1240px] mx-auto rounded-[2.5rem] gradient-teal text-white px-6 md:px-12 lg:px-16 py-16 md:py-24 relative overflow-hidden shadow-soft">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-[var(--lilac)]/20 blur-3xl" />

        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/60 mb-6">(My mission)</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display font-bold tracking-[-0.04em] leading-[1.05] text-[clamp(2.25rem,5vw,4.8rem)] max-w-[22ch]">
            My mission is to assist startups and enterprises in{" "}
            <span className="text-white/50">crafting digital products that feel inevitable.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 grid md:grid-cols-3 gap-8 max-w-3xl text-sm text-white/80">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Based in</p>
              <p className="text-white">India · remote-first</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Currently</p>
              <p className="text-white">Building Dignisys @ Atomos</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2">Open to</p>
              <p className="text-white">Full-time, freelance, collabs</p>
            </div>
          </div>
        </Reveal>

        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-8 right-8 w-24 h-24 hidden md:block"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/40">
            <defs>
              <path id="circ" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
            </defs>
            <text className="fill-current text-[10px] font-mono tracking-[0.2em]">
              <textPath href="#circ">VAIBHAV MASAYE · AVAILABLE FOR WORK · </textPath>
            </text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
