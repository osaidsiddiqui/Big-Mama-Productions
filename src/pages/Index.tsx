import { Link } from "react-router-dom";
import { Music, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  const genres = ["Soul", "R&B", "Gospel", "Hip-Hop", "Blues", "Country", "Jazz", "Rock", "Spoken Word", "Voiceover", "Indie", "Funk"];

  const steps = [
    { num: 1, icon: "🎤", title: "Book Your Session", desc: "Contact us to schedule your recording date and discuss your project needs." },
    { num: 2, icon: "🎵", title: "Come to the Studio", desc: "Arrive at 418 Highland View Drive. We'll get you set up, comfortable, and ready to record." },
    { num: 3, icon: "🎚️", title: "Record & Produce", desc: "Our engineer and producer work with you to capture your best performance and sound." },
    { num: 4, icon: "🏆", title: "Take Home Your Music", desc: "Walk out with professionally recorded, mixed, and mastered tracks ready to release." },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center pt-20 bg-black overflow-hidden">
        <div className="absolute inset-0">
          {/* Dark gradient overlay on left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent z-5" />
        </div>

        <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold tracking-widest">KNOXVILLE'S LEGENDARY RECORDING STUDIO</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-6">
              Where Great Music<br />Gets Made.<br />Since the 1970s.
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
              Big Mama Productions has been the creative heartbeat of Knoxville, Tennessee for over five decades — recording soul, R&B, gospel, hip-hop, and everything in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors text-center"
              >
                Book a Session
              </Link>
              <a
                href="https://soundcloud.com/big-mama-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-amber-600 text-amber-500 font-bold px-8 py-3 hover:bg-amber-900 transition-colors text-center"
              >
                Listen on SoundCloud
              </a>
            </div>
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500" />
              📞 Call us: (865) 773-8466
            </div>
          </div>

          {/* Right - Drum Kit Image */}
          <div className="hidden md:flex justify-end">
            <div className="relative w-96 h-96">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F3ffd311c1c884c6186473f7187f162a1%2Fd17ee37098924cfa8caa86e7058e9e9c?format=webp&width=800&height=1200"
                alt="Blue sparkle drum kit"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="bg-amber-900 py-12 border-y border-amber-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="text-3xl">🎙️</span>
              <p className="text-white font-bold text-lg mt-2">Est. 1970s</p>
              <p className="text-amber-200 text-sm">Five Decades of Recording Excellence</p>
            </div>
            <div>
              <span className="text-3xl">📍</span>
              <p className="text-white font-bold text-lg mt-2">Knoxville, TN</p>
              <p className="text-amber-200 text-sm">Proudly Rooted in East Tennessee</p>
            </div>
            <div>
              <span className="text-3xl">🎵</span>
              <p className="text-white font-bold text-lg mt-2">50+ Years</p>
              <p className="text-amber-200 text-sm">Of Professional Studio Experience</p>
            </div>
            <div>
              <span className="text-3xl">🎚️</span>
              <p className="text-white font-bold text-lg mt-2">All Genres</p>
              <p className="text-amber-200 text-sm">Soul · R&B · Gospel · Hip-Hop · Blues</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-600">Add studio interior or Norbert portrait photo</span>
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-4">
                <span className="text-amber-500 text-xs font-bold">WHO WE ARE</span>
              </div>
              <h2 className="font-serif text-4xl text-white font-bold mb-6">More Than a Studio. A Knoxville Institution.</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Big Mama Productions — also known as Big Mama Recording Studios — was founded by Norbert Stovall right here in Knoxville, Tennessee. For more than fifty years, this studio has opened its doors to artists from across the region, helping them capture their sound with honesty, craft, and soul. We don't just record tracks — we build legacies.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                From first-time artists to seasoned performers, every session at Big Mama is treated with the same dedication and respect.
              </p>
              <Link
                to="/about"
                className="inline-block bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold">WHAT WE OFFER</span>
            </div>
            <h2 className="font-serif text-4xl text-white font-bold mb-4">Full-Service Recording Studio in the Heart of Knoxville</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From raw demos to polished masters — we handle every stage of your music.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { icon: "🎙️", title: "Recording Sessions", desc: "State-of-the-art multi-track recording for solo artists, bands, vocalists, and voice-over work. All genres welcome." },
              { icon: "🎚️", title: "Mixing & Mastering", desc: "Professional mixing and mastering that blends vintage analog warmth with modern digital precision. Radio-ready results." },
              { icon: "🎵", title: "Music Production", desc: "Full song production from concept to final mix. Beat building, arrangement, instrumentation, and creative direction." },
              { icon: "🏠", title: "Studio Rental", desc: "Rent our fully equipped facility by the hour or by the day. Perfect for rehearsals, independent sessions, and podcasts." },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-black border border-amber-700 p-6 rounded-lg hover:border-amber-500 transition-colors"
              >
                <span className="text-4xl block mb-4">{service.icon}</span>
                <h3 className="font-bold text-white mb-3 text-lg">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                <Link to="/services" className="text-amber-500 hover:text-amber-400 text-sm font-bold">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-block bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* SOUNDCLOUD FEATURE */}
      <section className="bg-black py-20 border-y border-amber-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold">HEAR THE WORK</span>
            </div>
            <h2 className="font-serif text-4xl text-white font-bold mb-4">Listen to Real Recordings From Big Mama Productions</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Every track on our SoundCloud is a testament to what's possible when passion meets a professional studio environment. Press play and hear Knoxville's sound.
            </p>
          </div>

          {/* Featured Tracks */}
          <div className="space-y-8">
            {/* Track 1 - Lizabeth Alabama Mix */}
            <div className="bg-slate-900 rounded-lg overflow-hidden border border-amber-700 hover:border-amber-500 transition-colors">
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay; encrypted-media"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/big-mama-studio/lizabeth-alabama-mixmp3&color=%23c9962b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>

            {/* Track 2 - Mean MIX */}
            <div className="bg-slate-900 rounded-lg overflow-hidden border border-amber-700 hover:border-amber-500 transition-colors">
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay; encrypted-media"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/388495131&color=%23c9962b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>

            {/* Track 3 - Suds In The Bucket MIX */}
            <div className="bg-slate-900 rounded-lg overflow-hidden border border-amber-700 hover:border-amber-500 transition-colors">
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay; encrypted-media"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/388495116&color=%23c9962b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>

            {/* Track 4 - Three Wooden Crosses */}
            <div className="bg-slate-900 rounded-lg overflow-hidden border border-amber-700 hover:border-amber-500 transition-colors">
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay; encrypted-media"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/342915687&color=%23c9962b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>

            {/* Track 5 - John Arnett Mixes Playlist */}
            <div className="bg-slate-900 rounded-lg overflow-hidden border border-amber-700 hover:border-amber-500 transition-colors">
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay; encrypted-media"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/353605341&color=%23c9962b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://soundcloud.com/big-mama-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-600 text-black font-bold px-10 py-4 hover:bg-amber-500 transition-colors text-lg"
            >
              <Music className="w-5 h-5 inline mr-2" />
              Browse All Tracks on SoundCloud
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED GENRES */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold">GENRES WE WORK WITH</span>
            </div>
            <h2 className="font-serif text-4xl text-white font-bold">No Matter Your Sound — We've Got You Covered</h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {genres.map((genre) => (
              <span
                key={genre}
                className="px-6 py-3 border-2 border-amber-600 text-amber-500 font-semibold rounded-full hover:bg-amber-900 transition-colors"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold">HOW IT WORKS</span>
            </div>
            <h2 className="font-serif text-4xl text-white font-bold">Your Journey From Idea to Finished Track</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="inline-block bg-amber-900 rounded-full w-16 h-16 flex items-center justify-center mb-4 border-2 border-amber-600">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <span className="text-amber-500 font-bold text-2xl block mb-2">{step.num}</span>
                <h3 className="text-white font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="bg-slate-900 py-20 border-t border-amber-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold">WHAT ARTISTS SAY</span>
            </div>
            <h2 className="font-serif text-4xl text-white font-bold">Trusted by Knoxville Artists for Generations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-black border border-amber-700 p-8 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-amber-500">★</span>
                  ))}
                </div>
                <p className="text-gray-400 italic mb-6">"[Add real artist review here — name, quote, genre]"</p>
                <p className="text-white font-bold">Artist Name</p>
                <p className="text-amber-500 text-sm">Genre</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.yelp.com/biz/big-mamas-recording-studio-knoxville"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors"
            >
              Read More Reviews on Yelp →
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-slate-900 to-black py-20 border-t border-amber-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl text-white font-bold mb-4">Ready to Record Your Next Track?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Get in touch with Norbert and the Big Mama team today — sessions are filling up fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-amber-600 text-black font-bold px-10 py-4 hover:bg-amber-500 transition-colors"
            >
              Book a Session
            </Link>
            <a
              href="tel:8657738466"
              className="border-2 border-amber-600 text-amber-500 font-bold px-10 py-4 hover:bg-amber-900 transition-colors"
            >
              Call (865) 773-8466
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
