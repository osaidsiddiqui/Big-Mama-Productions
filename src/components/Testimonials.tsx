import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    instrument: "Piano Student",
    color: "bg-rainbow-blue",
    borderColor: "border-rainbow-blue",
    quote: "Lacy is an incredible piano teacher! My daughter went from being nervous about playing to performing at her school recital with confidence. The lessons are fun, engaging, and perfectly tailored to her pace.",
  },
  {
    name: "James T.",
    instrument: "Guitar Student",
    color: "bg-rainbow-orange",
    borderColor: "border-rainbow-orange",
    quote: "I picked up the guitar at 35 thinking it was too late. Lacy proved me wrong! Her patience and encouraging style made me feel comfortable from day one. I'm now playing my favorite songs after just a few months.",
  },
  {
    name: "Maria L.",
    instrument: "Voice Student",
    color: "bg-rainbow-pink",
    borderColor: "border-rainbow-pink",
    quote: "Voice lessons with Lacy transformed my singing. She helped me find my range, improve my breath control, and most importantly — believe in my voice. I can't recommend her enough!",
  },
  {
    name: "David & Emma K.",
    instrument: "Ukulele Students",
    color: "bg-rainbow-green",
    borderColor: "border-rainbow-green",
    quote: "Both our kids take ukulele lessons with Lacy and they absolutely love it. She makes every lesson feel like a celebration. The joy on their faces when they learn a new song is priceless.",
  },
  {
    name: "Rachel P.",
    instrument: "Piano Student",
    color: "bg-rainbow-purple",
    borderColor: "border-rainbow-purple",
    quote: "As an adult beginner, I was intimidated to start piano lessons. Lacy created such a warm, judgment-free space that I actually look forward to practicing. Best decision I've made this year!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + testimonials.length) % testimonials.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-16 md:py-24 section-purple">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-rainbow-blue text-center mb-12">
          What Our Students Say
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground/70" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground/70" />
          </button>

          {/* Card */}
          <div
            key={current}
            className={`bg-card rounded-2xl p-8 md:p-10 shadow-lg border-t-4 ${t.borderColor} text-center animate-fade-in-up`}
          >
            <Quote className="w-10 h-10 mx-auto mb-4 text-rainbow-purple opacity-30" />
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed italic mb-6">
              "{t.quote}"
            </p>
            <div className={`inline-flex items-center gap-3`}>
              <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-heading font-bold text-sm`}>
                {t.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs font-display">{t.instrument}</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-rainbow-purple scale-125" : "bg-foreground/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
