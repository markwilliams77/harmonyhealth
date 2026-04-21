import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Sparkles, 
  Hospital, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Globe,
  Calendar,
  Plane,
  Phone,
  Mail
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-teal/70 via-primary-teal/50 to-primary-teal/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-accent-gold font-medium tracking-[0.2em] uppercase mb-4">
            Elite Medical Concierge
          </span>
          <h1 className="text-5xl md:text-7xl text-white leading-[1.1] mb-6">
            Making World-Class Medical Care accessible and Affordable.
          </h1>
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
            Access elite surgeons and luxury recovery retreats in Thailand, Germany, India, and Turkey at a fraction of the cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent-gold text-primary-teal px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl shadow-accent-gold/20 flex items-center justify-center gap-2 group"
            >
              Start Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/treatments')}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
            >
              View Treatments
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-white/30" />
      </motion.div>
    </section>
  );
};

const DualServiceSplit = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary-teal mb-4">Tailored Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you seek life-saving treatments or transformative wellness, we bridge the gap between world-class medicine and luxury hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ y: -10 }} className="relative group overflow-hidden rounded-3xl h-[500px]">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" alt="Advanced Medical" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-teal via-primary-teal/40 to-transparent" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                <Stethoscope size={32} />
              </div>
              <h3 className="text-3xl mb-4">Advanced Medical</h3>
              <p className="text-white/80 mb-6 text-lg">Oncology, Robotic Surgery, IVF, and Transplants performed by specialists.</p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {['Oncology', 'Robotic Surgery', 'IVF', 'Transplants'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium">
                    <ShieldCheck size={16} className="text-accent-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/treatments" className="w-fit flex items-center gap-2 text-accent-gold font-bold group">
                Learn More <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="relative group overflow-hidden rounded-3xl h-[500px]">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000" alt="Wellness & Longevity" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-teal via-primary-teal/40 to-transparent" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={32} />
              </div>
              <h3 className="text-3xl mb-4">Wellness & Longevity</h3>
              <p className="text-white/80 mb-6 text-lg">Anti-Ageing, Ayurvedic Retreats, and Cosmetic Surgery in luxury environments.</p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {['Anti-Ageing', 'Ayurvedic', 'Cosmetic', 'Detox'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium">
                    <ShieldCheck size={16} className="text-accent-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/treatments" className="w-fit flex items-center gap-2 text-accent-gold font-bold group">
                Explore Wellness <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SimplifiedJourney = () => {
  const steps = [
    { number: '01', icon: Calendar, title: 'Consultation', description: 'Free tele-consults with international specialists to discuss your needs.' },
    { number: '02', icon: Plane, title: 'Planning', description: 'We handle everything: visas, flights, and 5-star hotel bookings.' },
    { number: '03', icon: Hospital, title: 'Treatment', description: 'State-of-the-art facilities and elite surgical teams dedicated to you.' },
    { number: '04', icon: Sparkles, title: 'Recovery', description: 'Heal in paradise with 24/7 concierge support and luxury care.' },
  ];

  return (
    <section id="journey" className="py-24 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-5xl text-primary-teal mb-6">A Seamless Path to Health</h2>
          <p className="text-gray-600 text-lg">We simplify medical travel, ensuring you focus only on your recovery.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative p-8 rounded-3xl glass border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-teal text-white rounded-xl flex items-center justify-center font-serif text-xl font-bold shadow-lg">{step.number}</div>
              <div className="mb-6 text-primary-teal group-hover:scale-110 transition-transform duration-500"><step.icon size={40} strokeWidth={1.5} /></div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DestinationCard = ({ name, image, tag }: any) => (
  <motion.div whileHover={{ y: -10 }} className="relative group rounded-3xl overflow-hidden h-[450px] shadow-lg">
    <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute top-6 right-6">
      <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/30">{tag}</span>
    </div>
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <h4 className="text-3xl text-white font-serif mb-2">{name}</h4>
      <div className="flex items-center gap-2 text-white/70 text-sm mb-6"><Globe size={14} /><span>Global Excellence, Local Care</span></div>
      <Link to="/destinations" className="w-full py-3 bg-white text-primary-teal rounded-xl font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center">Learn More</Link>
    </div>
  </motion.div>
);

const InteractiveDestinations = () => {
  const destinations = [
    { name: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=1000', tag: 'Wellness Capital' },
    { name: 'Germany', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1000', tag: 'Precision Medicine' },
    { name: 'Turkey', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=1000', tag: 'Aesthetic Hub' },
    { name: 'India', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000', tag: 'Advanced Surgical Care' },
    { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000', tag: 'Luxury Medical Hub' },
  ];

  const items = [...destinations, ...destinations, ...destinations];

  return (
    <section id="destinations" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Network</span>
        <h2 className="text-4xl md:text-5xl text-primary-teal mb-4">Global Destinations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">Partnered with JCI-accredited hospitals in the world's most sought-after medical hubs.</p>
      </div>

      <div className="relative">
        <motion.div 
          className="flex gap-6"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear",
          }}
          style={{ width: "max-content" }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {items.map((dest, idx) => (
            <div key={idx} className="w-[320px] sm:w-[450px] flex-shrink-0">
              <DestinationCard {...dest} />
            </div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      <div className="mt-20 text-center">
        <Link to="/destinations" className="inline-flex items-center gap-2 bg-primary-teal text-white px-8 py-4 rounded-full font-bold hover:bg-primary-teal/90 transition-all group shadow-lg hover:shadow-xl">
          Explore All Locations <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

const PostTreatmentCare = () => {
  return (
    <section className="py-24 bg-primary-teal text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Beyond the Surgery:<br /><span className="text-accent-gold">Continuous Care.</span></h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">Our commitment doesn't end at the hospital. We provide a complete support ecosystem for your journey home.</p>
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: 'Home Doctor Coordination', desc: 'Detailed medical reports and local GP coordination.' },
                { icon: Clock, title: '24/7 Concierge Support', desc: 'Personal assistants available around the clock.' },
                { icon: Stethoscope, title: 'Virtual Follow-ups', desc: 'Video consultations with your surgeon post-op.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><item.icon size={24} className="text-accent-gold" /></div>
                  <div><h4 className="text-xl font-bold mb-1">{item.title}</h4><p className="text-white/60">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" alt="Care Support" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { quote: "The Bone Marrow Transplant in India was a life-saving decision. The medical team's expertise was truly exceptional.", author: "Ann Langat", role: "Bone Marrow Transplant", location: "India" },
    { quote: "Traveling from Kenya for a Kidney Transplant was daunting, but Harmony Health made it seamless.", author: "Michael Ajwang", role: "Kidney Transplant", location: "India" },
    { quote: "My orthopedic surgery in India allowed me to walk pain-free again. The rehabilitation support was outstanding.", author: "Lime", role: "Orthopaedic", location: "India" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-4 block">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl text-primary-teal mb-6">Voices of Recovery</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-off-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col justify-between">
              <p className="text-gray-700 italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div><h4 className="font-bold text-primary-teal">{t.author}</h4><p className="text-gray-500 text-sm">{t.role} • {t.location}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <>
      <Hero />
      <DualServiceSplit />
      <SimplifiedJourney />
      <InteractiveDestinations />
      <PostTreatmentCare />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default LandingPage;