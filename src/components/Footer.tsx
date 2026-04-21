import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/Logo.png" 
                alt="Harmony Health Logo" 
                className="h-28 w-auto object-contain bg-white rounded-lg p-1" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Harmony Health is a premium medical concierge service dedicated to connecting patients with world-class medical facilities and luxury recovery experiences globally.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-accent-gold transition-colors">Home</Link></li>
              <li><Link to="/treatments" className="hover:text-accent-gold transition-colors">Treatments</Link></li>
              <li><Link to="/destinations" className="hover:text-accent-gold transition-colors">Destinations</Link></li>
              <li><a href="#" className="hover:text-accent-gold transition-colors">Patient Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-colors">Medical Disclaimer</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© 2026 Harmony Health Medical Concierge. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
