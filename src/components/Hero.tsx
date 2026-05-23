import { motion, type Variants } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import portrait from "@/assets/portrait.jpeg";
import { Figma, Linkedin, Github, Mail, Globe } from "lucide-react";
import { pageTransition } from "@/lib/animation";

const word: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { ...pageTransition, delay: 1.2 + i * 0.06 },
  }),
};

const headline = [["Hi,", "I'm", "a"], ["Full", "Stack"], ["Developer*"]];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] pt-28 md:pt-32 pb-24 px-4 md:px-6"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(49,143,170,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(170,128,255,0.12),_transparent_24%)]" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/35 to-background/95" />
      </div>

      <div className="absolute inset-x-0 top-16 -z-10 h-60 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_38%)]" />
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left — headline */}
        <div className="lg:col-span-7 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...pageTransition, delay: 1.1 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 shadow-sm"
            style={{ background: "rgba(71, 207, 230, 0.12)" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--teal-deep)] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--teal-deep)]" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-teal">
              Available for work
            </span>
          </motion.div>

          <h1 className="font-display font-bold leading-[0.88] tracking-[-0.06em] text-[clamp(3.5rem,8vw,7rem)] max-w-[14ch] md:max-w-[18ch]">
            {headline.map((row, ri) => (
              <span key={ri} className="block overflow-hidden">
                <span className="inline-flex flex-wrap gap-x-[0.22em]">
                  {row.map((w, i) => {
                    const idx = headline.slice(0, ri).flat().length + i;
                    const isSerif = ri === headline.length - 1; // italicize "Developer*"
                    return (
                      <motion.span
                        key={w + i}
                        variants={word}
                        initial="hidden"
                        animate="show"
                        custom={idx}
                        className={`inline-block ${isSerif ? "font-serif italic font-normal" : ""}`}
                      >
                        {w}
                      </motion.span>
                    );
                  })}
                </span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...pageTransition, delay: 1.9 }}
            className="mt-8 max-w-[680px] text-base md:text-lg text-muted-foreground leading-8"
          >
            I help startups and growing brands build polished digital products with clarity, speed,
            and strong technical foundations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...pageTransition, delay: 2.05 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton href="#contact">
              <span className="inline-flex items-center gap-3 rounded-md bg-foreground text-background px-8 py-4 text-sm font-medium shadow-soft">
                Contact me
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right — portrait */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...pageTransition, delay: 1.4 }}
            className="card-soft relative overflow-hidden rounded-[2.5rem] shadow-card aspect-[4/5]"
            data-cursor="hover"
          >
            <img
              src={portrait}
              alt="Vaibhav Masaye"
              width={800}
              height={960}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 z-10 rounded-lg border border-white/10 bg-white/85 p-5 backdrop-blur-xl shadow-soft">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Portrait</p>
              <h3 className="font-display text-2xl font-bold tracking-tight">Vaibhav M.</h3>
              <p className="mt-2 text-sm text-muted-foreground">Maharashtra, India</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-3 py-2 text-[10px] font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--lilac)]" /> REACT EXPERT
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...pageTransition, delay: 1.55 }}
            className="card-soft p-6 relative overflow-hidden rounded-[2.5rem] shadow-card"
            data-cursor="hover"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[var(--teal-soft)] opacity-70 blur-3xl" />
            <div className="absolute -bottom-12 left-0 h-36 w-36 rounded-full bg-[var(--lilac-soft)] opacity-60 blur-3xl" />
            <div className="relative z-10 grid gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Currently</p>
                <h3 className="font-display text-3xl font-bold tracking-tight">Building Dignisys</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Building trust at scale for enterprise teams with polished frontend experiences and solid architecture.
                </p>
                <div className="mt-6 grid gap-3 text-sm text-foreground sm:grid-cols-2">
                  <div className="rounded-lg border border-border bg-background px-4 py-3">
                    <p className="font-semibold">Focus</p>
                    <p className="text-muted-foreground">React, TypeScript, design systems</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background px-4 py-3">
                    <p className="font-semibold">Availability</p>
                    <p className="text-muted-foreground">Freelance & full-time inquiries welcome</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground mb-4">Trusted by</p>
                <div className="space-y-3 text-sm font-semibold text-foreground">
                  <p>Atomos</p>
                  <p>Dignisys</p>
                  <p>High-growth startups</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...pageTransition, delay: 1.7 }}
            className="card-soft p-6 rounded-[2.5rem] shadow-card"
            data-cursor="hover"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Let&apos;s connect</p>
                <h3 className="text-lg font-semibold text-foreground">Quick links for collaboration and updates.</h3>
              </div>
              <span className="inline-flex rounded-full bg-foreground/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-foreground">
                6 links
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  subtitle: "Email",
                  href: "mailto:masayevaibhav@gmail.com",
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  subtitle: "Connect",
                  href: "https://www.linkedin.com/in/vaibhav-masaye-244984179/",
                },
                {
                  icon: Github,
                  title: "Github",
                  subtitle: "Code",
                  href: "https://github.com/vaibhavmasaye",
                },
                {
                  icon: Globe,
                  title: "Portfolio",
                  subtitle: "Work",
                  href: "https://vaibhavmasaye.onrender.com/",
                },
                {
                  icon: Figma,
                  title: "Figma",
                  subtitle: "Design",
                  href: "#",
                },
                {
                  icon: () => <span className="font-display font-bold text-base">X</span>,
                  title: "X",
                  subtitle: "Updates",
                  href: "#",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-cursor="hover"
                  className="group flex flex-col items-center gap-3 rounded-3xl border border-border bg-background p-3 text-center text-xs font-medium text-foreground transition hover:border-foreground hover:bg-foreground/5"
                  aria-label={s.title}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-3xl bg-foreground/5 text-foreground transition group-hover:bg-foreground/10">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="tracking-[0.02em] text-sm font-semibold">{s.title}</span>
                  <span className="text-[11px] text-muted-foreground">{s.subtitle}</span>
                </a>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Design systems",
                "React architecture",
                "Performance-led UI",
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full border border-border bg-muted/10 px-3 py-2 text-[11px] font-medium text-foreground"
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
