import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "[Add real artist review here — name, quote, genre]",
      author: "Artist Name",
      genre: "Genre",
    },
    {
      quote: "[Add real artist review here — name, quote, genre]",
      author: "Artist Name",
      genre: "Genre",
    },
    {
      quote: "[Add real artist review here — name, quote, genre]",
      author: "Artist Name",
      genre: "Genre",
    },
    {
      quote: "[Add real artist review here — name, quote, genre]",
      author: "Artist Name",
      genre: "Genre",
    },
    {
      quote: "[Add real artist review here — name, quote, genre]",
      author: "Artist Name",
      genre: "Genre",
    },
    {
      quote: "[Add real artist review here — name, quote, genre]",
      author: "Artist Name",
      genre: "Genre",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-black min-h-[50vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold tracking-widest">HOME / TESTIMONIALS</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6">
              Artists Who've Recorded at Big Mama Productions
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Decades of sessions. Hundreds of artists. Real results.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-black border border-amber-700 p-8 rounded-lg hover:border-amber-500 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-amber-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="border-t border-amber-900 pt-4">
                  <p className="text-white font-bold">{testimonial.author}</p>
                  <p className="text-amber-500 text-sm">{testimonial.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yelp CTA */}
      <section className="bg-black py-16 border-t border-amber-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-white font-bold mb-4">See What People Are Saying on Yelp</h2>
          <a
            href="https://www.yelp.com/biz/big-mamas-recording-studio-knoxville"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors"
          >
            Read Our Yelp Reviews →
          </a>
        </div>
      </section>

      {/* Facebook CTA */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-white font-bold mb-4">Follow Our Work on Facebook</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Stay up to date with sessions, new releases, and studio news from Big Mama Productions.
          </p>
          <a
            href="https://www.facebook.com/norbert.stovall.1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 text-black font-bold px-8 py-3 hover:bg-amber-500 transition-colors"
          >
            Follow on Facebook →
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
