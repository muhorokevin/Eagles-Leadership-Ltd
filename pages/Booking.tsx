
import React from 'react';
import { Send, CheckCircle, Calendar as CalendarIcon } from 'lucide-react';

const BookingPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    participants: '',
    date: '',
    type: 'Corporate Team Building',
    location: 'Mombasa'
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Coach Tim, I'd like to book a ${formData.type} session for ${formData.participants} people on ${formData.date} in ${formData.location}.`;
    window.open(`https://wa.me/254723670822?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="bg-[#D1FF00] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <CheckCircle size={48} className="text-black" />
          </div>
          <h1 className="text-4xl font-black text-black mb-4 uppercase tracking-tighter">Request Sent!</h1>
          <p className="text-lg text-gray-600 mb-8 font-medium">Redirecting you to WhatsApp to finalize your booking with Coach Tim. We can't wait to work with your team.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-[#FF7F00] font-black uppercase tracking-widest text-sm hover:underline"
          >
            Start a new request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-[#FF7F00] rounded-full text-white font-black text-xs mb-6 uppercase tracking-[0.4em] shadow-lg">
            Book Your Session
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tighter uppercase leading-[0.8]">Let's Build <br/> Your Team</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-bold mt-8">Ready for transformation? Tell us a bit about your group and we'll handle the rest.</p>
        </div>

        <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-[0_50px_120px_-20px_rgba(0,0,0,0.2)] border-2 border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-4">
              <label className="text-[12px] font-black text-black uppercase tracking-[0.4em] ml-2">Organization / Group Name</label>
              <input 
                type="text" 
                required
                placeholder="e.g., Safaricom HR Team / Gathii Family"
                className="w-full p-8 bg-gray-50 border-2 border-gray-200 rounded-[2rem] focus:border-[#D1FF00] focus:ring-4 focus:ring-[#D1FF00]/20 focus:bg-white focus:outline-none transition-all font-black text-xl text-black placeholder:text-gray-500 placeholder:opacity-100"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[12px] font-black text-black uppercase tracking-[0.4em] ml-2">Estimated Participants</label>
                <input 
                  type="number" 
                  required
                  placeholder="e.g. 25"
                  className="w-full p-8 bg-gray-50 border-2 border-gray-200 rounded-[2rem] focus:border-[#D1FF00] focus:ring-4 focus:ring-[#D1FF00]/20 focus:bg-white focus:outline-none transition-all font-black text-xl text-black placeholder:text-gray-500 placeholder:opacity-100"
                  value={formData.participants}
                  onChange={e => setFormData({...formData, participants: e.target.value})}
                />
              </div>
              <div className="space-y-4">
                <label className="text-[12px] font-black text-black uppercase tracking-[0.4em] ml-2">Preferred Date</label>
                <div className="relative group">
                  <input 
                    type="date" 
                    required
                    className="w-full p-8 bg-gray-50 border-2 border-gray-200 rounded-[2rem] focus:border-[#D1FF00] focus:ring-4 focus:ring-[#D1FF00]/20 focus:bg-white focus:outline-none transition-all font-black text-xl text-black appearance-none cursor-pointer"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                  />
                  <CalendarIcon className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-600 group-hover:text-[#FF7F00] transition-colors pointer-events-none" size={24} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[12px] font-black text-black uppercase tracking-[0.4em] ml-2">Session Category</label>
                <div className="relative group">
                  <select 
                    className="w-full p-8 bg-gray-50 border-2 border-gray-200 rounded-[2rem] focus:border-[#D1FF00] focus:ring-4 focus:ring-[#D1FF00]/20 focus:bg-white focus:outline-none transition-all font-black text-xl text-black appearance-none cursor-pointer"
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                  >
                    <option>Corporate Team Building</option>
                    <option>Church / Religious Retreat</option>
                    <option>School / Youth Mentorship</option>
                    <option>Family Bonding Day</option>
                    <option>One-on-One Coaching</option>
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600 font-bold group-hover:text-[#FF7F00]">
                    ▼
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[12px] font-black text-black uppercase tracking-[0.4em] ml-2">Preferred Location</label>
                <input 
                  type="text" 
                  placeholder="Mombasa (Default)"
                  className="w-full p-8 bg-gray-50 border-2 border-gray-200 rounded-[2rem] focus:border-[#D1FF00] focus:ring-4 focus:ring-[#D1FF00]/20 focus:bg-white focus:outline-none transition-all font-black text-xl text-black placeholder:text-gray-500 placeholder:opacity-100"
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                />
              </div>
            </div>

            <div className="pt-10">
              <button 
                type="submit"
                className="w-full bg-black text-[#D1FF00] py-10 rounded-[3rem] text-2xl font-black uppercase tracking-[0.3em] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] hover:bg-[#FF7F00] hover:text-white transition-all transform active:scale-95 flex items-center justify-center space-x-8 group"
              >
                <span>Request Rates</span>
                <Send size={28} className="group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform" />
              </button>
              <p className="text-center mt-10 text-xs text-gray-400 font-black uppercase tracking-[0.5em]">
                Fast Response Guaranteed • No Obligation
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
