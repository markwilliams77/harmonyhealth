import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Sparkles, Activity, ArrowRight, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TREATMENTS } from '../data/treatments';
import { ContactForm } from '../components/ContactForm';

const TreatmentCard = ({ treatment }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 h-full flex flex-col"
  >
    <div className="h-48 overflow-hidden relative">
      <img 
        src={treatment.image} 
        alt={treatment.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <h4 className="text-xl font-bold mb-3 text-gray-900">{treatment.name}</h4>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
        {treatment.desc}
      </p>
      <Link 
        to={`/treatments/${treatment.id}`}
        className="inline-flex items-center gap-2 text-primary-teal font-bold text-sm hover:gap-3 transition-all"
      >
        View Details <ChevronRight size={16} />
      </Link>
    </div>
  </motion.div>
);

const TreatmentCarousel = ({ treatments }: { treatments: any[] }) => {
  // Triple the items for absolute smoothness in infinite loop
  const items = [...treatments, ...treatments, ...treatments];
  
  return (
    <div className="overflow-hidden relative w-full py-12">
      <motion.div
        className="flex gap-8"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          duration: 50,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {items.map((treatment, idx) => (
          <div
            key={idx}
            className="w-[320px] sm:w-[400px] flex-shrink-0"
          >
            <TreatmentCard treatment={treatment} />
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-off-white via-off-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-off-white via-off-white/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const TreatmentsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      title: "Advanced Medical Care",
      icon: Stethoscope,
      description: "Cutting-edge surgical procedures and specialized medical treatments using the latest technology.",
      id: "advanced"
    },
    {
      title: "Wellness & Longevity",
      icon: Sparkles,
      description: "Holistic approaches to health, focusing on rejuvenation, prevention, and long-term vitality.",
      id: "wellness"
    },
    {
      title: "Cosmetic & Aesthetics",
      icon: Activity,
      description: "Transformative aesthetic procedures performed by elite plastic surgeons in world-class facilities.",
      id: "cosmetic"
    }
  ];

  return (
    <div className="pt-24 bg-off-white min-h-screen">
      {/* Page Hero */}
      <section className="relative py-32 bg-primary-teal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" 
            alt="Treatments Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent-gold font-bold tracking-[0.2em] uppercase mb-4 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-white">World-Class Treatments</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore our curated selection of medical and wellness procedures, delivered by the world's most prestigious institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {categories.map((cat, idx) => {
            const catTreatments = TREATMENTS.filter(t => t.category === cat.title);
            return (
              <div key={cat.id} className="mb-32 last:mb-0">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary-teal/10 rounded-xl flex items-center justify-center text-primary-teal">
                        <cat.icon size={28} />
                      </div>
                      <h2 className="text-4xl text-primary-teal font-serif">{cat.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600">{cat.description}</p>
                  </div>
                </div>

                {idx === 0 ? (
                  <TreatmentCarousel treatments={catTreatments} />
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {catTreatments.map((treatment) => (
                      <TreatmentCard key={treatment.id} treatment={treatment} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Personalized Search CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#F8F8F7] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-gray-100">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl text-primary-teal font-serif mb-8">Can't find a specific treatment?</h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Our global network covers thousands of procedures. Contact our specialists for a personalized medical sourcing request.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-primary-teal text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl transition-all"
                >
                  Request Custom Search
                </button>
                <div className="flex items-center justify-center gap-4 text-primary-teal font-bold px-10 py-5">
                  <Phone size={20} />
                  <span>Call +91 99261 13950</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default TreatmentsPage;
