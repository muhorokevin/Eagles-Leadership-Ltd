
import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Info, Briefcase, Calendar, MessageCircle, Phone, Mail, MapPin, ChevronRight, Menu, X } from 'lucide-react';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import BookingPage from './pages/Booking';
import StickyCTA from './components/StickyCTA';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Meet the Coach' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] px-4 left-1/2 -translate-x-1/2 ${
        isScrolled 
          ? 'top-4 w-[90%] max-w-5xl' 
          : 'top-6 w-[98%] max-w-7xl'
      }`}
    >
      <div 
        className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] border border-[#D1FF00]/20 shadow-2xl overflow-hidden ${
          isScrolled 
            ? 'bg-black/85 backdrop-blur-2xl rounded-full px-6 border-[#D1FF00]/40 shadow-[0_10px_40px_-10px_rgba(209,255,0,0.3)]' 
            : 'bg-black/90 backdrop-blur-xl rounded-[2.5rem] px-8 border-[#D1FF00]/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]'
        }`}
      >
        <div className={`flex items-center justify-between transition-all duration-700 ${isScrolled ? 'h-16' : 'h-24'}`}>
          <Link to="/" className="flex-shrink-0 flex items-center space-x-4 group">
            <div className={`transition-all duration-700 overflow-hidden relative ${isScrolled ? 'h-10 w-10' : 'h-16 w-16'}`}>
              <img 
                src="https://image2url.com/r2/default/images/1770627825581-cf5fbb6a-749d-482b-8a0a-a17e49f47b85.png" 
                alt="Eagles Leadership Logo" 
                className="h-full w-full object-contain brightness-110 group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-black tracking-tighter hidden xs:block text-[#D1FF00] transition-all duration-700 uppercase ${isScrolled ? 'text-sm' : 'text-xl'}`}>
                Eagles Leadership
              </span>
              {!isScrolled && (
                <span className="text-[10px] text-[#FF7F00] font-bold tracking-[0.3em] uppercase hidden md:block animate-pulse">
                  Experiential Team Building
                </span>
              )}
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 relative group overflow-hidden ${
                    location.pathname === link.path 
                      ? 'text-[#FF7F00]' 
                      : 'text-white/70 hover:text-[#D1FF00]'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#D1FF00] transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
              <Link 
                to="/booking" 
                className={`ml-6 bg-[#FF7F00] text-white rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-[#FF7F00] transition-all transform hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(255,127,0,0.4)] ${
                  isScrolled ? 'px-6 py-2.5 text-[10px]' : 'px-8 py-3.5 text-xs'
                }`}
              >
                Book Session
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 text-[#D1FF00] transition-all duration-500 rounded-full hover:bg-white/10 ${isOpen ? 'rotate-180 bg-white/10' : 'rotate-0'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden absolute left-0 right-0 mt-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
          isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-10 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className={`bg-black/95 backdrop-blur-3xl p-6 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)] border border-[#D1FF00]/20 mx-auto ${isScrolled ? 'rounded-[2.5rem] w-[92%]' : 'rounded-[3rem] w-[98%]'}`}>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-5 text-sm font-black uppercase tracking-widest rounded-3xl transition-all ${
                  location.pathname === link.path 
                    ? 'bg-[#FF7F00] text-white shadow-xl scale-[1.02]' 
                    : 'text-white/80 hover:bg-white/5 hover:text-[#D1FF00]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block mt-6 text-center bg-[#D1FF00] text-black py-5 rounded-3xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-white hover:text-black transition-all transform active:scale-95"
            >
              Book Session
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black text-white py-20 px-4 mt-0 border-t-8 border-[#D1FF00]">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
      <div className="space-y-8">
        <div className="flex flex-col space-y-4">
          <img 
            src="https://image2url.com/r2/default/images/1770627825581-cf5fbb6a-749d-482b-8a0a-a17e49f47b85.png" 
            alt="Eagles Leadership Logo" 
            className="h-24 w-auto object-contain brightness-110 self-start"
          />
          <h3 className="text-[#D1FF00] text-3xl font-black uppercase tracking-tighter">Eagles Leadership Ltd</h3>
        </div>
        <p className="text-white/60 text-lg leading-relaxed font-light">
          Experiential Team Building, Coaching, and Values-Based Leadership. Building stronger teams through purposeful experiences.
        </p>
        <div className="space-y-4 pt-4">
          <div className="flex items-center space-x-4 group">
            <div className="bg-[#FF7F00] p-3 rounded-xl transition-transform group-hover:rotate-12">
              <MapPin size={20} className="text-white" />
            </div>
            <span className="font-bold text-white/80">Mombasa & Coastal Region, Kenya</span>
          </div>
          <div className="flex items-center space-x-4 group">
            <div className="bg-[#FF7F00] p-3 rounded-xl transition-transform group-hover:rotate-12">
              <Mail size={20} className="text-white" />
            </div>
            <span className="font-bold text-white/80">P.O. Box 192 - 00618 Nairobi</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-[#D1FF00] font-black uppercase tracking-[0.3em] text-xs mb-10 pb-2 border-b-2 border-[#D1FF00]/20 inline-block">Explore</h4>
        <ul className="space-y-4">
          {[
            { label: 'Home', path: '/' },
            { label: 'Meet the Coach', path: '/about' },
            { label: 'Services', path: '/services' },
            { label: 'Contact', path: '/contact' },
            { label: 'Book Session', path: '/booking' }
          ].map((item, idx) => (
            <li key={idx}>
              <Link 
                to={item.path} 
                className="text-lg font-bold text-white/70 hover:text-[#FF7F00] transition-colors flex items-center group"
              >
                <ChevronRight size={16} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#FF7F00]" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-[#D1FF00] font-black uppercase tracking-[0.3em] text-xs mb-10 pb-2 border-b-2 border-[#D1FF00]/20 inline-block">Contact</h4>
        <div className="space-y-6">
          <div className="space-y-3">
            {[ '+254 723 670822', '+254 726 008240'].map((phone, i) => (
              <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-[#FF7F00]">
                <Phone size={18} className="text-[#FF7F00]" />
                <span className="font-bold text-sm tracking-widest">{phone}</span>
              </a>
            ))}
          </div>
          <a href="mailto:TimGathii@proton.me" className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/5 hover:border-[#D1FF00]">
            <Mail size={18} className="text-[#D1FF00]" />
            <span className="font-bold text-sm">TimGathii@proton.me</span>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-24 pt-10 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center opacity-40 text-[10px] font-black uppercase tracking-[0.4em]">
      <p>&copy; {new Date().getFullYear()} Eagles Leadership Ltd</p>
      <p className="mt-4 md:mt-0">Transformation through experience</p>
    </div>
  </footer>
);

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className={`flex-grow ${isHome ? 'pt-0' : 'pt-32 md:pt-40'}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppContent />
    </HashRouter>
  );
}
