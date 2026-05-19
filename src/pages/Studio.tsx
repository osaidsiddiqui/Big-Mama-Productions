import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Headphones, Zap, Volume2 } from "lucide-react";

const Studio = () => {
  const galleryItems = [
    "Main Recording Room",
    "Vocal Booth",
    "Control Room / Mixing Console",
    "Drum Kit Setup",
    "Microphone Setup",
    "Guitar Racks",
    "Studio Monitors",
    "Keyboard Station",
    "Lounge / Artist Waiting Area",
    "Exterior — 418 Highland View Drive",
    "Session in Progress",
    "Norbert at the Console",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-black min-h-[50vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold tracking-widest">HOME / STUDIO</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6">
              Take a Look Inside Big Mama Productions
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our studio in Knoxville, TN is designed for one thing — helping you make great music.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-white font-bold mb-12 text-center">Studio Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item}
                className="bg-gray-800 aspect-square rounded-lg overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <div className="text-center px-6">
                  <p className="text-gray-400 text-sm">{item}</p>
                  <p className="text-gray-600 text-xs mt-2">Replace with real studio photos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Highlight */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold tracking-widest">OUR GEAR</span>
            </div>
            <h2 className="font-serif text-4xl text-white font-bold">Professional Equipment. Professional Results.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Headphones className="w-12 h-12 text-amber-500" />,
                title: "Recording Gear",
                description:
                  "Industry-standard microphones, preamps, and DI boxes for capturing every instrument and voice with clarity.",
              },
              {
                icon: <Zap className="w-12 h-12 text-amber-500" />,
                title: "Mixing Console & DAW",
                description:
                  "Professional mixing console paired with modern DAW software for full analog and digital workflow.",
              },
              {
                icon: <Volume2 className="w-12 h-12 text-amber-500" />,
                title: "Studio Monitors & Acoustics",
                description: "Precision studio monitors in a properly treated acoustic space — what you hear is exactly what you get.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-amber-700 p-8 rounded-lg text-center hover:border-amber-500 transition-colors"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl text-white font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SoundCloud */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl text-white font-bold mb-6">Listen to Productions From This Studio</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Every track on our SoundCloud is a testament to what's possible when passion meets a professional studio environment.
          </p>
          <a
            href="https://soundcloud.com/big-mama-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 text-black font-bold px-10 py-4 hover:bg-amber-500 transition-colors text-lg"
          >
            Listen on SoundCloud →
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Studio;
