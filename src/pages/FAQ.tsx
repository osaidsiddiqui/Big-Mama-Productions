import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import FloatingNotes from "@/components/FloatingNotes";

const faqs = [
  { q: "What instruments do you teach?", a: "Piano, voice (singing), guitar, and ukulele. Each instrument is available for students at all skill levels from complete beginners to advanced players.", color: "border-rainbow-red" },
  { q: "What ages do you accept?", a: "Students ages 5 and up are welcome! Lacy teaches children, teens, and adults. It's never too early — or too late — to start learning music.", color: "border-rainbow-orange" },
  { q: "How long are lessons?", a: "Lessons are typically 30 minutes (great for young beginners) or 60 minutes (recommended for teens and adults). Lesson length can be discussed and adjusted based on your needs.", color: "border-rainbow-yellow" },
  { q: "Do I need to own an instrument before starting?", a: "For your first lesson, Lacy can advise on what instrument to purchase or rent. You don't need to have everything figured out before reaching out — we'll help guide you!", color: "border-rainbow-green" },
  { q: "What styles of music do you teach?", a: "All styles! Classical, pop, rock, R&B, soul, gospel, jazz, musical theater, folk, country, and more. Lessons are tailored to the music you love.", color: "border-rainbow-blue" },
  { q: "Where are lessons held?", a: "Lessons are held in Manhattan, NY. Exact location and logistics are shared upon booking. Virtual/online lessons may also be available — ask Lacy directly.", color: "border-rainbow-purple" },
  { q: "How do I book a lesson?", a: "Simply call or text Lacy at (512) 534-7753, or fill out the contact form on our Contact page. Lacy will reach out to schedule a free introductory chat before your first lesson.", color: "border-rainbow-pink" },
  { q: "What if I need to cancel or reschedule?", a: "Life happens! Lacy asks for at least 24 hours notice for cancellations or reschedules to keep the schedule running smoothly for all students.", color: "border-rainbow-red" },
  { q: "Do you offer trial lessons?", a: "Yes! The first lesson is a relaxed, fun introduction where you can get a feel for Lacy's teaching style and discuss your goals with no pressure.", color: "border-rainbow-orange" },
  { q: "Do you teach beginners with no experience?", a: "Absolutely — beginners are especially welcome! There is zero expectation of prior knowledge. We start exactly where you are and build from there.", color: "border-rainbow-yellow" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative rainbow-gradient animate-gradient-shift py-20 md:py-28 overflow-hidden">
        <FloatingNotes variant="light" count={5} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-4" style={{ textShadow: "0 2px 15px rgba(0,0,0,0.2)" }}>
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-card rounded-xl shadow-sm border-l-4 transition-all duration-300 ${
                  openIndex === i ? faq.color : "border-border"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-heading font-bold text-sm md:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative rainbow-gradient animate-gradient-shift py-12 md:py-16 overflow-hidden">
        <FloatingNotes variant="light" count={3} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-white text-lg font-heading font-bold mb-4">Still have questions? Lacy would love to chat!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5125347753" className="pill-btn bg-white text-foreground font-bold hover:shadow-lg">
              Call (512) 534-7753
            </a>
            <Link to="/contact" className="pill-btn-outline-white">
              Send a Message →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
