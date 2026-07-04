import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const fontSize = 18;

    const chars =
      "01ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソ";

    let mouse = {
      x: width / 2,
      y: height / 2,
    };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    let columns = Math.floor(width / fontSize);

    let drops = [];
    let speed = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
      speed[i] = Math.random() * 1.5 + 0.5;
    }

    function draw() {
      ctx.fillStyle = "rgba(2,6,23,0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        const text =
          chars[Math.floor(Math.random() * chars.length)];

        let x = i * fontSize;
        let y = drops[i] * fontSize;

        const dx = mouse.x - x;
        const dy = mouse.y - y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        let glow = 0;

        if (distance < 180) {
          glow = (180 - distance) / 12;
        }

        ctx.shadowBlur = glow;
        ctx.shadowColor = "#22d3ee";

        ctx.fillStyle =
          distance < 180 ? "#22d3ee" : "#8b5cf6";

        ctx.fillText(text, x, y);

        ctx.shadowBlur = 0;

        if (
          y > height &&
          Math.random() > 0.985
        ) {
          drops[i] = -20;
        }

        drops[i] += speed[i];
      }
    }

    const interval = setInterval(draw, 33);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      columns = Math.floor(width / fontSize);

      drops = [];
      speed = [];

      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
        speed[i] = Math.random() * 1.5 + 0.5;
      }
    }

    window.addEventListener("resize", resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-25"
    />
  );
}