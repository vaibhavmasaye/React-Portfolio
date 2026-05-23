import { Reveal } from "./Reveal";
import { motion } from "motion/react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiGraphql, SiRedis,
  SiFlutter, SiDart, SiPython, SiDocker, SiVercel, SiGit, SiGithub, SiFigma,
  SiAngular,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

type Tech = { name: string; icon: IconType; color: string };

const groups: { title: string; items: Tech[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#111" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#111" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Postgres", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Mobile & Cloud",
    items: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#111" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#111" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="relative px-4 md:px-6 py-28 max-w-[1240px] mx-auto">
      <Reveal>
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-teal mb-3">// 01 · Tech stack</p>
            <h2 className="font-display font-bold tracking-[-0.04em] leading-[0.95] text-[clamp(2.5rem,7vw,6rem)]">
              Tools I use to <br /><span className="text-gradient">ship things</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-base">
            Three years deep in the JavaScript ecosystem — currently learning Flutter and going deeper on cloud infra.
          </p>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-5">
        {groups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.1}>
            <div className="card-soft p-7 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-xl tracking-tight">{g.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {String(gi + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {g.items.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <motion.div
                      key={t.name}
                      data-cursor="hover"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -4 }}
                      className="group aspect-square rounded-2xl border border-border bg-background grid place-items-center relative overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity"
                        style={{ background: t.color }}
                      />
                      <Icon className="w-7 h-7 transition-transform group-hover:scale-110" style={{ color: t.color }} />
                      <span className="absolute bottom-1 left-0 right-0 text-center text-[9px] font-mono opacity-0 group-hover:opacity-70 transition-opacity">
                        {t.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
