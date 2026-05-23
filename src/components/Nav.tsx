import { motion } from "motion/react";
import { Link, useLocation } from "@tanstack/react-router";
import { MagneticButton } from "./MagneticButton";

const links = [
  { label: "Work", to: "/work" as const },
  { label: "Stack", to: "/" as const, hash: "stack" },
  { label: "About", to: "/" as const, hash: "about" },
];

export function Nav() {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-1/2 z-50 -translate-x-1/2 w-[min(95%,1280px)]"
    >
      <div className="pill flex items-center justify-between gap-4 px-4 py-3 shadow-soft border border-white/80 bg-white/80 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-3" data-cursor="hover">
          <div className="w-10 h-10 rounded-full bg-foreground text-background grid place-items-center font-display font-bold text-sm shadow-sm">
            V
          </div>
          <span className="font-display font-semibold tracking-tight text-sm md:text-base">VAIBHAV M.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {links.map((l) => {
            const isActive =
              location.pathname === l.to &&
              (l.hash ? location.hash === `#${l.hash}` : true);

            return (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                data-cursor="hover"
                className={`px-4 py-2 rounded-full border transition duration-200 ${
                  isActive
                    ? "border-foreground bg-foreground text-background shadow-sm"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <MagneticButton href="#contact">
          <span className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
            Book a call
          </span>
        </MagneticButton>
      </div>
    </motion.header>
  );
}
