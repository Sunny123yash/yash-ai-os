import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import MatrixRain from "./MatrixRain";
import MouseGlow from "./MouseGlow";
import FloatingParticles from "./FloatingParticles";
import AnimatedGrid from "./AnimatedGrid";
import TypingText from "./TypingText";
import ProgressBar from "./ProgressBar";
import BootStatus from "./BootStatus";
import IdentityCard from "./IdentityCard";
import BootTransition from "./BootTransition";

const bootMessages = [
  "Boot Sequence Started...",
  "Initializing Neural Engine...",
  "Loading Portfolio...",
  "Connecting GitHub...",
  "Loading AI Modules...",
  "Loading 3D Environment...",
  "Identity Verified...",
];

export default function Loader({ onFinish }) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showIdentity, setShowIdentity] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    if (currentMessage < bootMessages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentMessage((prev) => prev + 1);
        setProgress(((currentMessage + 1) / bootMessages.length) * 100);
      }, 1200);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setProgress(100);
        setShowIdentity(true);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [currentMessage]);

  useEffect(() => {
    if (showIdentity) {
      const timer = setTimeout(() => {
        setShowTransition(true);

        setTimeout(() => {
          onFinish();
        }, 1200);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showIdentity, onFinish]);

  return (
    <>
      {showTransition && <BootTransition />}

      <div className="relative min-h-screen overflow-hidden bg-[#020617] flex items-center justify-center">

        <MatrixRain />

        <AnimatedGrid />

        <FloatingParticles />

        <MouseGlow />

        <div className="absolute w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-20 w-full max-w-4xl px-8"
        >

          <h1 className="text-center text-6xl font-extrabold tracking-[10px] text-cyan-400 drop-shadow-[0_0_40px_#22d3ee] mb-12">
            YASH AI OS
          </h1>

          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(34,211,238,0.25)]">

            {bootMessages
              .slice(0, currentMessage + 1)
              .map((message, index) => (
                <TypingText
                  key={index}
                  text={message}
                />
              ))}

            <ProgressBar progress={progress} />

            <BootStatus />
                        <AnimatePresence>

              {showIdentity && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -40,
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <IdentityCard />
                </motion.div>
              )}

            </AnimatePresence>

            {progress === 100 && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="mt-10 text-center"
              >
                <p className="text-cyan-300 tracking-[6px] text-lg animate-pulse">
                  Launching Interface...
                </p>
              </motion.div>
            )}

          </div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className="mt-8 flex justify-center gap-10 text-xs tracking-[4px] text-cyan-400"
          >
            <span>AI CORE v2.0</span>
            <span>REACT</span>
            <span>THREE.JS</span>
            <span>FRAMER MOTION</span>
          </motion.div>

        </motion.div>

      </div>
    </>
  );
}