import { Link } from "react-router-dom";
import { CheckCircle, Calendar, MapPin, Users } from "lucide-react";
import Layout from "@/components/Layout";
import FloatingNotes from "@/components/FloatingNotes";
import pianoImg from "@/assets/piano-lesson.jpg";
import voiceImg from "@/assets/voice-lesson.jpg";
import guitarImg from "@/assets/guitar-lesson.jpg";
import ukuleleImg from "@/assets/ukulele-lesson.jpg";

const lessons = [
  {
    label: "🎹 PIANO LESSONS",
    labelColor: "text-rainbow-blue",
    heading: "Piano — From Beginner to Performer",
    body: "Piano lessons at Mississippi Seoul cover everything from reading sheet music and understanding music theory to developing technique, expression, and repertoire. Whether your goal is to play classical Beethoven sonatas, pop songs, or accompaniment for vocalists — Lacy will build a lesson plan that fits your vision. Students develop strong foundational skills including hand coordination, scales, arpeggios, chord progressions, and sight-reading that serve them for life.",
    learns: ["Reading music / sheet music literacy", "Scales, chords & arpeggios", "Music theory fundamentals", "Classical, pop, and contemporary repertoire", "Performance confidence"],
    who: "All ages (5 and up) · All skill levels",
    btnColor: "bg-rainbow-blue",
    btnText: "Book Piano Lessons →",
    image: pianoImg,
    imageAlt: "Hands playing piano keys",
  },
  {
    label: "🎤 VOICE LESSONS",
    labelColor: "text-rainbow-pink",
    heading: "Voice — Find Your Sound",
    body: "Your voice is your most personal instrument — and voice lessons with Lacy help you discover, develop, and trust it. Private vocal instruction covers proper technique, breath control, pitch accuracy, tone development, range expansion, and performance skills. Lessons are tailored to your genre: classical, musical theater, pop, R&B, gospel, or wherever your musical heart leads you.",
    learns: ["Breath support & diaphragmatic technique", "Pitch accuracy & ear training", "Tone, resonance & vocal health", "Range expansion & vocal exercises", "Genre-specific performance style"],
    who: "All ages · All skill levels",
    btnColor: "bg-rainbow-pink",
    btnText: "Book Voice Lessons →",
    image: voiceImg,
    imageAlt: "Woman singing into studio microphone",
  },
  {
    label: "🎸 GUITAR LESSONS",
    labelColor: "text-rainbow-orange",
    heading: "Guitar — Strum, Pick, Rock",
    body: "Guitar lessons at Mississippi Seoul cover acoustic and electric technique, chord mastery, fingerpicking, scales, and the theory behind the music you love. Whether you want to play around a campfire, jam in a band, or write your own songs — private guitar instruction with Lacy gets you there efficiently and enjoyably.",
    learns: ["Open chords, barre chords & chord transitions", "Strumming & fingerpicking patterns", "Scales & lead guitar basics", "Reading tabs & chord charts", "Songwriting fundamentals"],
    who: "All ages · All skill levels",
    btnColor: "bg-rainbow-orange",
    btnText: "Book Guitar Lessons →",
    image: guitarImg,
    imageAlt: "Person playing acoustic guitar",
  },
  {
    label: "🪕 UKULELE LESSONS",
    labelColor: "text-rainbow-green",
    heading: "Ukulele — Joy in Every Strum",
    body: "The ukulele is playful, portable, and wonderfully approachable — making it one of the best instruments for beginners of all ages. Ukulele lessons cover chords, strumming, fingerpicking, music reading, and a huge range of songs from Hawaiian classics to contemporary pop hits. Kids and adults alike fall in love with this instrument quickly.",
    learns: ["Basic chords (C, G, Am, F and beyond)", "Strumming & fingerpicking techniques", "Song repertoire (pop, folk, Hawaiian, kids songs)", "Music reading basics", "Performing with confidence"],
    who: "All ages · All skill levels",
    btnColor: "bg-rainbow-green",
    btnText: "Book Ukulele Lessons →",
    image: ukuleleImg,
    imageAlt: "Colorful ukulele being played",
  },
];

const Lessons = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative rainbow-gradient animate-gradient-shift py-20 md:py-28 overflow-hidden">
        <FloatingNotes variant="light" count={5} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-4" style={{ textShadow: "0 2px 15px rgba(0,0,0,0.2)" }}>
            Private Music Lessons
          </h1>
          <p className="text-white/90 font-display text-lg max-w-xl mx-auto">
            One-on-one instruction in piano, voice, guitar & ukulele — Manhattan, NY.
          </p>
        </div>
      </section>

      {/* Lesson sections */}
      {lessons.map((lesson, i) => (
        <section key={lesson.label} className={`py-16 md:py-24 ${i % 2 === 1 ? "section-yellow" : "bg-background"}`}>
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <img
                  src={lesson.image}
                  alt={lesson.imageAlt}
                  className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <span className={`font-display text-xs uppercase tracking-[0.2em] font-semibold ${lesson.labelColor}`}>
                  {lesson.label}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-extrabold mt-2 mb-4">{lesson.heading}</h2>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6">{lesson.body}</p>
                <div className="mb-6">
                  <h4 className="font-display font-semibold text-sm mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {lesson.learns.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle className="w-4 h-4 mt-0.5 text-rainbow-green flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-muted-foreground text-xs font-display mb-4">
                  <strong>Who It's For:</strong> {lesson.who}
                </p>
                <Link to="/contact" className={`pill-btn ${lesson.btnColor} text-white text-xs hover:opacity-90`}>
                  {lesson.btnText}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Lesson Format */}
      <section className="py-16 section-yellow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-6 shadow-md text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-rainbow-orange" />
              <h3 className="font-heading font-bold mb-1">Lesson Length</h3>
              <p className="text-muted-foreground text-sm">Typically 30 or 60 minutes per session — customized to your schedule and age</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-md text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-rainbow-blue" />
              <h3 className="font-heading font-bold mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">In-person in Manhattan, NY — location details shared upon booking</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-md text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-rainbow-green" />
              <h3 className="font-heading font-bold mb-1">Who Can Join</h3>
              <p className="text-muted-foreground text-sm">Students ages 5 and up · All skill levels · Adults welcome</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lessons;
