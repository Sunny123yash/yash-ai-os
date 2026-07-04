import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8">
      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-cyan-400 mt-3 font-mono">
        {progress}%
      </p>
    </div>
  );
}