import { useState } from "react";
import { Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.string().min(1, "Please select a service"),
  genre: z.string().max(200).optional(),
  message: z.string().trim().min(1, "Please share your project details").max(2000),
});

type FormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [form, setForm] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setForm({});
      setSubmitted(false);
    }, 2000);
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const inputClass = (field: string) =>
    `w-full rounded px-4 py-3 text-sm bg-slate-800 border transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 ${
      errors[field] ? "border-red-600" : "border-amber-700"
    }`;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-black min-h-[50vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-900 rounded mb-6">
              <span className="text-amber-500 text-xs font-bold tracking-widest">HOME / CONTACT</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6">
              Let's Make Something Great Together
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Book a session, ask a question, or just say hello. The Big Mama Productions team is ready to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-green-900 border border-green-600 text-green-100 p-6 rounded-lg text-center">
                  <p className="text-lg font-bold mb-2">✓ Message Sent!</p>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      className={inputClass("name")}
                      placeholder="Your name"
                      value={form.name || ""}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      className={inputClass("phone")}
                      placeholder="(865) 000-0000"
                      value={form.phone || ""}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      className={inputClass("email")}
                      placeholder="you@example.com"
                      value={form.email || ""}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Service Interested In *</label>
                    <select
                      className={inputClass("service")}
                      value={form.service || ""}
                      onChange={(e) => updateField("service", e.target.value)}
                    >
                      <option value="">Select a service...</option>
                      <option value="recording">Recording Session</option>
                      <option value="mixing">Mixing & Mastering</option>
                      <option value="production">Music Production</option>
                      <option value="rental">Studio Rental</option>
                      <option value="other">General Inquiry / Other</option>
                    </select>
                    {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Genre / Style of Music</label>
                    <input
                      type="text"
                      className={inputClass("genre")}
                      placeholder="e.g., Soul, Hip-Hop, Gospel"
                      value={form.genre || ""}
                      onChange={(e) => updateField("genre", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Project Details / Message *</label>
                    <textarea
                      className={`${inputClass("message")} resize-none`}
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={form.message || ""}
                      onChange={(e) => updateField("message", e.target.value)}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-black font-bold py-3 rounded hover:bg-amber-500 transition-colors"
                  >
                    Send My Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Studio Information</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-2">Address</p>
                  <a
                    href="https://maps.google.com/?q=418+Highland+View+Drive+Knoxville+TN+37920"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
                    <span>418 Highland View Drive, Knoxville, TN 37920</span>
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-2">Phone</p>
                  <a
                    href="tel:8657738466"
                    className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-amber-500" />
                    <span>(865) 773-8466</span>
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-2">SoundCloud</p>
                  <a
                    href="https://soundcloud.com/big-mama-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    soundcloud.com/big-mama-studio
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-2">Facebook</p>
                  <a
                    href="https://www.facebook.com/norbert.stovall.1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    facebook.com/norbert.stovall.1
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-bold mb-2">Yelp</p>
                  <a
                    href="https://www.yelp.com/biz/big-mamas-recording-studio-knoxville"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    Big Mama's Recording Studio
                  </a>
                </div>

                <div className="pt-6 border-t border-amber-900">
                  <p className="text-gray-400 italic">For fastest response, call Norbert directly at (865) 773-8466</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 mb-6 text-lg font-bold">Find Us in Knoxville, Tennessee</p>
          <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Big Mama Productions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.0269269269266!2d-83.91166369999999!3d35.94083999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c6f4b5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2s418%20Highland%20View%20Dr%2C%20Knoxville%2C%20TN%2037920!5e0!3m2!1sen!2sus!4v1234567890"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 py-16 border-t border-amber-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-6">Prefer to call? Reach Norbert directly.</p>
          <a
            href="tel:8657738466"
            className="inline-block text-5xl font-bold text-amber-500 hover:text-amber-400 transition-colors mb-8"
          >
            (865) 773-8466
          </a>
          <p className="text-gray-400">
            Or book via <a href="https://www.facebook.com/norbert.stovall.1/" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400">Facebook →</a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
