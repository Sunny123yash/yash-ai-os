import { motion } from "framer-motion";

const status = [
  "CPU ONLINE",
  "GPU ONLINE",
  "NETWORK ONLINE",
  "AI CORE ONLINE",
];

export default function BootStatus() {
  return (
    <div className="mt-8 border-t border-cyan-400/20 pt-5">

      <h3 className="text-cyan-400 text-sm tracking-[4px] mb-4">
        SYSTEM STATUS
      </h3>

      {status.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.4,
          }}
          className="flex justify-between text-green-400 font-mono mb-2"
        >
          <span>{item.split(" ")[0]}</span>

          <span className="text-cyan-400">
            ONLINE
          </span>
        </motion.div>
      ))}
    </div>
  );
}