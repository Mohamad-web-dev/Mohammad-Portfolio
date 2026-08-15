import { motion } from "framer-motion";

const DIRECTIONS = {
  up: { y: 36, x: 0 },
  down: { y: -36, x: 0 },
  start: { y: 0, x: 36 },
  end: { y: 0, x: -36 },
  none: { y: 0, x: 0 },
};

/**
 * Wraps children with a fade + slide-in animation that plays once
 * the element scrolls into the viewport. Respects prefers-reduced-motion
 * automatically through framer-motion's built-in handling.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  once = true,
  as = "div",
  className,
  ...rest
}) {
  const offset = DIRECTIONS[direction] ?? DIRECTIONS.up;
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
