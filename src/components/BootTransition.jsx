import { motion } from "framer-motion";

export default function BootTransition() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1.5,
      }}
      className="fixed inset-0 bg-cyan-300 z-50 pointer-events-none"
    />
  );
}