import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { ArrowUpRight, Github, Mail, Globe, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 max-w-7xl mx-auto">

      <Reveal delay={0.1}>
        <h2 className="font-display text-[clamp(2.75rem,8.5vw,7rem)] font-semibold leading-[0.95] tracking-tighter">
          Let's build <br />
          <span className="text-gradient">something amazing.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 gap-8 items-end">
        <Reveal delay={0.2}>
          <p className="text-muted-foreground text-lg max-w-md">
            Have an idea, a project, or just want to chat about tech? My inbox is always open.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="md:justify-self-end">
          <MagneticButton href="mailto:masayevaibhav@gmail.com">
            <span className="group inline-flex items-center gap-4 rounded-full bg-foreground text-background pl-8 pr-3 py-3 text-base font-medium">
              masayevaibhav@gmail.com
              <span className="grid place-items-center w-10 h-10 rounded-full bg-background text-foreground">
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
              </span>
            </span>
          </MagneticButton>
        </Reveal>
      </div>

      <Reveal delay={0.4}>
        <div className="mt-24 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Vaibhav Masaye — Crafted with care.</p>
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/vaibhavmasaye", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhav-masaye-244984179/", label: "LinkedIn" },
              { icon: Globe, href: "https://vaibhavmasaye.onrender.com/", label: "Website" },
              { icon: Mail, href: "mailto:masayevaibhav@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-cursor="hover"
                className="grid place-items-center w-10 h-10 rounded-full border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition"
                aria-label={s.label}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
