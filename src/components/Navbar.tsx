import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '/destinations' },
    { name: 'Treatments', href: '/treatments' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group" onClick={() => window.scrollTo(0, 0)}>
          <img 
            src="/Logo.png" 
            alt="Harmony Health Logo" 
            className="h-20 w-auto object-contain transition-transform group-hover:scale-105" 
            style={{ mixBlendMode: (isScrolled || !isHome) ? 'multiply' : 'normal' }}
            referrerPolicy="no-referrer" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-medium ${isScrolled || !isHome ? 'text-gray-700' : 'text-white/90'}`}>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-accent-gold transition-colors">{link.name}</Link>
          ))}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover:text-accent-gold transition-colors"
          >
            Start Your Journey
          </button>
          <button className="bg-primary-teal text-white px-6 py-2.5 rounded-full hover:bg-primary-teal/90 transition-all hover:shadow-lg hover:shadow-primary-teal/20">
            Download Brochure
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} className="text-primary-teal" />
          ) : (
            <Menu size={28} className={isScrolled || !isHome ? 'text-primary-teal' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-800">{link.name}</Link>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="text-xl text-left font-medium text-gray-800"
            >
              Start Your Journey
            </button>
            <button onClick={() => setIsMobileMenuOpen(false)} className="bg-primary-teal text-white px-6 py-4 rounded-xl text-center font-bold">
              Download Brochure
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
