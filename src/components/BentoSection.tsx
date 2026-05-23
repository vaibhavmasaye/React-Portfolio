import { Reveal } from "./Reveal";
import { Code2, Database, Smartphone, Cloud, Rocket, MapPin, Mail, Github, Zap } from "lucide-react";
import { motion } from "motion/react";

const stack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  Backend: ["Node.js", "Express", "REST", "GraphQL"],
  Database: ["MongoDB", "Postgres", "Redis"],
  Mobile: ["Flutter", "React Native"],
  Cloud: ["AWS", "Docker", "Vercel"],
};

export function BentoSection() {
  return (
    <section id="stack" className="relative px-6 py-32 max-w-7xl mx-auto">
      <Reveal>
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-3">// 01 · About</p>
            <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-tight max-w-2xl">
              A snapshot of <span className="text-gradient">who I am</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Engineer at Atomos Technology, turning complex problems into simple, beautiful solutions across web, mobile and cloud.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[180px] gap-4">
        {/* Big intro */}
        <Reveal className="md:col-span-4 md:row-span-2">
          <div className="h-full card-soft rounded-lg p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="relative">
              <p className="text-xs font-mono text-muted-foreground mb-3">currently_building</p>
              <h3 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Dignisys — <span className="text-muted-foreground">a platform engineered for trust & scale.</span>
              </h3>
            </div>
            <div className="relative flex items-center gap-3 text-sm text-muted-foreground">
              <Rocket className="w-4 h-4 text-primary" />
              Expanding into DevOps & infra
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className="h-full card-soft rounded-lg p-6 flex flex-col justify-between">
            <Code2 className="w-6 h-6 text-primary" />
            <div>
              <p className="text-3xl font-display font-semibold">3+ yrs</p>
              <p className="text-sm text-muted-foreground">shipping production code</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className="h-full card-soft rounded-lg p-6 flex flex-col justify-between">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <p className="text-2xl font-display font-semibold">India</p>
              <p className="text-sm text-muted-foreground">working globally</p>
            </div>
          </div>
        </Reveal>

        {/* Tech stack */}
        <Reveal delay={0.05} className="md:col-span-3 md:row-span-2">
          <div className="h-full card-soft rounded-lg p-7 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-2xl font-semibold">Tech Stack</h3>
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-4 flex-1 overflow-auto">
              {Object.entries(stack).map(([k, vs]) => (
                <div key={k}>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{k}</p>
                  <div className="flex flex-wrap gap-2">
                    {vs.map((v) => (
                      <motion.span
                        key={v}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="px-3 py-1.5 rounded-full text-xs border border-border bg-card/60 hover:border-primary/60 hover:text-primary transition"
                      >
                        {v}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <a
            href="https://github.com/vaibhavmasaye"
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="h-full card-soft rounded-lg p-6 flex items-center justify-between hover:border-primary/40 transition group block"
          >
            <div>
              <p className="text-xs font-mono text-muted-foreground mb-1">github</p>
              <p className="font-display text-2xl font-semibold">@vaibhavmasaye</p>
            </div>
            <Github className="w-10 h-10 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition" />
          </a>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2">
          <div className="h-full card-soft rounded-lg p-6 flex flex-col justify-between">
            <Smartphone className="w-6 h-6 text-primary" />
            <p className="font-display text-xl">Learning <span className="text-gradient">Flutter</span></p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-2">
          <div className="h-full card-soft rounded-lg p-6 flex flex-col justify-between">
            <Database className="w-6 h-6 text-primary" />
            <p className="font-display text-xl">Type-safe APIs<br /><span className="text-muted-foreground text-sm">end to end</span></p>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="md:col-span-2">
          <a
            href="mailto:masayevaibhav@gmail.com"
            data-cursor="hover"
            className="h-full card-soft rounded-lg p-6 flex flex-col justify-between group hover:border-primary/40 transition"
          >
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">say hi</p>
              <p className="font-display text-base font-semibold group-hover:text-gradient break-all">masayevaibhav@gmail.com</p>
            </div>
          </a>
        </Reveal>

        <Reveal delay={0.3} className="md:col-span-6">
          <div className="h-full card-soft rounded-lg p-6 flex items-center gap-6 overflow-hidden relative">
            <Cloud className="w-8 h-8 text-primary shrink-0" />
            <p className="font-display text-xl md:text-2xl">
              <span className="text-muted-foreground">Fun fact —</span> I love turning complex problems into simple, beautiful solutions.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
