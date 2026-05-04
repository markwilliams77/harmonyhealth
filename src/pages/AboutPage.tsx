import { motion } from 'motion/react';
import { 
  FileText, 
  Target, 
  MapPin, 
  Plane, 
  Stethoscope, 
  ShieldCheck, 
  Users, 
  MessageSquare,
  Clock,
  Compass,
  Download,
  AlertCircle,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalCotext';

const BrochureSection = ({ title, icon: Icon, children, dark = false }: any) => (
  <section className={`py-20 ${dark ? 'bg-primary-teal text-white' : 'bg-white text-primary-teal'}`}>
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 ${dark ? 'bg-white/10' : 'bg-primary-teal/5'}`}>
        <Icon size={24} className={dark ? 'text-accent-gold' : 'text-primary-teal'} />
      </div>
      <h2 className="text-3xl md:text-4xl font-serif mb-8">{title}</h2>
      <div className="text-lg leading-relaxed font-light opacity-90">
        {children}
      </div>
    </div>
  </section>
);

export default function AboutPage() {
  const { openModal } = useContactModal();
  return (
    <div className="pt-24 bg-off-white">
      {/* Cover Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary-teal">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Medical Professional"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <div className="bg-accent-gold p-1 inline-block rounded-full mb-6">
              <div className="bg-primary-teal px-6 py-2 rounded-full">
                <span className="text-accent-gold font-bold tracking-[0.3em] text-xs uppercase">Company Profile</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl text-white font-extralight tracking-tighter mb-4">About Us</h1>
            <p className="text-accent-gold text-2xl font-serif italic mb-12">Global Healthcare, Harmonized!</p>
            <a 
              href="/Harmony Health Brochure.pdf"
              download="Harmony_Health_Brochure.pdf"
              className="inline-flex items-center gap-3 bg-accent-gold text-primary-teal px-8 py-4 rounded-full font-bold hover:bg-white transition-all group shadow-xl"
            >
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download Corporate Brochure
            </a>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Values Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Statement */}
            <div className="lg:w-1/2">
              <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-6 block">Leadership Manifesto</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary-teal mb-8 leading-tight">
                "Healthcare without <br />
                <span className="italic text-accent-gold">Boundaries.</span>"
              </h2>
              <p className="text-xl font-light text-gray-600 leading-relaxed mb-12">
                At Harmony Health, we believe that access to world-class healthcare should know no boundaries. Since our inception, we’ve been committed to connecting people with the highest quality medical care, no matter where they are in the world. 
              </p>
              <div className="flex items-center gap-6 p-8 bg-off-white rounded-[2rem] border-l-4 border-accent-gold">
                <div>
                  <p className="text-2xl font-serif italic text-primary-teal mb-2">
                    "We are the bridge between need and care, urgency and comfort."
                  </p>
                  <p className="text-primary-teal font-bold text-sm tracking-widest uppercase">— Mark Williams, Founder</p>
                </div>
              </div>
            </div>

            {/* Right: Values Grid */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  title: "Clinical Excellence", 
                  desc: "Partnering only with JCI-accredited facilities and top-tier specialists.",
                  icon: ShieldCheck 
                },
                { 
                  title: "Global Integrity", 
                  desc: "Transparent coordination and ethical care standards across every border.",
                  icon: Target 
                },
                { 
                  title: "Compassionate Reach", 
                  desc: "Human-centric support that understands the vulnerability of medical travel.",
                  icon: Users 
                },
                { 
                  title: "Operational Precision", 
                  desc: "24/7 responsiveness for air repatriation and urgent medical needs.",
                  icon: Clock 
                }
              ].map((value, i) => (
                <div key={i} className="p-8 bg-primary-teal text-white rounded-[2.5rem] transition-transform hover:-translate-y-2">
                  <value.icon className="text-accent-gold mb-4" size={32} />
                  <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                  <p className="text-sm opacity-70 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2">
        <div className="bg-primary-teal text-white p-16 md:p-24 border-r border-white/5">
          <Target className="text-accent-gold mb-6" size={48} />
          <h2 className="text-4xl font-serif mb-6">Our Vision</h2>
          <p className="text-xl font-light leading-relaxed opacity-80">
            To be the world’s most trusted partner in global healthcare access, making high-quality medical treatment and safe patient transport available across every border.
          </p>
        </div>
        <div className="bg-primary-teal text-white p-16 md:p-24">
          <Compass className="text-accent-gold mb-6" size={48} />
          <h2 className="text-4xl font-serif mb-6">Our Mission</h2>
          <p className="text-xl font-light leading-relaxed opacity-80">
            To connect individuals with exceptional medical care worldwide through personalized medical tourism services and reliable air repatriation. We are committed to compassion, safety, and excellence delivering peace of mind when it matters most.
          </p>
        </div>
      </div>

      {/* Medical Tourism Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <Stethoscope className="text-accent-gold mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-serif text-primary-teal mb-6">Medical Tourism</h2>
            <p className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-8">World-Class Care, Wherever You Need It!</p>
            <p className="text-gray-600 text-xl font-light leading-relaxed">
              We specialize in connecting patients with trusted, internationally accredited hospitals and specialists around the world. Our expert team manages every aspect of your journey—from personalized treatment planning to on-ground support and post-treatment care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Personalized treatment coordination",
              "Second medical opinions from global experts",
              "Hospital and specialist matching",
              "Visa and travel assistance",
              "Accommodation and logistics support",
              "24/7 patient support and interpretation",
              "Post-treatment recovery and wellness packages"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-off-white rounded-2xl border border-gray-100">
                <ShieldCheck size={20} className="text-primary-teal" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Air Repatriation Section */}
      <section className="py-24 bg-primary-teal text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Plane className="text-accent-gold mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-serif mb-6">Air Repatriation</h2>
          <p className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-8">Safe Return. Compassionate Care. Anywhere in the World.</p>
          <p className="text-white/80 text-xl font-light leading-relaxed mb-12">
            When a medical emergency happens far from home, getting back safely becomes the top priority. We provide specialized air repatriation services across borders—delivered with speed, care, and clinical precision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Medical escorts on commercial flights",
              "Stretcher and ICU arrangements",
              "Dedicated air ambulance aircraft",
              "Ground ambulance coordination",
              "In-flight medical monitoring",
              "24/7 case management"
            ].map((item, i) => (
              <div key={i} className="p-4 border border-white/10 rounded-xl bg-white/5 text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Map */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Users className="text-accent-gold mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-serif text-primary-teal mb-4">Our Global Presence</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-light mb-12 italic">"Global Reach. Local Expertise. Trusted Partners."</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {["U.S.A", "Germany", "Turkey", "U.A.E", "Oman", "India", "Thailand", "Kenya", "South Africa"].map((loc, i) => (
                <div key={i} className="py-4 border border-gray-100 rounded-2xl flex items-center justify-center gap-2 text-primary-teal font-bold uppercase tracking-widest text-[10px]">
                  <MapPin size={12} className="text-accent-gold" /> {loc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-serif text-primary-teal mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left bg-white p-12 rounded-[3rem] shadow-sm">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 underline underline-offset-4 decoration-accent-gold">Direct Contacts</p>
              <div className="space-y-4">
                <a href="tel:+919926113950" className="flex items-center gap-4 text-primary-teal hover:text-accent-gold transition-colors">
                  <div className="w-10 h-10 bg-primary-teal/5 rounded-full flex items-center justify-center"><Clock size={16} /></div>
                  <span className="font-bold underline underline-offset-4 decoration-accent-gold/20">+91 99261 13950</span>
                </a>
                <a href="tel:+254768012638" className="flex items-center gap-4 text-primary-teal hover:text-accent-gold transition-colors">
                  <div className="w-10 h-10 bg-primary-teal/5 rounded-full flex items-center justify-center"><Phone size={16} /></div>
                  <span className="font-bold underline underline-offset-4 decoration-accent-gold/20">+254 768 012 638</span>
                </a>
                <a href="mailto:care@harmonycura.com" className="flex items-center gap-4 text-primary-teal hover:text-accent-gold transition-colors">
                  <div className="w-10 h-10 bg-primary-teal/5 rounded-full flex items-center justify-center"><MessageSquare size={16} /></div>
                  <span className="font-bold underline underline-offset-4 decoration-accent-gold/20">care@harmonycura.com</span>
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 underline underline-offset-4 decoration-accent-gold">Portals</p>
              <div className="space-y-4">
                <a href="https://www.harmonycareglobal.com" target="_blank" rel="noopener noreferrer" className="block text-primary-teal font-bold hover:text-accent-gold transition-colors truncate">www.harmonycareglobal.com</a>
                <button 
                  onClick={openModal}
                  className="block w-full bg-primary-teal text-white text-center py-4 rounded-full font-bold hover:bg-accent-gold transition-all shadow-lg"
                >
                  Request Briefing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
