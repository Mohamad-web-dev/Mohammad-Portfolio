import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./cursorFollower.css";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, [role='button'], [role='tab']";

export default function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 260, damping: 26, mass: 0.4 });
  const ringY = useSpring(dotY, { stiffness: 260, damping: 26, mass: 0.4 });

  const rafRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!finePointer || reducedMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const handleMove = (event) => {
      dotX.set(event.clientX);
      dotY.set(event.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (event) => {
      if (event.target.closest?.(INTERACTIVE_SELECTOR)) setHovering(true);
    };
    const handleOut = (event) => {
      if (event.target.closest?.(INTERACTIVE_SELECTOR)) setHovering(false);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("mouseout", handleOut, { passive: true });
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`cursor-follower ${visible ? "cursor-follower--visible" : ""}`}
      aria-hidden="true"
    >
      <motion.span
        className="cursor-follower__dot"
        style={{ translateX: dotX, translateY: dotY }}
        animate={{ scale: hovering ? 0.5 : 1 }}
        transition={{ duration: 0.25 }}
      />
      <motion.span
        className="cursor-follower__ring"
        style={{ translateX: ringX, translateY: ringY }}
        animate={{ scale: hovering ? 1.5 : 1, opacity: hovering ? 0.7 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
