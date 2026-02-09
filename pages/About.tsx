
import React from 'react';
import { UserCheck, Target, ShieldCheck, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Coach Profile Photo - Smaller & Circular */}
          <div className="flex justify-center">
            <div className="relative group max-w-[320px] lg:max-w-[400px]">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 bg-[#D1FF00] rounded-full scale-105 opacity-20 blur-md group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative z-10 p-2 border-4 border-[#FF7F00] rounded-full">
                <img 
                  src="https://image2url.com/r2/default/images/1770628771586-4737b7ac-e010-411d-8198-889929c0bd27.png" 
                  alt="Coach Tim Gathii" 
                  className="rounded-full shadow-2xl w-full aspect-square object-cover"
                />
              </div>

              {/* Float-in Tag */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black text-[#D1FF00] px-8 py-3 rounded-full shadow-2xl border border-[#D1FF00]/30 z-20 whitespace-nowrap">
                <h1 className="text-xl font-bold text-center">Coach Tim Gathii</h1>
              </div>
            </div>
          </div>

          {/* Story Focus */}
          <div className="space-y-6 pt-12 md:pt-0 text-center md:text-left">
            <div className="inline-block px-4 py-1 bg-[#D1FF00] rounded-full text-black font-bold text-xs mb-2 uppercase tracking-widest">
              Founder & Lead Facilitator
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              A Passion for <span className="text-[#FF7F00]">People</span> & Purpose
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tim Gathii is a people-centered leader passionate about transformation. 
              As both a pastor and a professional coach, he brings a unique blend of spiritual wisdom, 
              psychological insight, and practical leadership strategies to every engagement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Based in the beautiful coastal city of <span className="font-bold text-[#FF7F00]">Mombasa</span>, Coach Tim uses experiential learning, 
              reflection, and deep-seated values to help individuals and organizations unlock their highest potential.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
               {[
                 { text: "Corporates & Government", icon: <ShieldCheck size={18} /> },
                 { text: "Churches & Families", icon: <ShieldCheck size={18} /> },
                 { text: "Schools & Universities", icon: <ShieldCheck size={18} /> },
                 { text: "International Entities", icon: <ShieldCheck size={18} /> }
               ].map((item, i) => (
                 <div key={i} className="flex items-center space-x-3 bg-[#D1FF00]/5 p-4 rounded-xl border border-[#D1FF00]/20 shadow-sm hover:border-[#FF7F00] transition-colors">
                    <div className="text-[#FF7F00]">{item.icon}</div>
                    <span className="font-medium text-black text-sm">{item.text}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Approach Works */}
      <section className="bg-black py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#D1FF00]"></div>
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Experiential Framework</h2>
          <p className="text-[#FF7F00] font-medium uppercase tracking-[0.2em] text-xs mb-16">Methodology that Delivers</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            {/* Visual connector line (hidden on small screens) */}
            <div className="hidden md:block absolute top-[40%] left-0 w-full h-0.5 bg-[#D1FF00]/20 -translate-y-1/2 z-0"></div>
            
            {[
              { label: "Activities", sub: "engage the BODY", icon: <UserCheck size={32} /> },
              { label: "Reflection", sub: "engages the MIND", icon: <Target size={32} /> },
              { label: "Values", sub: "shape CHARACTER", icon: <ShieldCheck size={32} /> },
              { label: "Action", sub: "changes BEHAVIOR", icon: <TrendingUp size={32} /> }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className="bg-black border-2 border-[#D1FF00] p-8 rounded-full aspect-square flex flex-col items-center justify-center hover:bg-[#D1FF00] hover:text-black transition-all duration-500 shadow-2xl group w-44 h-44">
                  <div className="mb-2 group-hover:scale-110 transition-transform text-[#FF7F00] group-hover:text-black">{step.icon}</div>
                  <h3 className="font-bold text-lg">{step.label}</h3>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest mt-1">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 max-w-3xl mx-auto">
             <div className="h-0.5 w-16 bg-[#FF7F00] mx-auto mb-8"></div>
             <p className="text-xl md:text-2xl italic font-light leading-relaxed">
              "We emphasize trust, inclusion, mental wellness, and leadership growth. Our sessions aren't just fun days out; they are the catalysts for sustainable change."
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
