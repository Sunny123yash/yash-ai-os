import { motion } from "framer-motion";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroRight from "./HeroRight";

import ScrollIndicator from "../components/hero/ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* Background */}
      <HeroBackground />

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">

        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <HeroContent />
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="flex justify-center"
          >
            <HeroRight />
          </motion.div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>

    </section>
  );
}