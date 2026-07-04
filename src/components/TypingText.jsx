import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 35,
  onComplete,
}) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);

        if (onComplete) {
          setTimeout(onComplete, 200);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="text-green-400 font-mono text-xl mb-4">
      {">"} {displayText}
      <span className="animate-pulse">█</span>
    </p>
  );
}