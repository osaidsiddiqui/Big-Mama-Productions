import { Link } from "react-router-dom";
import { Music, Star, MapPin, Target, Baby, Sparkles, Building, HeartHandshake } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";
import Layout from "@/components/Layout";
import FloatingNotes from "@/components/FloatingNotes";
import ScrollReveal from "@/components/ScrollReveal";
import Testimonials from "@/components/Testimonials";
import lacyPortrait from "@/assets/lacy-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const instruments = [
  {
    emoji: "🎹",
    name: "Piano",
    color: "bg-rainbow-blue",
    hoverColor: "hover:bg-[#155FC0]",
    textColor: "text-rainbow-blue",
    desc: "From classical to pop, beginner to advanced — piano lessons with Lacy build strong fundamentals while keeping the joy of music front and center. Students learn to read music, develop technique, and play the songs they love.",
    link: "/lessons",
  },
  {
    emoji: "🎤",
    name: "Voice",
    color: "bg-rainbow-pink",
    hoverColor: "hover:bg-[#e0357f]",
    textColor: "text-rainbow-pink",
    desc: "Unlock your singing voice in a safe, supportive studio environment. Voice lessons cover breath support, pitch, tone, range development, and performance confidence — for musical theater, pop, gospel, classical, and everything in between.",
    link: "/lessons",
  },
  {
    emoji: "🎸",
    name: "Guitar",
    color: "bg-rainbow-orange",
    hoverColor: "hover:bg-[#e06a10]",
    textColor: "text-rainbow-orange",
    desc: "Whether you dream of strumming campfire songs or shredding rock solos, guitar lessons cover chords, scales, fingerpicking, music theory, and genre-specific techniques tailored to your goals and taste.",
    link: "/lessons",
  },
  {
    emoji: "🪕",
    name: "Ukulele",
    color: "bg-rainbow-green",
    hoverColor: "hover:bg-[#24a85a]",
    textColor: "text-rainbow-green",
    desc: "The ukulele is one of the most joyful and accessible instruments to learn. Lessons cover chords, strumming patterns, fingerpicking, and songs across genres — from Hawaiian classics to contemporary pop hits. Perfect for all ages!",
    link: "/lessons",
  },
];

const features = [
  { icon: Target, title: "Personalized Lessons", color: "border-rainbow-red", desc: "Every lesson is tailored to YOU — your goals, your pace, your favorite music. No cookie-cutter curriculum here." },
  { icon: Baby, title: "All Ages Welcome", color: "border-rainbow-orange", desc: "From young beginners (ages 5+) to adult learners returning to music after years away — everyone is welcome and celebrated." },
  { icon: Music, title: "Any Skill Level", color: "border-rainbow-yellow", desc: "Total beginner? Seasoned player? Somewhere in between? Lacy meets you exactly where you are and helps you grow from there." },
  { icon: Building, title: "Manhattan, NY", color: "border-rainbow-green", desc: "Conveniently located in Manhattan, NY — bringing world-class music education to the heart of New York City." },
  { icon: Sparkles, title: "All Music Styles", color: "border-rainbow-blue", desc: "Classical, pop, rock, R&B, gospel, jazz, musical theater — lessons are built around the music you actually love." },
  { icon: HeartHandshake, title: "Encouraging Environment", color: "border-rainbow-purple", desc: "Learning music should feel exciting, not stressful. Lacy creates a warm, encouraging space where students build confidence along with skills." },
];

const steps = [
  { num: 1, color: "bg-rainbow-red", borderColor: "border-rainbow-red", title: "Reach Out", desc: 'Call or message Lacy at (512) 534-7753 or fill out the contact form. Tell us your instrument of interest and goals.' },
  { num: 2, color: "bg-rainbow-orange", borderColor: "border-rainbow-orange", title: "Free Intro Chat", desc: "Lacy will connect with you to understand your experience level, musical interests, and schedule to design the perfect lesson plan." },
  { num: 3, color: "bg-rainbow-yellow", borderColor: "border-rainbow-yellow", title: "Book Your First Lesson", desc: "Choose your lesson time and lock in your spot. First lessons are a relaxed, fun introduction — no pressure, just music." },
  { num: 4, color: "bg-rainbow-green", borderColor: "border-rainbow-green", title: "Start Playing!", desc: "Show up ready to learn. Lacy provides all the guidance — you bring the enthusiasm. Let the music begin!" },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 rainbow-gradient opacity-80" style={{ mixBlendMode: "multiply" }} />
          <div className="absolute inset-0 rainbow-gradient animate-gradient-shift opacity-60" />
        </div>
        <FloatingNotes variant="light" count={7} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="inline-block bg-white/90 text-foreground font-display text-sm px-4 py-1.5 rounded-full mb-6">
            🎵 Manhattan, NY
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
            Learn Music.<br />Love Every Note.
          </h1>
          <p className="font-display text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Private piano, voice, guitar, and ukulele lessons with Lacy — for all ages and skill levels in Manhattan, NY.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="pill-btn bg-white text-rainbow-red font-bold shadow-lg hover:bg-rainbow-red hover:text-white transition-all">
              Book Your First Lesson →
            </Link>
            <Link to="/about" className="pill-btn-outline-white">
              Meet Lacy
            </Link>
          </div>

          {/* Instrument bubbles */}
          <div className="flex justify-center gap-4 md:gap-6 mt-12">
            {instruments.map((inst) => (
              <div key={inst.name} className={`${inst.color} w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center shadow-lg`}>
                <span className="text-2xl md:text-3xl">{inst.emoji}</span>
                <span className="text-white text-[10px] md:text-xs font-display font-semibold">{inst.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40C240 80 480 100 720 80C960 60 1200 20 1440 40V100H0V40Z" fill="hsl(0 0% 98%)" />
          </svg>
        </div>
      </section>

      {/* ABOUT / INTRO */}
      <section className="py-16 md:py-24 bg-background">
        <ScrollReveal>
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="font-display text-xs uppercase tracking-[0.2em] text-rainbow-purple font-semibold">Welcome To</span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mt-3 mb-6 rainbow-gradient-text">
              Mississippi Seoul Music Lessons
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-10">
              Since getting started, Mississippi Seoul Music Lessons has been dedicated to making music education joyful, accessible, and meaningful for every student. Whether you're a complete beginner picking up an instrument for the first time, or an experienced player looking to grow your skills, private lessons with Lacy offer a personalized, encouraging environment where you can thrive. Music to your ears — every single lesson.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <span className="text-3xl">🎹</span>
                <p className="font-heading text-2xl font-extrabold text-rainbow-blue mt-2">4</p>
                <p className="text-muted-foreground text-sm font-display">Instruments Taught</p>
              </div>
              <div>
                <span className="text-3xl">🌟</span>
                <p className="font-heading text-2xl font-extrabold text-rainbow-orange mt-2">All Ages</p>
                <p className="text-muted-foreground text-sm font-display">Welcome</p>
              </div>
              <div>
                <span className="text-3xl">📍</span>
                <p className="font-heading text-2xl font-extrabold text-rainbow-green mt-2">NYC</p>
                <p className="text-muted-foreground text-sm font-display">Manhattan, NY</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* INSTRUMENTS */}
      <section className="py-16 md:py-24 section-yellow relative">
        <FloatingNotes variant="dark" count={5} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-rainbow-orange">What We Teach</h2>
              <p className="text-muted-foreground font-display mt-3">Private one-on-one lessons for every instrument and every level</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {instruments.map((inst, i) => (
              <ScrollReveal key={inst.name} delay={i * 100}>
                <div className={`instrument-card ${inst.color} ${inst.hoverColor}`}>
                  <span className="text-5xl mb-4 block">{inst.emoji}</span>
                  <h3 className="font-heading text-2xl font-extrabold text-white mb-3">{inst.name} Lessons</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">{inst.desc}</p>
                  <Link to={inst.link} className={`pill-btn bg-white ${inst.textColor} text-xs hover:shadow-lg`}>
                    Enroll in {inst.name} →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-rainbow-purple text-center mb-12">
              Why Students Love Learning Here
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={`feature-card ${f.color}`}>
                  <f.icon className="w-8 h-8 mb-3 text-foreground/70" />
                  <h3 className="font-heading text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* MEET LACY */}
      <section className="py-16 md:py-24 section-pink">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="rounded-2xl overflow-hidden border-4 border-transparent" style={{ borderImage: "linear-gradient(135deg, #FF3B3B, #FF7A1A, #FFD600, #2DC96E, #1A73E8, #8B2BE2) 1" }}>
                  <img src={lacyPortrait} alt="Lacy, music teacher" className="w-full max-w-sm object-cover" loading="lazy" />
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="https://www.instagram.com/mississippi.seoul.music/" target="_blank" rel="noopener noreferrer" className="text-rainbow-pink hover:scale-110 transition-transform" aria-label="Instagram">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.facebook.com/lacy.quin" target="_blank" rel="noopener noreferrer" className="text-rainbow-blue hover:scale-110 transition-transform" aria-label="Facebook">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div>
                <span className="font-display text-xs uppercase tracking-[0.2em] text-rainbow-red font-semibold">Your Teacher</span>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold mt-2 mb-4">Meet Lacy</h2>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  Hi, I'm Lacy — the heart behind Mississippi Seoul Music Lessons! I'm a passionate private music educator based in Manhattan, NY, specializing in piano, voice, guitar, and ukulele. My teaching philosophy is simple: music should be joyful. Whether you're a five-year-old picking up a ukulele for the first time or an adult finally pursuing that childhood dream of playing guitar, I create a personalized, encouraging, and fun learning experience for every student. With a background spanning classical training and contemporary performance, I bring both technical depth and genuine enthusiasm to every lesson. Let's make music together!
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="pill-btn bg-rainbow-red text-white text-xs hover:opacity-90">Book a Lesson →</Link>
                  <a href="https://www.instagram.com/mississippi.seoul.music/" target="_blank" rel="noopener noreferrer" className="pill-btn border-2 border-rainbow-pink text-rainbow-pink text-xs hover:bg-rainbow-pink hover:text-white transition-all">
                    Follow on Instagram →
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-rainbow-green text-center mb-12">
              Getting Started is Easy
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 120}>
                <div className={`bg-card rounded-2xl p-6 shadow-md border-t-4 ${step.borderColor} text-center`}>
                  <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-heading text-xl font-extrabold`}>
                    {step.num}
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="py-16 md:py-20 section-pink">
        <ScrollReveal>
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-rainbow-pink mb-4">Just Getting Started?</h2>
            <p className="text-foreground/80 mb-6">
              Not sure which instrument to choose, or what to expect from your first lesson? We've got answers. Visit our FAQ page for everything you need to know about getting started with private music lessons.
            </p>
            <Link to="/faq" className="pill-btn bg-rainbow-pink text-white hover:opacity-90">Read Our FAQs →</Link>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA BAND */}
      <section className="relative rainbow-gradient animate-gradient-shift py-16 md:py-24 overflow-hidden">
        <FloatingNotes variant="light" count={5} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
            Ready to Make Music?
          </h2>
          <p className="text-white/90 text-lg mb-4">Private lessons in piano, voice, guitar & ukulele — Manhattan, NY.</p>
          <a href="tel:5125347753" className="text-white font-heading text-2xl md:text-3xl font-extrabold block mb-6">(512) 534-7753</a>
          <Link to="/contact" className="pill-btn bg-white text-foreground font-bold shadow-lg hover:shadow-xl">
            Book Your First Lesson Today →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
