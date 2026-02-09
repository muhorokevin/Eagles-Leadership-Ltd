
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Lightbulb, Heart, Anchor, MapPin, ChevronDown } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-110"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop')`,
            animation: 'pan 30s linear infinite alternate'
          }}
        />
        
        {/* Glassmorphism gradient at top to blend with navbar */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent z-1"></div>

        <div className="relative z-10 max-w-5xl px-4">
          <div className="inline-block px-6 py-2 bg-[#D1FF00] text-black rounded-full font-black text-xs mb-8 uppercase tracking-[0.4em] shadow-2xl animate-bounce">
            Kenya's Premier Leadership Facilitator
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
            Building Stronger <br/>
            <span className="text-[#D1FF00] not-italic">Teams Through</span> <br/>
            Purpose & Values
          </h1>
          <p className="text-lg md:text-2xl mb-12 text-white/80 font-medium max-w-3xl mx-auto leading-relaxed">
            Unlocking potential through experiential learning and intentional coaching in the heart of coastal Kenya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/booking" className="w-full sm:w-auto bg-[#FF7F00] text-white px-12 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:scale-110 shadow-[0_0_40px_rgba(255,127,0,0.4)]">
              Book Session
            </Link>
            <a href="https://wa.me/254723670822" className="w-full sm:w-auto border-2 border-[#D1FF00] text-[#D1FF00] px-12 py-5 rounded-full text-lg font-black uppercase tracking-widest hover:bg-[#D1FF00] hover:text-black transition-all transform hover:scale-105">
              WhatsApp Us
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-pulse">
            <span className="text-[10px] uppercase tracking-[0.5em] mb-2">Scroll to explore</span>
            <ChevronDown size={24} className="text-[#D1FF00]" />
          </div>
        </div>
      </section>

      {/* Quick Visual Proof - Better Layout */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-black leading-none uppercase tracking-tighter">
                Real Transformation. <br/>
                <span className="text-[#FF7F00]">Real Results.</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Our activities aren't just games. They are carefully crafted experiences designed to challenge perspectives, build trust, and ignite lasting change within your organization.
              </p>
              <div className="flex items-center space-x-4 text-[#D1FF00] bg-black px-8 py-6 rounded-[2rem] inline-block shadow-2xl">
                 <MapPin size={24} />
                 <span className="font-black uppercase tracking-widest text-sm">Serving Mombasa & Coastal Region</span>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop" 
                alt="Outdoor teamwork" 
                className="rounded-3xl shadow-2xl border-4 border-[#FF7F00] aspect-square object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop" 
                alt="Large group facilitation" 
                className="rounded-3xl shadow-2xl border-4 border-[#D1FF00] aspect-square object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Cards - Grid Style */}
      <section className="py-32 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Our Expertise</h2>
            <div className="h-2 w-32 bg-[#FF7F00] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="text-[#FF7F00]" size={40} />,
                title: "Team Building",
                desc: "Outdoor, indoor, and problem-solving activities."
              },
              {
                icon: <Lightbulb className="text-[#FF7F00]" size={40} />,
                title: "Coaching",
                desc: "Mindset, wellness, and performance mentorship."
              },
              {
                icon: <Anchor className="text-[#FF7F00]" size={40} />,
                title: "Experiential",
                desc: "Experience → Reflect → Connect → Apply model."
              },
              {
                icon: <Heart className="text-[#FF7F00]" size={40} />,
                title: "Values-Based",
                desc: "Leadership rooted in character and integrity."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 p-12 rounded-[3rem] border border-white/10 hover:border-[#D1FF00] hover:bg-white/10 transition-all group">
                <div className="mb-8 group-hover:scale-125 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-[#D1FF00]">{item.title}</h3>
                <p className="text-white/60 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
