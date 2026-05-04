import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { useContactModal } from '../context/ContactModalCotext';

export const ContactModal = () => {
  const { isOpen, closeModal } = useContactModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    destination: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          treatment: formData.specialization,
          location: formData.destination,
          timeline: "As per requirements",
          phone: formData.phone,
          responses: [formData.name, formData.specialization, formData.destination, formData.phone, formData.requirements],
          sentTo: 'care@harmonycura.com'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Failed to send inquiry');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-primary-teal/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-off-white">
              <div>
                <h2 className="text-2xl font-serif text-primary-teal">Request Private Consultation</h2>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Harmony Health Global Network</p>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-primary-teal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-10">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="modal-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-primary-teal outline-none transition-all placeholder:text-gray-300 text-lg font-light" 
                          placeholder="John Doe" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-primary-teal outline-none transition-all placeholder:text-gray-300 text-lg font-light" 
                          placeholder="patient@example.com" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Contact Number</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-primary-teal outline-none transition-all placeholder:text-gray-300 text-lg font-light" 
                          placeholder="+1 234 567 8900" 
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Specialization</label>
                        <select 
                          required
                          value={formData.specialization}
                          onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                          className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-primary-teal outline-none transition-all appearance-none cursor-pointer text-lg font-light"
                        >
                          <option value="" disabled>Select Treatment</option>
                          <option>Oncology & Advanced Care</option>
                          <option>Cardiovascular Surgery</option>
                          <option>Orthopedic Excellence</option>
                          <option>Aesthetic Artistry</option>
                          <option>Reproductive Health</option>
                          <option>Others</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Primary Destination</label>
                        <select 
                          required
                          value={formData.destination}
                          onChange={(e) => setFormData({...formData, destination: e.target.value})}
                          className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-primary-teal outline-none transition-all appearance-none cursor-pointer text-lg font-light"
                        >
                          <option value="" disabled>Where to?</option>
                          <option>Thailand</option>
                          <option>Germany</option>
                          <option>Turkey</option>
                          <option>India</option>
                          <option>Dubai</option>
                          <option>Others</option>
                        </select>
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-1">Requirements</label>
                        <textarea 
                          rows={2} 
                          value={formData.requirements}
                          onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                          className="w-full px-0 py-2 bg-transparent border-b border-gray-200 focus:border-primary-teal outline-none transition-all placeholder:text-gray-300 resize-none text-lg font-light" 
                          placeholder="Briefly describe your medical needs..."
                        ></textarea>
                      </div>
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-xl text-xs font-medium border border-red-100 italic">
                        {error}
                      </div>
                    )}

                    <div className="pt-4">
                      <button 
                        disabled={isSubmitting}
                        className="group flex items-center justify-between w-full p-5 bg-primary-teal text-white rounded-2xl font-medium text-lg hover:bg-primary-teal/95 transition-all shadow-lg active:scale-[0.98] disabled:opacity-70" 
                        type="submit"
                      >
                        <span className="flex items-center gap-3">
                          {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <ShieldCheck size={20} />}
                          {isSubmitting ? 'Processing...' : 'Send Inquiry'}
                        </span>
                        {!isSubmitting && <ArrowRight size={20} />}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-light text-primary-teal mb-4">Thank You</h3>
                    <p className="text-gray-500 font-light mb-10 max-w-xs mx-auto text-sm leading-relaxed">
                      We've received your request. One of our care coordinators will review your details and reach out to you within the next 4 business hours to discuss your journey.
                    </p>
                    <button 
                      onClick={closeModal}
                      className="px-10 py-3 bg-primary-teal text-white rounded-xl font-medium"
                    >
                      Return to Website
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
