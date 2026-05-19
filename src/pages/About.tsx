import { Instagram, Facebook } from "lucide-react";
import { Target, Music, Star } from "lucide-react";
import Layout from "@/components/Layout";
import FloatingNotes from "@/components/FloatingNotes";
import lacyPortrait from "@/assets/lacy-portrait.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative rainbow-gradient animate-gradient-shift py-20 md:py-28 overflow-hidden">
        <FloatingNotes variant="light" count={5} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-4" style={{ textShadow: "0 2px 15px rgba(0,0,0,0.2)" }}>
            About Lacy
          </h1>
        </div>
      </section>

      {/* Full About */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-transparent max-w-md" style={{ borderImage: "linear-gradient(135deg, #FF3B3B, #FF7A1A, #FFD600, #2DC96E, #1A73E8, #8B2BE2) 1" }}>
                <img src={lacyPortrait} alt="Lacy, music teacher" className="w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6 rainbow-gradient-text">Welcome to Mississippi Seoul</h2>
              <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                <p>Welcome to Mississippi Seoul Music Lessons — I'm Lacy, a private music educator and performer based in Manhattan, NY. My studio offers one-on-one private instruction in piano, voice, guitar, and ukulele for students of all ages and skill levels.</p>
                <p>My teaching journey began with a deep love for music that spans classical training, contemporary performance, and cross-cultural musical traditions. The name "Mississippi Seoul" reflects my eclectic musical roots and the diverse influences that shape my teaching — from the blues and soul traditions of the American South to the vibrant contemporary music scenes of the world.</p>
                <p>I believe that every person has music inside them — my job is simply to help you find it and share it. Whether you're a child taking your very first music lesson, a teenager who wants to start a band, or an adult who always dreamed of playing an instrument, I create a personalized, joyful, and encouraging learning experience tailored specifically to you.</p>
                <p>My lessons combine solid technical foundations with the music you actually love — because when students are excited about what they're learning, they practice more, grow faster, and fall in love with music for life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 md:py-20 section-yellow">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-rainbow-orange text-center mb-12">Teaching Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Target, color: "border-rainbow-red", title: "Student-Centered Learning", desc: "Lessons are built around your goals, your interests, and your pace — not a generic curriculum." },
              { icon: Music, color: "border-rainbow-blue", title: "Music You Love", desc: "Lacy believes students learn best when they're playing music that excites them. Your favorite songs are always part of the plan." },
              { icon: Star, color: "border-rainbow-green", title: "Confidence Builder", desc: "Every lesson is designed to celebrate progress, build musical confidence, and create a lifelong love of making music." },
            ].map((item, i) => (
              <div key={i} className={`feature-card ${item.color}`}>
                <item.icon className="w-8 h-8 mb-3 text-foreground/70" />
                <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 md:py-20 section-pink">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-rainbow-pink mb-4">Follow Along on Instagram</h2>
          <p className="text-foreground/80 mb-8">
            See what's happening in the studio, get music tips, and follow the Mississippi Seoul musical journey on Instagram and Facebook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/mississippi.seoul.music/"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn bg-rainbow-pink text-white hover:opacity-90 flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" /> @mississippi.seoul.music
            </a>
            <a
              href="https://www.facebook.com/lacy.quin"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn bg-rainbow-blue text-white hover:opacity-90 flex items-center gap-2"
            >
              <Facebook className="w-5 h-5" /> Facebook
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
