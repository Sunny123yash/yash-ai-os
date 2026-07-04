import { useEffect, useState } from "react";

const roles = [
  "AI & ML Engineer",
  "Full Stack Developer",
  "React Developer",
  "Python Programmer",
  "Problem Solver",
  "Open Source Learner",
];

export default function TypeWriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="flex items-center">
      <span className="mr-2 text-cyan-400 font-bold">{">"}</span>

      <span className="text-2xl font-semibold text-white">
        {text}
      </span>

      <span className="ml-1 animate-pulse text-cyan-400 text-2xl">
        |
      </span>
    </div>
  );
}