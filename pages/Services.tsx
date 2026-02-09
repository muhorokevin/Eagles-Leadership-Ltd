
import React from 'react';
import { CheckCircle2, Clock, MapPin, Building2, Users2, GraduationCap, HeartHandshake, Globe } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Services & Impact</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tailored strategies to align team dynamics with organizational values.</p>
          <div className="h-1.5 w-20 bg-[#D1FF00] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Section A: Team Building Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100 hover:border-[#D1FF00] transition-all">
            <h2 className="text-2xl font-bold text-black mb-8 flex items-center">
              <Users2 className="mr-3 text-[#FF7F00]" size={28} /> Team Building Options
            </h2>
            <div className="space-y-4">
              {[
                "Corporate Team Building",
                "Outdoor & Indoor Team Building",
                "Virtual Team Building",
                "Problem-Solving Activities",
                "Communication-Focused Challenges"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-5 bg-gray-50 rounded-2xl border border-transparent hover:border-[#D1FF00] transition-all cursor-default">
                  <div className="bg-[#D1FF00] p-1.5 rounded-full shadow-sm">
                    <CheckCircle2 size={18} className="text-black" />
                  </div>
                  <span className="font-bold text-black text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black rounded-[2rem] p-10 shadow-xl text-white">
            <h2 className="text-2xl font-bold mb-8 flex items-center text-[#D1FF00]">
              <HeartHandshake className="mr-3 text-[#FF7F00]" size={28} /> Coaching Specializations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Life Coaching",
                "Performance Coaching",
                "Mindset Coaching",
                "Health & Wellness",
                "Team Coaching",
                "Communication",
                "Relationship Coaching",
                "Spiritual Coaching"
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-white/5 rounded-xl text-sm font-semibold border border-[#D1FF00]/10 hover:border-[#FF7F00] transition-all">
                  <span className="text-[#FF7F00] mr-2">•</span> {item}
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-[#D1FF00] text-black rounded-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-center">
                Built on Values, Driven by Results
              </p>
            </div>
          </div>
        </div>

        {/* Section B: Objectives */}
        <div className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
              Team Building Objectives & Goals
            </h2>
            <div className="h-1 w-24 bg-[#FF7F00] mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Stronger Bonds", desc: "Better relationships & understanding between team members." },
              { title: "Eco-Therapy", desc: "Bonding in nature for mental health and stress relief." },
              { title: "Inclusion", desc: "Fostering diversity and cultural understanding." },
              { title: "Momentum", desc: "Creativity and energy to push organizational goals." },
              { title: "Decisions", desc: "Sharpening communication and collective decision-making." },
              { title: "Loyalty", desc: "Building rapport, collaboration, and deeper loyalty." },
              { title: "Strategic", desc: "Strategic thinking and heightened productivity." },
              { title: "Conflict", desc: "Resolution through SWOT-based analysis." },
              { title: "Alignment", desc: "Alignment to vision, mission, and core values." }
            ].map((goal, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#FF7F00] hover:shadow-2xl transition-all">
                <h3 className="font-extrabold text-black mb-3 text-lg">{goal.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section C & D: Who It's For & Logistics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-[#D1FF00] text-black p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7F00]/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-3xl font-bold mb-10 relative z-10">Who It's For</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 relative z-10">
               {[
                 { label: "Families", icon: <HeartHandshake /> },
                 { label: "Schools", icon: <GraduationCap /> },
                 { label: "Corporates", icon: <Building2 /> },
                 { label: "Global Entities", icon: <Globe /> },
                 { label: "Gov Institutions", icon: <Anchor /> },
                 { label: "Religious Orgs", icon: <ShieldCheck /> }
               ].map((item, i) => (
                 <div key={i} className="text-center group">
                    <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all group-hover:bg-[#FF7F00] group-hover:text-white shadow-md">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest">{item.label}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-black p-12 rounded-[2.5rem] shadow-xl text-white space-y-10 border-b-8 border-[#FF7F00]">
            <div>
              <h3 className="text-xl font-bold text-[#D1FF00] mb-5 flex items-center">
                <Clock className="mr-3 text-[#FF7F00]" size={24} /> Duration
              </h3>
              <ul className="text-white/80 text-sm space-y-3">
                <li className="flex items-center"><span className="text-[#FF7F00] mr-2">/</span> A few hours intensive</li>
                <li className="flex items-center"><span className="text-[#FF7F00] mr-2">/</span> Half-day sessions</li>
                <li className="flex items-center"><span className="text-[#FF7F00] mr-2">/</span> Full-day immersive</li>
                <li className="flex items-center"><span className="text-[#FF7F00] mr-2">/</span> Multi-day retreats</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#D1FF00] mb-5 flex items-center">
                <MapPin className="mr-3 text-[#FF7F00]" size={24} /> Venue
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                We prioritize <span className="text-[#D1FF00] font-bold italic">your preferred location</span>. We also offer premium outdoor spaces across the Coastal Region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Mock Icons needed (defined in components or imported)
const ShieldCheck = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);
const Anchor = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="5" r="3"/><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="m9 18-3-3"/><path d="m15 18 3-3"/></svg>
);

export default ServicesPage;
