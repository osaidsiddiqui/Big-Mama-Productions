const notes = ["♩", "♪", "♫", "♬", "♩", "♪", "♫"];

interface FloatingNotesProps {
  count?: number;
  className?: string;
  variant?: "light" | "dark";
}

const FloatingNotes = ({ count = 7, className = "", variant = "light" }: FloatingNotesProps) => {
  const positions = [
    { top: "10%", left: "5%", size: "text-2xl", delay: "0s", duration: "5s" },
    { top: "20%", right: "8%", size: "text-4xl", delay: "1s", duration: "6s" },
    { top: "60%", left: "12%", size: "text-3xl", delay: "0.5s", duration: "4s" },
    { top: "40%", right: "15%", size: "text-xl", delay: "2s", duration: "7s" },
    { top: "75%", left: "80%", size: "text-2xl", delay: "1.5s", duration: "5.5s" },
    { top: "30%", left: "50%", size: "text-5xl", delay: "0.8s", duration: "6.5s" },
    { top: "85%", right: "30%", size: "text-lg", delay: "2.5s", duration: "4.5s" },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {positions.slice(0, count).map((pos, i) => (
        <span
          key={i}
          className={`floating-note ${pos.size} ${variant === "light" ? "text-white" : "text-foreground"}`}
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            "--float-duration": pos.duration,
            "--note-opacity": variant === "light" ? "0.3" : "0.08",
            animationDelay: pos.delay,
          } as React.CSSProperties}
        >
          {notes[i % notes.length]}
        </span>
      ))}
    </div>
  );
};

export default FloatingNotes;
