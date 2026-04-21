import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  Clock, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Stethoscope
} from 'lucide-react';
import { TREATMENTS } from '../data/treatments';

const TreatmentDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const treatment = TREATMENTS.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-off-white pt-24 px-6">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-primary-teal mb-4">Treatment Not Found</h2>
          <p className="text-gray-600 mb-8">We couldn't find the medical procedure you're looking for.</p>
          <Link 
            to="/treatments" 
            className="inline-flex items-center gap-2 bg-primary-teal text-white px-8 py-3 rounded-full font-bold hover:bg-primary-teal/90 transition-all"
          >
            <ChevronLeft size={20} />
            Back to Treatments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-off-white min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={treatment.image} 
            alt={treatment.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-teal/90 via-primary-teal/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex flex-wrap items-center gap-6 mb-10 text-sm font-bold uppercase tracking-widest">
              <Link 
                to="/treatments" 
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                All Treatments
              </Link>
              <span className="w-px h-4 bg-white/20 hidden sm:block" />
              <span className="text-accent-gold">
                {treatment.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white font-serif mb-6 leading-tight">
              {treatment.name}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {treatment.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-3xl font-serif text-primary-teal mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {treatment.fullDescription}
              </p>
            </div>

            {treatment.benefits && (
              <div>
                <h2 className="text-3xl font-serif text-primary-teal mb-8">Treatment Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {treatment.benefits.map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
                    >
                      <CheckCircle2 className="text-primary-teal shrink-0" size={24} />
                      <p className="text-gray-700 font-medium">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {treatment.procedure && (
              <div>
                <h2 className="text-3xl font-serif text-primary-teal mb-8">The Procedure</h2>
                <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-primary-teal/10">
                  {treatment.procedure.steps.map((step, idx) => (
                    <div key={idx} className="relative pl-12">
                      <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-primary-teal flex items-center justify-center z-10">
                        <span className="text-primary-teal font-bold text-sm">{idx + 1}</span>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-primary-teal text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-serif mb-6">Quick Facts</h3>
              <div className="space-y-6">
                {treatment.procedure && (
                  <>
                    <div className="flex gap-4">
                      <Clock className="text-accent-gold" />
                      <div>
                        <p className="text-sm uppercase tracking-widest text-white/70 mb-2">Duration</p>
                        <p className="font-medium">{treatment.procedure.duration}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Activity className="text-accent-gold" />
                      <div>
                        <p className="text-sm uppercase tracking-widest text-white/70 mb-2">Recovery</p>
                        <p className="font-medium">{treatment.procedure.recovery}</p>
                      </div>
                    </div>
                  </>
                )}
                <div className="flex gap-4">
                  <ShieldCheck className="text-accent-gold" />
                  <div>
                    <p className="text-sm uppercase tracking-widest text-white/70 mb-2">Accreditation</p>
                    <p className="font-medium">JCI Certified Centers</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#contact');
                    }
                  }}
                  className="w-full bg-accent-gold text-primary-teal py-4 rounded-xl font-bold hover:bg-white transition-all flex items-center justify-center gap-2 group"
                >
                  Start Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-serif text-primary-teal mb-6">Specialties Included</h3>
              <div className="flex flex-wrap gap-2">
                {treatment.specialties.map(spec => (
                  <span key={spec} className="px-3 py-1.5 bg-off-white rounded-lg text-sm font-medium text-gray-600 flex items-center gap-2">
                    <Stethoscope size={14} className="text-primary-teal/60" />
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-accent-gold/10 p-8 rounded-3xl border border-accent-gold/20">
              <h3 className="text-xl font-serif text-primary-teal mb-4">Patient Advisory</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                All medical procedures carry risks. Our specialists will perform a comprehensive evaluation to determine your candidacy for this treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Treatments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif text-primary-teal mb-4">Explore More Procedures</h2>
              <p className="text-gray-600">Discover other world-class medical solutions we offer.</p>
            </div>
            <Link to="/treatments" className="text-primary-teal font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TREATMENTS.filter(t => t.id !== id).slice(0, 3).map(t => (
              <Link key={t.id} to={`/treatments/${t.id}`} className="group">
                <div className="bg-off-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-primary-teal mb-2">{t.name}</h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{t.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetailPage;
