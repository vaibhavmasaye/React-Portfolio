import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { pageTransition } from "@/lib/animation";

type PreloaderProps = {
  videoSrc?: string;
  onComplete?: () => void;
};

export function Preloader({ videoSrc = "/hero.mp4", onComplete }: PreloaderProps) {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let running = true;
    let p = 0;

    const tick = () => {
      setProgress((current) => {
        if (!running) return current;
        const next = Math.min(95, current + Math.random() * 7 + 4);
        return Math.floor(next);
      });
    };

    const interval = window.setInterval(tick, 75);

    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const videoReady = videoSrc
      ? new Promise<void>((resolve) => {
          const video = document.createElement("video");
          video.preload = "auto";
          video.muted = true;
          video.playsInline = true;
          video.src = videoSrc;
          video.crossOrigin = "anonymous";

          const cleanup = () => {
            video.removeEventListener("canplaythrough", onReady);
            video.removeEventListener("loadeddata", onReady);
            video.removeEventListener("error", onReady);
            video.src = "";
          };

          const onReady = () => {
            cleanup();
            resolve();
          };

          video.addEventListener("canplaythrough", onReady, { once: true });
          video.addEventListener("loadeddata", onReady, { once: true });
          video.addEventListener("error", onReady, { once: true });
          video.load();
        })
      : Promise.resolve();

    Promise.race([
      Promise.all([fontsReady, videoReady]),
      new Promise<void>((resolve) => window.setTimeout(resolve, 5000)),
    ]).then(() => {
      running = false;
      window.clearInterval(interval);
      setProgress(100);
      window.setTimeout(() => setDone(true), 300);
    });

    return () => {
      running = false;
      window.clearInterval(interval);
    };
  }, [videoSrc]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { ...pageTransition } }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-foreground origin-top"
            exit={{ scaleY: 0, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-foreground origin-bottom"
            exit={{ scaleY: 0, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          />
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-px bg-[var(--teal-soft)]/40"
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.6 } }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            exit={{ opacity: 0, transition: { ...pageTransition } }}
          >
            <div className="flex flex-col items-center gap-8 text-background">
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ ...pageTransition, duration: 0.7 }}
                  className="w-20 h-20 rounded-2xl bg-background text-foreground grid place-items-center font-display font-bold text-3xl relative overflow-hidden"
                >
                  <motion.span
                    initial={{ y: 30 }}
                    animate={{ y: 0 }}
                    transition={{ ...pageTransition, delay: 0.25 }}
                  >
                    V
                  </motion.span>
                </motion.div>
                <motion.div
                  className="absolute -inset-3 rounded-lg border border-background/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...pageTransition, delay: 0.4 }}
                className="flex flex-col items-center gap-3 min-w-[260px]"
              >
                <div className="font-display font-bold text-lg tracking-tight">VAIBHAV MASAYE</div>
                <div className="w-full h-px bg-background/20 overflow-hidden rounded-full">
                  <motion.div
                    className="h-full bg-background"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="flex w-full justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-background/60">
                  <span>Loading portfolio</span>
                  <span>{progress.toString().padStart(3, "0")}%</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
