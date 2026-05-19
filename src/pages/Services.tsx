import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Music, Volume2, Zap, Radio } from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F399ff72cb63c41b2b30d489abe63daf6%2Fd310a15a92894bbf88af34cab54040ee?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F399ff72cb63c41b2b30d489abe63daf6%2F95fd238fddf54a56b3cc8fea9c74a980?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F399ff72cb63c41b2b30d489abe63daf6%2F5796c91eaff3485daf13302fd86416b4?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F399ff72cb63c41b2b30d489abe63daf6%2F9ddd5637cc41408ea7f08dc4ca669140?format=webp&width=800&height=1200",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-black min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold tracking-widest">HOME / SERVICES</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6">
              Everything Your Music Needs Under One Roof
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Big Mama Productions offers professional recording, mixing, mastering, production, and studio rental in Knoxville, TN.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1 - Recording */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden">
              <img
                src={serviceImages[0]}
                alt="Recording session"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-4">
                <span className="text-amber-500 text-xs font-bold">SERVICE 01</span>
              </div>
              <h2 className="font-serif text-4xl text-white font-bold mb-4">Professional Recording Sessions</h2>
              <p className="text-gray-400 mb-6">
                Whether you're laying down your first demo or tracking a full album, our studio is built to capture every nuance of your performance. We record all genres and all formats — from solo vocals to full live bands.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Vocal recording (lead & backing)",
                  "Live band tracking",
                  "Solo instrument recording",
                  "Full album & EP recording",
                  "Demo sessions for new artists",
                  "Voiceover & spoken word recording",
                  "Podcast & audio production",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="text-amber-500">✓</span> {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 mb-6">
                <strong>Genres:</strong> Soul · R&B · Gospel · Hip-Hop · Blues · Country · Rock · Jazz · Spoken Word
              </p>
              <Link
                to="/contact"
                className="inline-block bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors"
              >
                Book a Recording Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 - Mixing & Mastering */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-4">
                <span className="text-amber-500 text-xs font-bold">SERVICE 02</span>
              </div>
              <h2 className="font-serif text-4xl text-white font-bold mb-4">Mixing & Mastering That Makes Your Music Shine</h2>
              <p className="text-gray-400 mb-6">
                Raw recordings become polished, powerful tracks in our mixing and mastering suite. We combine the warmth of vintage analog processing with the precision of modern digital tools to give your music the sound it deserves — whether it's going to streaming platforms, radio, or CD.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Full stereo mixing",
                  "Multi-track mixing",
                  "Mastering for Spotify, Apple Music, and streaming",
                  "Mastering for CD and physical release",
                  "Stem mixing",
                  "Audio restoration and cleanup",
                  "Vocal tuning and timing correction",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="text-amber-500">✓</span> {item}
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-block bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors"
              >
                Request a Mix Quote
              </Link>
            </div>
            <div className="h-96 rounded-lg overflow-hidden">
              <img
                src={serviceImages[1]}
                alt="Mixing console"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 - Production */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-96 rounded-lg overflow-hidden">
              <img
                src={serviceImages[2]}
                alt="Production setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-4">
                <span className="text-amber-500 text-xs font-bold">SERVICE 03</span>
              </div>
              <h2 className="font-serif text-4xl text-white font-bold mb-4">Full Music Production — From Concept to Completion</h2>
              <p className="text-gray-400 mb-6">
                Have a melody in your head but not sure how to build it out? Our production service takes your idea and turns it into a fully realized track. Norbert Stovall brings decades of production instinct to every project — guiding the arrangement, instrumentation, and sonic direction from start to finish.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Beat production and custom instrumentals",
                  "Full song arrangement",
                  "Instrumentation and layering",
                  "Songwriting collaboration and assistance",
                  "Session musicians (available on request)",
                  "Genre-specific production: Soul, Gospel, Hip-Hop, R&B, Blues",
                  "Creative direction and A&R guidance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="text-amber-500">✓</span> {item}
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-block bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors"
              >
                Start a Production Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4 - Studio Rental */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-4">
                <span className="text-amber-500 text-xs font-bold">SERVICE 04</span>
              </div>
              <h2 className="font-serif text-4xl text-white font-bold mb-4">Rent the Studio on Your Terms</h2>
              <p className="text-gray-400 mb-6">
                Need the space for your own session, rehearsal, or independent production? Big Mama Productions offers flexible studio rental by the hour or by the day. The facility is fully equipped, private, and available to musicians, podcasters, voice actors, and content creators.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Full studio access",
                  "All in-house equipment included",
                  "Optional engineer add-on available",
                  "Hourly and full-day rates",
                  "Private, secure, quiet facility",
                  "Comfortable lounge/waiting area",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="text-amber-500">✓</span> {item}
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-block bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors"
              >
                Inquire About Studio Rental
              </Link>
            </div>
            <div className="h-96 rounded-lg overflow-hidden">
              <img
                src={serviceImages[3]}
                alt="Studio rental"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="border border-amber-700 bg-black p-8 rounded max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl text-white font-bold mb-4">Pricing & Availability</h3>
            <p className="text-gray-400 mb-6">
              Rates vary depending on session length, services required, and project scope. Contact us directly for a custom quote — we work with artists at all budget levels.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors"
            >
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
