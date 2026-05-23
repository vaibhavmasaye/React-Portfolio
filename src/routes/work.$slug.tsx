import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects, type Project } from "@/data/projects";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — Vaibhav Masaye` },
          { name: "description", content: loaderData.project.tagline },
          { property: "og:title", content: `${loaderData.project.name} — Vaibhav Masaye` },
          { property: "og:description", content: loaderData.project.tagline },
        ]
      : [{ title: "Project — Vaibhav Masaye" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">/// 404</p>
        <h1 className="font-display text-5xl font-bold mb-4">No such project.</h1>
        <Link to="/work" className="underline underline-offset-4">Back to work</Link>
      </div>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Nav />
      <main className="relative pt-28 md:pt-32 pb-24">
        {/* Hero */}
        <section
          className="relative px-4 md:px-6"
          style={{ background: p.cover }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(80% 60% at 80% 0%, ${p.accent}33, transparent 60%), radial-gradient(60% 50% at 0% 100%, ${p.accent}22, transparent 70%)`,
            }}
          />
          <div className="absolute inset-0 grain opacity-25 mix-blend-overlay" />

          <div className="relative max-w-[1280px] mx-auto py-16 md:py-24 text-white">
            <Link
              to="/work"
              data-cursor="hover"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> All work
            </Link>

            <div className="mt-8 flex items-baseline gap-3 text-white/60 font-mono text-[11px] uppercase tracking-[0.25em]">
              <span>{p.n}</span><span>/</span><span>{p.category}</span><span>/</span><span>{p.year}</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display font-bold tracking-[-0.045em] leading-[0.9] text-[clamp(3rem,11vw,10rem)] max-w-[14ch]"
            >
              {p.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg md:text-2xl text-white/80 max-w-2xl font-serif italic"
            >
              {p.tagline}
            </motion.p>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <Meta label="Role" value={p.role} />
              <Meta label="Year" value={p.year} />
              <Meta label="Stack" value={p.stack.slice(0, 3).join(" · ")} />
              <Meta
                label="Live"
                value={
                  p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">
                      Visit <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : "—"
                }
              />
            </div>
          </div>
        </section>

        {/* Cover plate */}
        <section className="px-4 md:px-6 -mt-10 md:-mt-16 relative z-10">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg overflow-hidden aspect-[16/9] shadow-soft relative"
              style={{ background: `linear-gradient(135deg, ${p.cover}, ${p.accent})` }}
            >
              <div className="absolute inset-0 grain opacity-20 mix-blend-overlay" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-serif italic text-white/90 text-4xl md:text-7xl">{p.name}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case study */}
        <section className="px-4 md:px-6 py-24 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4">/// Case study</p>
                <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-[1.05]">
                  Context & <span className="font-serif italic font-normal">approach</span>.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8 space-y-8">
              {p.caseStudy ? (
                <>
                  <Reveal>
                    <p className="text-lg md:text-xl leading-relaxed">{p.caseStudy.context}</p>
                  </Reveal>
                  {p.caseStudy.blocks.map((b, i) => (
                    <Reveal key={i} delay={0.05 * i}>
                      {b.kind === "para" && (
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{b.text}</p>
                      )}
                      {b.kind === "list" && (
                        <div className="card-soft p-6 md:p-8">
                          <h3 className="font-display font-bold text-lg mb-4">{b.title}</h3>
                          <ul className="space-y-2.5">
                            {b.items.map((it) => (
                              <li key={it} className="flex gap-3 text-sm md:text-base">
                                <span className="text-teal mt-1.5">—</span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {b.kind === "quote" && (
                        <blockquote className="border-l-2 border-foreground pl-6 py-2 font-serif italic text-xl md:text-2xl leading-snug">
                          "{b.text}"
                          {b.author && <footer className="not-italic font-sans text-sm text-muted-foreground mt-3">— {b.author}</footer>}
                        </blockquote>
                      )}
                    </Reveal>
                  ))}
                </>
              ) : (
                <Reveal>
                  <p className="text-lg text-muted-foreground leading-relaxed">{p.desc}</p>
                  <p className="mt-4 text-sm text-muted-foreground/70 italic">A full case study for this project is coming soon.</p>
                </Reveal>
              )}

              <Reveal>
                <div className="pt-6 border-t border-border">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="px-3 py-1.5 rounded-full border border-border text-sm">{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Gallery placeholder */}
        {p.gallery && p.gallery.length > 0 && (
          <section className="px-4 md:px-6 max-w-[1280px] mx-auto pb-24">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-6">/// Gallery</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {p.gallery.map((src, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-card">
                    <img src={src} alt={`${p.name} screen ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Next project */}
        <section className="px-4 md:px-6 max-w-[1280px] mx-auto pb-16">
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            data-cursor="hover"
            className="group block rounded-lg overflow-hidden relative aspect-[16/6] shadow-soft"
            style={{ background: next.cover }}
          >
            <div
              className="absolute inset-0"
              style={{ background: `radial-gradient(80% 80% at 100% 50%, ${next.accent}40, transparent 70%)` }}
            />
            <div className="absolute inset-0 grain opacity-25 mix-blend-overlay" />
            <div className="absolute inset-0 flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 text-white">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 mb-3">Next project</p>
                <h3 className="font-display font-bold text-4xl md:text-6xl tracking-tight">
                  {next.name}
                </h3>
              </div>
              <motion.div
                whileHover={{ x: 10 }}
                className="mt-6 md:mt-0 inline-flex items-center gap-3 text-sm"
              >
                Read case study
                <span className="grid place-items-center w-12 h-12 rounded-full bg-white text-foreground">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </motion.div>
            </div>
          </Link>
        </section>

        <Contact />
      </main>
    </>
  );
}

function Meta({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2">{label}</p>
      <p className="text-white">{value}</p>
    </div>
  );
}
