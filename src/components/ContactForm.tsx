import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Phone, Mail } from 'lucide-react';

export const ContactForm = () => {
  return (
    <section id="contact" className="py-32 bg-[#F2F2F1] relative overflow-hidden">
      {/* Decorative localized glows for extra 'pop' */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-teal/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Personalized Concierge
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl text-primary-teal mb-8 font-extralight tracking-tight"
          >
            Inquire Discretely
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg font-light"
          >
            Your journey to health begins with a confidential conversation. 
            Our elite medical consultants will respond within 4 hours.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-white/50"
        >
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-primary-teal outline-none transition-all placeholder:text-gray-300 text-lg font-light" 
                  placeholder="e.g. Alexander Hamilton" 
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-primary-teal outline-none transition-all placeholder:text-gray-300 text-lg font-light" 
                  placeholder="alexander@prestige.com" 
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Contact Number</label>
                <input 
                  type="tel" 
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-primary-teal outline-none transition-all placeholder:text-gray-300 text-lg font-light" 
                  placeholder="+91 99261 13950" 
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Specialization</label>
                <select className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-primary-teal outline-none transition-all appearance-none cursor-pointer text-lg font-light">
                  <option className="text-gray-400">Select Treatment</option>
                  <option>Oncology & Advanced Care</option>
                  <option>Cardiovascular Surgery</option>
                  <option>Orthopedic Excellence</option>
                  <option>Aesthetic Artistry</option>
                  <option>Reproductive Health</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Primary Destination</label>
                <select className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-primary-teal outline-none transition-all appearance-none cursor-pointer text-lg font-light">
                  <option className="text-gray-400">Where to?</option>
                  <option>Thailand (Wellness)</option>
                  <option>Germany (Precision)</option>
                  <option>Turkey (Artistry)</option>
                  <option>India (Surgical)</option>
                  <option>Dubai (Luxury)</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Confidential Requirements</label>
                <textarea 
                  rows={3} 
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-primary-teal outline-none transition-all placeholder:text-gray-300 resize-none text-lg font-light" 
                  placeholder="Describe your needs briefly..."
                ></textarea>
              </div>
            </div>

            <div className="pt-6">
              <button className="group flex items-center justify-between w-full p-6 bg-primary-teal text-white rounded-2xl font-medium text-xl hover:bg-primary-teal/95 transition-all shadow-lg shadow-primary-teal/20 overflow-hidden relative" type="button">
                <span className="relative z-10">Request Consultation</span>
                <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              <div className="text-center text-[10px] text-gray-300 mt-10 uppercase tracking-[0.3em] font-medium flex items-center justify-center gap-3">
                <div className="h-[1px] w-8 bg-gray-100" />
                <ShieldCheck size={12} className="text-primary-teal/30" />
                End-to-End Encryption Enabled
                <div className="h-[1px] w-8 bg-gray-100" />
              </div>
            </div>
          </form>
        </motion.div>

        <div className="mt-20 flex flex-wrap justify-center gap-x-16 gap-y-8">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-primary-teal group-hover:bg-primary-teal group-hover:text-white transition-all duration-300">
              <Phone size={16} />
            </div>
            <p className="text-xs font-bold tracking-widest text-gray-400 group-hover:text-primary-teal transition-colors">+91 99261 13950</p>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-primary-teal group-hover:bg-primary-teal group-hover:text-white transition-all duration-300">
              <Mail size={16} />
            </div>
            <p className="text-xs font-bold tracking-widest text-gray-400 group-hover:text-primary-teal transition-colors">CONCIERGE@HARMONYHEALTH.COM</p>
          </div>
        </div>
      </div>
    </section>
  );
};
