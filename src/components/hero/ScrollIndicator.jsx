import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 12, 0],
      }}
      transition={{
        opacity: {
          duration: 1,
        },
        y: {
          repeat: Infinity,
          duration: 1.8,
          ease: "easeInOut",
        },
      }}
      className="flex flex-col items-center gap-4"
    >
      {/* Scroll Text */}
      <p className="text-xs tracking-[6px] uppercase text-cyan-400">
        Scroll
      </p>

      {/* Mouse Shape */}
      <div className="relative flex h-14 w-8 justify-center rounded-full border-2 border-cyan-400/60">
        <motion.div
          animate={{
            y: [4, 20, 4],
            opacity: [1, 0.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="mt-2 h-3 w-1 rounded-full bg-cyan-400"
        />
      </div>

      {/* Down Arrow */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="text-cyan-400"
      >
        <FaChevronDown />
      </motion.div>
    </motion.div>
  );
}