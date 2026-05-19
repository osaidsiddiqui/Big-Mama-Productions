import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Music } from "lucide-react";

const Portfolio = () => {
  const tracks = [
    {
      title: "Lizabeth Alabama Mix",
      type: "Single Track",
      desc: "Professional mix showcasing vocal clarity and dynamic range.",
    },
    {
      title: "Mean MIX",
      type: "Single Track",
      desc: "High-energy production with layered instrumentation and pristine audio quality.",
    },
    {
      title: "Suds In The Bucket MIX",
      type: "Single Track",
      desc: "Country track featuring balanced vocals and acoustic instrumentation.",
    },
    {
      title: "Three Wooden Crosses - Vocals Fixed Rev. 3",
      type: "Single Track",
      desc: "Gospel-inspired vocal recording with professional mastering.",
    },
    {
      title: "John Arnett - Mixes for Approval",
      type: "Playlist",
      desc: "Collection of multiple mixes and productions from recent sessions.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-black min-h-[50vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold tracking-widest">HOME / PORTFOLIO</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6">
              Featured Tracks & Productions
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our latest recordings, mixes, and productions from Big Mama Studio.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tracks */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-white font-bold mb-12 text-center">Now Playing</h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Track 1 - Lizabeth Alabama Mix */}
            <div className="bg-black border border-amber-700 rounded-lg overflow-hidden hover:border-amber-500 transition-colors">
              <div className="p-6 border-b border-amber-700">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-amber-900 rounded text-amber-500 text-xs font-bold mb-2">
                      FEATURED TRACK
                    </span>
                    <h3 className="text-white font-bold text-lg">Lizabeth Alabama Mix</h3>
                    <p className="text-gray-400 text-sm mt-1">Professional mix showcasing vocal clarity and dynamic range.</p>
                  </div>
                  <Music className="w-6 h-6 text-amber-500 flex-shrink-0" />
                </div>
              </div>
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
            <div className="bg-black border border-amber-700 rounded-lg overflow-hidden hover:border-amber-500 transition-colors">
              <div className="p-6 border-b border-amber-700">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-amber-900 rounded text-amber-500 text-xs font-bold mb-2">
                      FEATURED TRACK
                    </span>
                    <h3 className="text-white font-bold text-lg">Mean MIX</h3>
                    <p className="text-gray-400 text-sm mt-1">High-energy production with layered instrumentation and pristine audio quality.</p>
                  </div>
                  <Music className="w-6 h-6 text-amber-500 flex-shrink-0" />
                </div>
              </div>
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
            <div className="bg-black border border-amber-700 rounded-lg overflow-hidden hover:border-amber-500 transition-colors">
              <div className="p-6 border-b border-amber-700">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-amber-900 rounded text-amber-500 text-xs font-bold mb-2">
                      FEATURED TRACK
                    </span>
                    <h3 className="text-white font-bold text-lg">Suds In The Bucket MIX</h3>
                    <p className="text-gray-400 text-sm mt-1">Country track featuring balanced vocals and acoustic instrumentation.</p>
                  </div>
                  <Music className="w-6 h-6 text-amber-500 flex-shrink-0" />
                </div>
              </div>
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
            <div className="bg-black border border-amber-700 rounded-lg overflow-hidden hover:border-amber-500 transition-colors">
              <div className="p-6 border-b border-amber-700">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-amber-900 rounded text-amber-500 text-xs font-bold mb-2">
                      FEATURED TRACK
                    </span>
                    <h3 className="text-white font-bold text-lg">Three Wooden Crosses - Vocals Fixed Rev. 3</h3>
                    <p className="text-gray-400 text-sm mt-1">Gospel-inspired vocal recording with professional mastering.</p>
                  </div>
                  <Music className="w-6 h-6 text-amber-500 flex-shrink-0" />
                </div>
              </div>
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay; encrypted-media"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/342915687&color=%23c9962b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>

            {/* Track 5 - John Arnett Playlist */}
            <div className="bg-black border border-amber-700 rounded-lg overflow-hidden hover:border-amber-500 transition-colors">
              <div className="p-6 border-b border-amber-700">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-amber-900 rounded text-amber-500 text-xs font-bold mb-2">
                      PLAYLIST
                    </span>
                    <h3 className="text-white font-bold text-lg">John Arnett - Mixes for Approval</h3>
                    <p className="text-gray-400 text-sm mt-1">Collection of multiple mixes and productions from recent sessions.</p>
                  </div>
                  <Music className="w-6 h-6 text-amber-500 flex-shrink-0" />
                </div>
              </div>
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
        </div>
      </section>

      {/* More on SoundCloud */}
      <section className="bg-black py-16 border-t border-amber-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-white font-bold mb-4">Explore More Work</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            These are just a few of our recent productions. Visit our SoundCloud to hear more tracks, productions, and mixes from Big Mama Studio.
          </p>
          <a
            href="https://soundcloud.com/big-mama-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 text-black font-bold px-10 py-4 hover:bg-amber-500 transition-colors text-lg"
          >
            Visit SoundCloud Profile →
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
