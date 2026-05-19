import { useState, useEffect } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), 2000);
    const exitTimer = setTimeout(() => onComplete(), 2500);
    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  const noteColors = ["text-rainbow-red", "text-rainbow-orange", "text-rainbow-blue", "text-rainbow-purple"];
  const delays = [0, 0.15, 0.3, 0.45];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${exiting ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex gap-4 mb-6">
        {noteColors.map((color, i) => (
          <span
            key={i}
            className={`text-4xl ${color} animate-bounce-note`}
            style={{ animationDelay: `${delays[i]}s` }}
          >
            🎵
          </span>
        ))}
      </div>
      <h1 className="font-logo text-3xl md:text-4xl rainbow-gradient-text preloader-enter">
        Big Mama Productions
      </h1>
      <p
        className="mt-3 font-display text-muted-foreground text-sm tracking-wide preloader-enter"
        style={{ animationDelay: "0.3s" }}
      >
        Knoxville's Legendary Recording Studio
      </p>
    </div>
  );
};

export default Preloader;
