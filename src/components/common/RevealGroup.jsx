import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function RevealGroup({ children, className, amount = 0.15, ...rest }) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className, as = "div", ...rest }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag className={className} variants={itemVariants} {...rest}>
      {children}
    </MotionTag>
  );
}
