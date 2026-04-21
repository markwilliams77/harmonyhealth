import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';

const DestinationsPage = () => {
  const destinations = [
    {
      name: "Thailand",
      tag: "Wellness Capital",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=1000",
      description: "The 'Land of Smiles' is a premier global destination for medical tourism, blending world-class healthcare with legendary hospitality. With over 60 JCI-accredited hospitals, Thailand excels in cosmetic surgery, gender reassignment, and holistic wellness retreats. Patients enjoy luxury recovery in tropical resorts, making the healing process feel like a vacation.",
      specialties: ["Cosmetic Surgery", "Wellness Retreats", "Dental Care", "Gender Reassignment"]
    },
    {
      name: "Germany",
      tag: "Precision Medicine",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1000",
      description: "Synonymous with precision and excellence, Germany is the destination of choice for complex medical cases. It leads the world in oncology, neurosurgery, and orthopedic treatments. German clinics are equipped with the latest diagnostic technology and staffed by world-renowned specialists who adhere to the highest standards of medical ethics and safety.",
      specialties: ["Oncology", "Neurosurgery", "Orthopedics", "Cardiology"]
    },
    {
      name: "Turkey",
      tag: "Aesthetic Hub",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=1000",
      description: "Strategically located between Europe and Asia, Turkey has emerged as a powerhouse in medical tourism. It is particularly famous for hair transplantation, cosmetic dentistry, and ophthalmology. Turkey offers a unique combination of high-tech medical infrastructure, affordable pricing, and the opportunity to recover amidst stunning historical landmarks.",
      specialties: ["Hair Transplant", "Cosmetic Dentistry", "Ophthalmology", "Bariatric Surgery"]
    },
    {
      name: "India",
      tag: "Advanced Surgical Care",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000",
      description: "India offers a compelling mix of advanced medical technology and highly skilled, English-speaking medical professionals. It is a global hub for cardiac surgery, organ transplants, and orthopedic procedures. Beyond modern medicine, India is the birthplace of Ayurveda, offering profound traditional healing and detox programs for holistic recovery.",
      specialties: ["Cardiac Surgery", "Organ Transplants", "Ayurveda", "Orthopedics"]
    },
    {
      name: "Dubai",
      tag: "Luxury Medical Hub",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000",
      description: "Dubai has rapidly transformed into a luxury medical destination, attracting top-tier international talent and investment. The city-state offers ultra-modern facilities like the Dubai Healthcare City, focusing on specialized care, rapid access to treatments, and a 'seven-star' patient experience that redefines medical hospitality.",
      specialties: ["Specialized Diagnostics", "Luxury Recovery", "Dermatology", "Sports Medicine"]
    },
    {
      name: "United States",
      tag: "Cutting-edge Innovation",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1000",
      description: "For those seeking the absolute cutting edge of medical science, the United States remains the gold standard. It is the epicenter of medical research, offering access to experimental clinical trials and the world's most advanced surgical robotics. The US is the destination for rare conditions and complex procedures that require unparalleled expertise.",
      specialties: ["Experimental Trials", "Robotic Surgery", "Rare Diseases", "Genomics"]
    },
    {
      name: "South Africa",
      tag: "Surgeries & Safaris",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=1000",
      description: "Offering a unique 'Surgeries and Safaris' concept, South Africa provides high-quality private healthcare at competitive rates. It is renowned for its expertise in cosmetic and reconstructive surgery, as well as heart transplants. Patients can recover in serene environments, often including world-class safari lodges.",
      specialties: ["Reconstructive Surgery", "Heart Transplants", "Fertility", "Orthopedics"]
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 bg-off-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
            alt="Global Travel" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary-teal/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">World-Class Destinations</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Our global network spans the most prestigious medical hubs, combining elite healthcare with unparalleled recovery environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="space-y-24">
          {destinations.map((dest, idx) => (
            <motion.div 
              key={dest.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="lg:w-1/2 w-full">
                <div className="relative group">
                  <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-accent-gold text-primary-teal px-8 py-3 rounded-2xl font-bold shadow-xl">
                    {dest.tag}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-teal/10 rounded-xl flex items-center justify-center text-primary-teal">
                    <Globe size={24} />
                  </div>
                  <h2 className="text-4xl md:text-5xl text-primary-teal font-serif">{dest.name}</h2>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {dest.description}
                </p>
                
                <div className="pt-4">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Key Medical Specialties</h4>
                  <div className="flex flex-wrap gap-3">
                    {dest.specialties.map(spec => (
                      <span key={spec} className="px-4 py-2 bg-white border border-gray-100 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-24 bg-primary-teal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-serif text-accent-gold mb-2">150+</div>
              <p className="text-white/60 uppercase tracking-widest text-sm font-bold">Partner Hospitals</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-accent-gold mb-2">25+</div>
              <p className="text-white/60 uppercase tracking-widest text-sm font-bold">Countries</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-accent-gold mb-2">100%</div>
              <p className="text-white/60 uppercase tracking-widest text-sm font-bold">JCI Accredited</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-primary-teal font-serif mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Our medical concierge team is ready to help you find the perfect destination and treatment plan tailored to your needs.
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-block bg-accent-gold text-primary-teal px-12 py-4 rounded-full font-bold text-xl hover:bg-primary-teal hover:text-white transition-all shadow-xl shadow-accent-gold/20"
          >
            Get in Touch
          </button>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default DestinationsPage;
