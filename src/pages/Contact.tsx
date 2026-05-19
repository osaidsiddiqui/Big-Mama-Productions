import { useState } from "react";
import { Phone, Instagram, Facebook, MapPin, Clock, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import FloatingNotes from "@/components/FloatingNotes";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().max(20).optional(),
  instrument: z.string().min(1, "Please select an instrument"),
  age: z.string().trim().min(1, "This field is required").max(200),
  experience: z.string().min(1, "Please select experience level"),
  preferredTimes: z.string().max(500).optional(),
  message: z.string().trim().min(1, "Please share your goals").max(2000),
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
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const inputClass = (field: string) =>
    `w-full rounded-lg border px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-rainbow-blue transition-all ${
      errors[field] ? "border-rainbow-red" : "border-border"
    }`;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative rainbow-gradient animate-gradient-shift py-20 md:py-28 overflow-hidden">
        <FloatingNotes variant="light" count={5} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-4" style={{ textShadow: "0 2px 15px rgba(0,0,0,0.2)" }}>
            Book a Lesson
          </h1>
          <p className="text-white/90 font-display text-lg">Reach out today — your first lesson is just one message away.</p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto -mt-16 relative z-20">
            <a href="tel:5125347753" className="bg-rainbow-red text-white rounded-2xl p-6 text-center shadow-lg hover:opacity-90 transition-opacity">
              <Phone className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-heading font-bold">Call or Text</h3>
              <p className="font-display text-lg font-bold mt-1">(512) 534-7753</p>
            </a>
            <a href="https://www.instagram.com/mississippi.seoul.music/" target="_blank" rel="noopener noreferrer" className="bg-rainbow-pink text-white rounded-2xl p-6 text-center shadow-lg hover:opacity-90 transition-opacity">
              <Instagram className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-heading font-bold">Instagram</h3>
              <p className="font-display text-sm mt-1">@mississippi.seoul.music</p>
            </a>
            <a href="https://www.facebook.com/lacy.quin" target="_blank" rel="noopener noreferrer" className="bg-rainbow-blue text-white rounded-2xl p-6 text-center shadow-lg hover:opacity-90 transition-opacity">
              <Facebook className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-heading font-bold">Facebook</h3>
              <p className="font-display text-sm mt-1">Lacy Quin</p>
            </a>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl shadow-lg p-8 rainbow-border-top">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="flex justify-center gap-2 text-3xl mb-4 animate-bounce-note">
                      🎵 🎶 🎵
                    </div>
                    <CheckCircle className="w-16 h-16 text-rainbow-green mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-extrabold mb-2">Thanks for reaching out!</h3>
                    <p className="text-muted-foreground">Lacy will be in touch within 24–48 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-display text-sm font-semibold mb-1 block">Full Name *</label>
                      <input className={inputClass("name")} value={form.name || ""} onChange={(e) => updateField("name", e.target.value)} />
                      {errors.name && <p className="text-rainbow-red text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-display text-sm font-semibold mb-1 block">Email *</label>
                        <input type="email" className={inputClass("email")} value={form.email || ""} onChange={(e) => updateField("email", e.target.value)} />
                        {errors.email && <p className="text-rainbow-red text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="font-display text-sm font-semibold mb-1 block">Phone</label>
                        <input type="tel" className={inputClass("phone")} value={form.phone || ""} onChange={(e) => updateField("phone", e.target.value)} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-display text-sm font-semibold mb-1 block">Instrument Interest *</label>
                        <select className={inputClass("instrument")} value={form.instrument || ""} onChange={(e) => updateField("instrument", e.target.value)}>
                          <option value="">Select...</option>
                          <option>Piano</option>
                          <option>Voice / Singing</option>
                          <option>Guitar</option>
                          <option>Ukulele</option>
                          <option>Multiple / Not Sure Yet</option>
                        </select>
                        {errors.instrument && <p className="text-rainbow-red text-xs mt-1">{errors.instrument}</p>}
                      </div>
                      <div>
                        <label className="font-display text-sm font-semibold mb-1 block">Experience Level *</label>
                        <select className={inputClass("experience")} value={form.experience || ""} onChange={(e) => updateField("experience", e.target.value)}>
                          <option value="">Select...</option>
                          <option>Complete Beginner</option>
                          <option>Some Experience</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                        </select>
                        {errors.experience && <p className="text-rainbow-red text-xs mt-1">{errors.experience}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="font-display text-sm font-semibold mb-1 block">Age or Who the Lessons Are For *</label>
                      <input className={inputClass("age")} value={form.age || ""} onChange={(e) => updateField("age", e.target.value)} placeholder="e.g., 8-year-old daughter, adult beginner" />
                      {errors.age && <p className="text-rainbow-red text-xs mt-1">{errors.age}</p>}
                    </div>
                    <div>
                      <label className="font-display text-sm font-semibold mb-1 block">Preferred Days/Times</label>
                      <input className={inputClass("preferredTimes")} value={form.preferredTimes || ""} onChange={(e) => updateField("preferredTimes", e.target.value)} placeholder="e.g., Weekday afternoons, Saturday mornings" />
                    </div>
                    <div>
                      <label className="font-display text-sm font-semibold mb-1 block">Message / Goals *</label>
                      <textarea className={`${inputClass("message")} min-h-[100px]`} value={form.message || ""} onChange={(e) => updateField("message", e.target.value)} placeholder="Tell us about your musical goals..." />
                      {errors.message && <p className="text-rainbow-red text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="pill-btn rainbow-gradient text-white w-full justify-center text-sm hover:opacity-90 shadow-lg">
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info Panel */}
            <div className="lg:col-span-2">
              <div className="rainbow-gradient rounded-2xl p-8 text-white relative overflow-hidden h-full">
                <FloatingNotes variant="light" count={4} />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Location</h4>
                      <p className="text-white/80 text-sm">Manhattan, NY (exact address shared upon booking)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Phone</h4>
                      <a href="tel:5125347753" className="text-white/80 text-sm hover:text-white">(512) 534-7753</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Response Time</h4>
                      <p className="text-white/80 text-sm">Typically within 24–48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Instagram className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Instagram</h4>
                      <a href="https://www.instagram.com/mississippi.seoul.music/" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm hover:text-white">
                        @mississippi.seoul.music
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Facebook className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold">Facebook</h4>
                      <a href="https://www.facebook.com/lacy.quin" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm hover:text-white">
                        Lacy Quin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
