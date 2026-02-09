
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/254723670822"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>
      
      {/* Book Now Button */}
      <Link
        to="/booking"
        className="bg-[#FF7F00] text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center space-x-2 hover:scale-105 transition-transform"
      >
        <Calendar size={20} />
        <span>Book Now</span>
      </Link>
    </div>
  );
};

export default StickyCTA;
