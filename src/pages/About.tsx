import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const About = () => {
  const timeline = [
    { era: "1970s", title: "Studio Founded", desc: "Studio founded by Norbert Stovall in Knoxville, TN. First artists record soul and gospel tracks." },
    { era: "1980s", title: "Regional Growth", desc: "Reputation grows across East Tennessee. R&B and blues artists make Big Mama their home studio." },
    { era: "1990s", title: "Genre Expansion", desc: "Expansion of services. Hip-hop and contemporary R&B production added. Regional recognition grows." },
    { era: "2000s", title: "Digital Integration", desc: "Digital era integration. Modern recording technology added while preserving analog character." },
    { era: "Today", title: "Living Legacy", desc: "Still recording, still producing, still serving the Knoxville music community with the same passion." },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-black min-h-[50vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold tracking-widest">HOME / ABOUT</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6">
              The Story Behind Big Mama Productions
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Five decades of music, community, and craft — all rooted in Knoxville, Tennessee.
            </p>
          </div>
        </div>
      </section>

      {/* Studio History */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-4">
                <span className="text-amber-500 text-xs font-bold">OUR HISTORY</span>
              </div>
              <h2 className="font-serif text-4xl text-white font-bold mb-6">From the 1970s to Today — A Living Legacy</h2>

              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Big Mama Productions was born in Knoxville, Tennessee during the creative explosion of the 1970s. Founded by Norbert Stovall, the studio quickly became a trusted home for local and regional artists who needed more than just a room with microphones — they needed a place that understood their music and respected their vision.
                </p>

                <p>
                  Through the 1980s and 1990s, Big Mama Recording Studios built a reputation that extended well beyond Knoxville. Artists from across East Tennessee and neighboring states made the drive to Highland View Drive knowing they'd leave with something special. The studio's walls absorbed decades of soul, gospel, R&B, hip-hop, and blues — every genre finding its voice on our equipment.
                </p>

                <p>
                  Today, Big Mama Productions continues that same tradition. The studio has evolved with the times — updated gear, modern digital workflow — but the soul of the place hasn't changed. It's still about the music, the artist, and the community. That's the Big Mama way.
                </p>
              </div>
            </div>

            <div className="md:order-1 h-96 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Add vintage studio photo or historical image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Bio */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Add Norbert Stovall portrait photo here</span>
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-4">
                <span className="text-amber-500 text-xs font-bold">MEET THE FOUNDER</span>
              </div>
              <h2 className="font-serif text-4xl text-white font-bold mb-6">Norbert Stovall — Producer, Engineer & Music Community Pillar</h2>

              <div className="space-y-4 text-gray-400 leading-relaxed mb-8">
                <p>
                  Norbert Stovall is the heart and soul of Big Mama Productions. With over five decades of hands-on experience as a recording engineer, music producer, and artist himself, Norbert brings a rare combination of technical mastery and deep musical instinct to every session that walks through the studio door.
                </p>

                <p>
                  His philosophy is simple: every artist deserves to be heard clearly, recorded honestly, and treated with respect. Whether you're a first-time vocalist or a veteran band, Norbert and his team will work tirelessly to help you sound your best.
                </p>

                <p>
                  Beyond the studio, Norbert has been a longtime contributor to Knoxville's music community — mentoring young artists, supporting local events, and keeping independent music alive in East Tennessee.
                </p>
              </div>

              <p className="text-gray-400 mb-6">
                <strong className="text-amber-500">Want to work with Norbert directly?</strong>
              </p>
              <Link
                to="/contact"
                className="inline-block bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Details */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold">THE STUDIO</span>
            </div>
            <h2 className="font-serif text-4xl text-white font-bold">A Professional Environment Built for Great Music</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎚️",
                title: "Professional Equipment",
                desc: "Vintage and modern gear combined — analog warmth meets digital precision. Microphones, preamps, monitors, and consoles selected for optimal sound.",
              },
              {
                icon: "🎵",
                title: "Comfortable Recording Environment",
                desc: "Designed so artists feel at home. Great acoustics, relaxed atmosphere, and an engineer who listens.",
              },
              {
                icon: "📍",
                title: "Conveniently Located",
                desc: "418 Highland View Drive, Knoxville, TN 37920 — easy to find, private, and fully equipped for your session.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-black border border-amber-700 p-8 rounded-lg hover:border-amber-500 transition-colors text-center">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-bold text-white mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold">MILESTONES</span>
            </div>
            <h2 className="font-serif text-4xl text-white font-bold">Five Decades of Sound</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-8 mb-12 relative">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-amber-600 rounded-full border-4 border-black"></div>
                  {i < timeline.length - 1 && <div className="w-1 h-24 bg-amber-600 mt-2"></div>}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="inline-block px-3 py-1 bg-amber-900 rounded mb-2">
                    <span className="text-amber-500 text-xs font-bold">{item.era}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 border-t border-amber-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-white font-bold mb-4">Come See the Studio for Yourself</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Schedule a studio tour or book your first session with Big Mama Productions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
