import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 25, stiffness: 350, mass: 0.5 });
  const sy = useSpring(y, { damping: 25, stiffness: 350, mass: 0.5 });
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseleave", () => setHidden(true));
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-difference"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: hover ? 48 : 12,
            height: hover ? 48 : 12,
            x: hover ? -24 : -6,
            y: hover ? -24 : -6,
            opacity: hidden ? 0 : 1,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[199] h-1.5 w-1.5 rounded-full bg-[var(--teal-deep)]"
        style={{ x, y, translateX: -3, translateY: -3, opacity: hidden ? 0 : 1 }}
      />
    </>
  );
}
