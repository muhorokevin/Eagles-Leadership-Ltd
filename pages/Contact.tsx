
import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#D1FF00] rounded-full text-black font-bold text-xs mb-4 uppercase tracking-widest">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6">Direct Connect</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We are here to support your team's journey. Reach out to Coach Tim through any of our official channels.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Phone Numbers Card */}
          <div className="bg-black p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7F00]/10 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="flex flex-col items-center text-center space-y-8 relative z-10">
              <div className="bg-[#FF7F00] p-6 rounded-[2rem] shadow-[0_0_30px_rgba(255,127,0,0.3)]">
                <Phone size={32} />
              </div>
              <div className="space-y-6 w-full">
                <div>
                  <p className="text-xs text-[#D1FF00] uppercase tracking-[0.3em] font-black mb-2">Primary Line</p>
                  <a href="tel:+254723670822" className="text-3xl font-black hover:text-[#D1FF00] transition-colors tracking-tight">+254 723 670822</a>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-[#D1FF00] uppercase tracking-[0.3em] font-black mb-2">Alternate Line</p>
                  <a href="tel:+254726008240" className="text-3xl font-black hover:text-[#D1FF00] transition-colors tracking-tight">+254 726 008240</a>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp / Digital Card */}
          <div className="bg-[#F8F9FA] p-10 rounded-[3rem] border border-gray-100 shadow-xl group hover:border-[#D1FF00] transition-all">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="bg-[#25D366] p-6 rounded-[2rem] text-white shadow-[0_0_30px_rgba(37,211,102,0.3)] group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-[#25D366] uppercase tracking-[0.3em] font-black">Live Support</p>
                <h2 className="text-4xl font-black text-black">WhatsApp</h2>
                <p className="text-gray-500 font-medium">Instant messaging for quick queries and consultations.</p>
              </div>
              <a 
                href="https://wa.me/254723670822" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-lg hover:shadow-2xl transition-all transform active:scale-95 text-center"
              >
                Chat with Coach
              </a>
            </div>
          </div>

          {/* Email / Address Card */}
          <div className="bg-[#D1FF00] p-10 rounded-[3rem] text-black shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex flex-col items-center text-center space-y-8 relative z-10">
              <div className="bg-black p-6 rounded-[2rem] text-[#D1FF00]">
                <Mail size={32} />
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-black/60 uppercase tracking-[0.3em] font-black mb-2">Email Address</p>
                  <a href="mailto:TimGathii@proton.me" className="text-2xl font-black hover:underline">TimGathii@proton.me</a>
                </div>
                <div className="pt-6 border-t border-black/10">
                  <p className="text-xs text-black/60 uppercase tracking-[0.3em] font-black mb-2">Mailing Address</p>
                  <p className="text-xl font-black">P.O. Box 192 - 00618 Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Region Notice */}
        <div className="mt-20 p-12 bg-black text-white rounded-[4rem] text-center relative overflow-hidden">
           <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#FF7F00]/20 -translate-y-1/2"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
             <MapPin className="mx-auto text-[#FF7F00] mb-6" size={48} />
             <h3 className="text-3xl font-black mb-4">Mombasa & Coastal Region</h3>
             <p className="text-white/60 text-lg leading-relaxed italic">
               "While our postal headquarters are in Nairobi, our heart and primary service area is the beautiful Coastal Region of Kenya. We bring transformation to your doorstep, anywhere in the country."
             </p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
