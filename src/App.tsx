/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Calendar, 
  MapPin, 
  Music, 
  Music2, 
  Copy, 
  Check, 
  ChevronDown, 
  MailOpen,
  Instagram,
  MessageSquare,
  Gift,
  CreditCard,
  Flower2,
  Leaf,
  CalendarPlus,
  Users,
  X,
  Clock,
  ArrowRight
} from 'lucide-react';

// Assets from the provided HTML
const ASSETS = {
  video: "https://undanganqu.net/wp-content/uploads/2025/09/Midnight-03-Motion-Compress.mp4",
  icon: "https://undanganqu.net/wp-content/uploads/2025/09/Midnight-03-Icon.png",
  groom: "https://c.top4top.io/p_3752yvmdn0.png",
  bride: "https://a.top4top.io/p_375175slg0.jpg",
  cover: "https://f.top4top.io/p_3751ntmhn0.png",
  music: "https://undanganqu.net/wp-content/uploads/2024/11/Its-You-Sezairi-Lirik-Lagu-Terjemahan-DeLirik-youtube-mp3cut.net_.mp3",
  gallery: [
    "https://j.top4top.io/p_3751ggy060.png"
  ]
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) setGuestName(to);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-stone-800 selection:bg-amber-200 selection:text-stone-900 overflow-x-hidden relative">
      <div className="noise" />
      <audio ref={audioRef} src={ASSETS.music} loop />

      {/* Fixed Background Image for subtle texture throughout the app */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center opacity-[0.08] pointer-events-none" 
        style={{ backgroundImage: `url(${ASSETS.cover})` }} 
      />

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="cover"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-end text-center p-6 pb-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${ASSETS.cover})` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="glass p-10 rounded-[2.5rem] max-w-sm w-full border-white/40 bg-white/5 backdrop-blur-md"
            >
              <p className="text-xs uppercase tracking-[0.3em] mb-4 opacity-60 text-stone-500">Kepada Yth:</p>
              <h3 className="text-3xl font-serif mb-8 text-stone-800">{guestName}</h3>
              <button
                onClick={handleOpen}
                className="group relative flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-amber-200 to-yellow-500 text-stone-950 rounded-full font-black uppercase tracking-[0.2em] text-xs overflow-hidden transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(251,191,36,0.4)]"
              >
                <MailOpen size={20} />
                Buka Undangan
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <main className="relative">
          {/* Floating Music Button */}
          <button
            onClick={toggleMusic}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 flex items-center justify-center glass text-amber-600 rounded-full shadow-2xl border-white/60"
          >
            {isPlaying ? <Music size={20} className="animate-spin-slow" /> : <Music2 size={20} />}
          </button>

          {/* Hero Section with Video Background */}
          <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-stone-900">
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-100"
              >
                <source src={ASSETS.video} type="video/mp4" />
              </video>
            </div>
            
            <div className="relative z-10 px-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="font-serif text-xl tracking-[0.4em] uppercase mb-6 text-amber-500"
              >
                The Wedding of
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="font-script text-8xl md:text-[10rem] text-gradient mb-12 leading-none"
              >
                Dhifa & Hilsa
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-col items-center gap-6"
              >
                <p className="font-serif text-4xl tracking-[0.2em] text-white drop-shadow-lg">17 . 04 . 26</p>
              </motion.div>
            </div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-10 z-10"
            >
              <ChevronDown size={32} className="text-amber-600/30" />
            </motion.div>
          </section>

          {/* Verse Section */}
          <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 atmosphere opacity-20" />
            <div className="max-w-3xl mx-auto relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex justify-center items-center gap-6 mb-12"
              >
                <span className="text-8xl font-serif text-amber-600/10">D</span>
                <Heart className="text-amber-500 fill-amber-500" size={32} />
                <span className="text-8xl font-serif text-amber-600/10">H</span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="font-serif italic text-xl md:text-2xl leading-relaxed mb-12 text-stone-600"
              >
                "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="font-bold tracking-[0.4em] uppercase text-sm text-amber-600"
              >
                - QS. Ar-Rum : 21 -
              </motion.p>
            </div>
          </section>

          {/* Couple Section */}
          <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 atmosphere opacity-20" />
            <div className="max-w-6xl mx-auto relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-24"
              >
                <h2 className="font-serif text-5xl md:text-6xl text-gradient mb-8 leading-tight">We Are<br />Getting Married!</h2>
                <p className="max-w-2xl mx-auto text-stone-600 text-lg leading-relaxed">Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami:</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-20 items-center">
                {/* Groom */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-center group relative"
                >
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -z-10" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-10 -left-10 text-amber-600/10 pointer-events-none"
                  >
                    <Flower2 size={120} />
                  </motion.div>

                  <div className="relative mb-12 inline-block">
                    {/* Elegant Frame */}
                    <div className="absolute -inset-4 border border-amber-200/50 rounded-[9rem] -z-10 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute -inset-2 border-2 border-amber-600/20 rounded-[8.5rem] -z-10" />
                    
                    <div className="relative w-64 h-[24rem] mx-auto overflow-hidden rounded-[8rem] shadow-2xl border-4 border-white">
                      <img src={ASSETS.groom} alt="Groom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-amber-600 border border-amber-100">
                      <Heart size={32} className="fill-amber-600/10" />
                    </div>
                  </div>

                  <h3 className="font-script text-7xl text-amber-600 mb-4">Dhifa</h3>
                  <p className="font-serif text-3xl font-bold mb-4 uppercase tracking-widest text-stone-800">Dhifa Alijaya Kusumah</p>
                  <p className="text-stone-500 leading-loose text-lg">Putra Ke-2 Dari<br /><span className="text-amber-700 font-medium">Bapak. Mohamad Soleh & Ibu Rika Nurhayati</span></p>
                </motion.div>

                {/* Bride */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-center group relative"
                >
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -z-10" />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-10 -right-10 text-amber-600/10 pointer-events-none"
                  >
                    <Leaf size={120} />
                  </motion.div>

                  <div className="relative mb-12 inline-block">
                    {/* Elegant Frame */}
                    <div className="absolute -inset-4 border border-amber-200/50 rounded-[9rem] -z-10 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute -inset-2 border-2 border-amber-600/20 rounded-[8.5rem] -z-10" />

                    <div className="relative w-64 h-[24rem] mx-auto overflow-hidden rounded-[8rem] shadow-2xl border-4 border-white">
                      <img src={ASSETS.bride} alt="Bride" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-amber-600 border border-amber-100">
                      <Heart size={32} className="fill-amber-600/10" />
                    </div>
                  </div>

                  <h3 className="font-script text-7xl text-amber-600 mb-4">Hilsa</h3>
                  <p className="font-serif text-3xl font-bold mb-4 uppercase tracking-widest text-stone-800">Hilsa Latipiah</p>
                  <p className="text-stone-500 leading-loose text-lg">Putri Ke-3 Dari<br /><span className="text-amber-700 font-medium">Bapak. Acep & Ibu Eli Widaningsih</span></p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Countdown Section */}
          <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 atmosphere opacity-10" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-20"
              >
                <img src={ASSETS.icon} alt="Icon" className="w-16 h-16 mx-auto mb-10 opacity-40" referrerPolicy="no-referrer" />
                <h2 className="font-serif text-5xl text-gradient mb-12">Save The Date</h2>
                <Countdown targetDate="2026-04-17T08:00:00" />
                <p className="mt-16 text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami:</p>
              </motion.div>
            </div>
          </section>

          {/* Events Section */}
          <section className="py-32 px-6 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 atmosphere opacity-20" />
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: `url(${ASSETS.cover})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }} />
            
            {/* Floating Decorative Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-stone-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-5s' }} />
            
            <div className="max-w-2xl mx-auto relative z-10">
              {/* Akad */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-12 rounded-[3.5rem] text-center group border-white/60 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
              >
                {/* Inner decorative glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-100/30 rounded-full blur-2xl group-hover:bg-amber-100/50 transition-colors duration-700" />
                
                <div className="relative z-10">
                  <h3 className="font-serif text-5xl mb-10 text-stone-800">Akad Nikah</h3>
                  <div className="space-y-6 mb-12">
                    <p className="font-bold text-2xl tracking-[0.3em] text-stone-500">JUMAT</p>
                    <p className="text-amber-600 font-bold text-4xl tracking-[0.2em]">17 APRIL 2026</p>
                    <p className="text-stone-400 text-3xl font-serif">08:00</p>
                  </div>
                  <div className="w-12 h-12 mx-auto mb-8 flex items-center justify-center rounded-full bg-amber-600/5 text-amber-600 border border-amber-600/10">
                    <MapPin size={24} />
                  </div>
                  <p className="text-stone-600 mb-12 text-lg leading-relaxed max-w-xs mx-auto">Kp. Situ Gunting Rt01/Rw02 (Gg. Pak Oyo) Ds. Sukahaji, Kec. Babakan Ciparay, Kota Bandung.</p>
                  <a
                    href="https://maps.app.goo.gl/A3HVeRyZdzvihPp98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-12 py-5 bg-amber-600 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-amber-700 transition-all shadow-lg"
                  >
                    <MapPin size={18} />
                    Google Map
                  </a>

                  <div className="mt-8">
                    <a
                      href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Nikah+Dhifa+%26+Hilsa&dates=20260417T080000/20260417T100000&details=Mohon+doa+restu+atas+pernikahan+kami.&location=Kp.+Situ+Gunting+Rt01/Rw02+Ds.+Sukahaji,+Kec.+Babakan+Ciparay,+Kota+Bandung"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-[10px] hover:text-amber-700 transition-colors"
                    >
                      <CalendarPlus size={16} />
                      Simpan ke Kalender
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 atmosphere opacity-30" />
            <div className="max-w-6xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
              >
                <h2 className="font-serif text-5xl md:text-6xl text-gradient">Our Gallery</h2>
              </motion.div>

              <div className={`grid gap-4 ${ASSETS.gallery.length === 1 ? 'max-w-md mx-auto grid-cols-1' : 'grid-cols-2 md:grid-cols-3'}`}>
                {ASSETS.gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedImage(img)}
                    className="aspect-[3/4] overflow-hidden rounded-2xl shadow-xl border border-white/60 cursor-pointer group"
                  >
                    <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Love Story Section */}
          <section className="py-32 px-6 relative overflow-hidden bg-[#fdfcfb]">
            <div className="absolute inset-0 atmosphere opacity-20" />
            <div className="max-w-4xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-24"
              >
                <h2 className="font-serif text-5xl md:text-6xl text-gradient">Love Story</h2>
              </motion.div>

              <div className="space-y-12">
                <StoryCard 
                  title="Awal Bertemu" 
                  content="Pertama kali kita bisa berkenalan bermula dari pandangan pertama di pabrik, lalu seiring waktu berjalan kita berdua saling bertemu, dan mulai lah tumbuh Perasaan dan rasa nyaman." 
                  icon={<Users size={24} />}
                />
                <StoryCard 
                  title="Lamaran" 
                  content="Lalu ditahun 2025 kita memutuskan untuk menjalin hubungan ke jenjang berikutnya yaitu bertunangan." 
                  icon={<Heart size={24} />}
                />
                <StoryCard 
                  title="Menikah" 
                  content="Dan alhamdulilah ditahun ini inshallah tanggal 17 april 2026 kita akan menikah." 
                  icon={<Clock size={24} />}
                />
              </div>
            </div>
          </section>

          {/* Love Gift Section */}
          <section className="py-32 px-6 bg-[#fdfcfb] text-center relative overflow-hidden">
            <div className="absolute inset-0 atmosphere opacity-30" />
            <div className="max-w-4xl mx-auto relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-20"
              >
                <div className="w-20 h-20 mx-auto mb-10 flex items-center justify-center rounded-full bg-amber-600/5 text-amber-600 border border-amber-600/10">
                  <Gift size={32} />
                </div>
                <h2 className="font-serif text-5xl md:text-6xl text-gradient mb-8">Love Gift</h2>
                <p className="text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih untuk kami, dapat melalui:</p>
              </motion.div>

              <div className="grid gap-12">
                <BankCard 
                  bankName="Bank BCA" 
                  accountNumber="8380578647" 
                  accountHolder="Hilsa Latipiah" 
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="glass p-10 md:p-12 rounded-[3.5rem] border-white/60 shadow-xl flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-full bg-amber-600/5 text-amber-600 border border-amber-600/10">
                    <Gift size={28} />
                  </div>
                  <h3 className="font-serif text-3xl mb-6 text-stone-800">Kirim Kado</h3>
                  <p className="text-stone-600 mb-10 text-lg leading-relaxed max-w-md">
                    Kp. Situ Gunting Rt01/Rw02 (Gg. Pak Oyo) Ds. Sukahaji, Kec. Babakan Ciparay, Kota Bandung
                  </p>
                  <CopyButton text="Kp. Situ Gunting Rt01/Rw02 (Gg. Pak Oyo) Ds. Sukahaji, Kec. Babakan Ciparay, Kota Bandung" label="Salin Alamat" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* RSVP Section */}
          <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 atmosphere opacity-20" />
            <div className="max-w-2xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass p-12 rounded-[3.5rem] border-white/40 shadow-2xl text-center"
              >
                <div className="w-20 h-20 mx-auto mb-10 flex items-center justify-center rounded-full bg-amber-600/5 text-amber-600 border border-amber-600/10">
                  <Calendar size={32} />
                </div>
                <h2 className="font-serif text-5xl text-gradient mb-8">Konfirmasi Kehadiran</h2>
                <p className="text-stone-600 mb-12 text-lg leading-relaxed">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.</p>
                
                <form className="space-y-6 text-left">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-amber-600/60 ml-2">Nama Lengkap</label>
                    <input type="text" placeholder="Nama Anda" className="w-full px-8 py-5 bg-white/30 border border-white/40 rounded-2xl focus:outline-none focus:bg-white/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-amber-600/60 ml-2">Konfirmasi Kehadiran</label>
                    <select className="w-full px-8 py-5 bg-white/30 border border-white/40 rounded-2xl focus:outline-none focus:bg-white/50 transition-all appearance-none">
                      <option>Hadir</option>
                      <option>Tidak Hadir</option>
                      <option>Masih Ragu</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-amber-600/60 ml-2">Jumlah Tamu</label>
                    <select className="w-full px-8 py-5 bg-white/30 border border-white/40 rounded-2xl focus:outline-none focus:bg-white/50 transition-all appearance-none">
                      <option>1 Orang</option>
                      <option>2 Orang</option>
                    </select>
                  </div>
                  <button className="w-full py-6 bg-amber-600 text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-amber-700 transition-all shadow-xl mt-4">
                    Kirim Konfirmasi
                  </button>
                </form>
              </motion.div>
            </div>
          </section>

          {/* Guestbook Section */}
          <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 atmosphere opacity-20" />
            <div className="max-w-4xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
              >
                <h2 className="font-serif text-5xl md:text-6xl text-gradient mb-4">Wishes</h2>
                <p className="text-stone-600 text-xl font-serif italic">Ucapan Selamat & Do'a</p>
              </motion.div>

              <form className="glass p-12 rounded-[3.5rem] border-white/60 mb-20 space-y-8 shadow-xl">
                <div className="space-y-2">
                  <label className="block text-sm font-bold uppercase tracking-widest text-amber-600/60 ml-2">Nama</label>
                  <input 
                    type="text" 
                    placeholder="Isikan Nama Anda" 
                    className="w-full px-8 py-5 bg-white/50 border border-stone-200 rounded-2xl focus:outline-none focus:border-amber-600/50 focus:bg-white transition-all text-stone-800"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold uppercase tracking-widest text-amber-600/60 ml-2">Pesan</label>
                  <textarea 
                    rows={4} 
                    placeholder="Berikan Ucapan Dan Doa Restu" 
                    className="w-full px-8 py-5 bg-white/50 border border-stone-200 rounded-2xl focus:outline-none focus:border-amber-600/50 focus:bg-white transition-all text-stone-800"
                  />
                </div>
                <button className="w-full py-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-xl">
                  Kirimkan Ucapan
                </button>
              </form>

              <div className="space-y-6 h-[32rem] overflow-y-auto pr-4 custom-scrollbar">
                <WishItem name="Bayu" message="Selamat menempuh hidup brother Samawa" time="Baru saja" />
                <WishItem name="Teh wulan" message="Barakallah alfi... Sakinah Mawaddah Warahmah, bahagia dunia akhirat.. Aamiin yra 🤲🏻" time="1 jam yang lalu" />
                <WishItem name="Iim" message="Samawa! Hoream datang" time="2 jam yang lalu" />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-32 px-6 border-t border-stone-200 relative overflow-hidden">
            <div className="absolute inset-0 atmosphere opacity-10" />
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <p className="text-stone-600 mb-12 leading-loose max-w-2xl mx-auto italic text-xl">Suatu kebahagiaan & kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami</p>
              
              <div className="mb-20">
                <p className="font-serif text-2xl mb-4 text-amber-600/80">Kami Yang Berbahagia,</p>
                <h2 className="font-script text-8xl text-gradient">Dhifa & Hilsa</h2>
              </div>

              <div className="space-y-8">
              </div>
            </div>
          </footer>
        </main>
      )}
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-stone-950/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Lightbox"
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StoryCard({ title, content, icon }: { title: string, content: string, icon?: ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex gap-8 group"
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-amber-600 border-white/40 shadow-lg group-hover:scale-110 transition-transform">
          {icon || <Heart size={24} />}
        </div>
        <div className="w-[2px] h-full bg-gradient-to-b from-amber-600/20 to-transparent mt-4" />
      </div>
      <div className="flex-1 pt-2">
        <span className="text-luxury mb-2 block">Chapter</span>
        <h4 className="font-serif text-3xl text-stone-800 mb-4">{title}</h4>
        <p className="text-stone-600 leading-relaxed italic opacity-80">{content}</p>
      </div>
    </motion.div>
  );
}

function SocialIcon({ href, icon }: { href: string, icon: ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-14 h-14 flex items-center justify-center glass rounded-2xl text-amber-600 hover:bg-amber-600 hover:text-white hover:-translate-y-2 transition-all duration-300 shadow-xl border-white/60"
    >
      {icon}
    </a>
  );
}

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8">
      <CountdownItem value={timeLeft.days} label="Hari" />
      <CountdownItem value={timeLeft.hours} label="Jam" />
      <CountdownItem value={timeLeft.minutes} label="Menit" />
      <CountdownItem value={timeLeft.seconds} label="Detik" />
    </div>
  );
}

function CountdownItem({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full aspect-square flex items-center justify-center glass rounded-[2rem] gold-border mb-4 group hover:scale-105 transition-all duration-500">
        <span className="text-4xl md:text-6xl font-bold text-gradient">{value}</span>
      </div>
      <span className="text-luxury">{label}</span>
    </div>
  );
}

function BankCard({ bankName, accountNumber, accountHolder }: { bankName: string, accountNumber: string, accountHolder: string }) {
  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div
        whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
        className="relative w-full max-w-md aspect-[1.586/1] rounded-[2rem] p-8 overflow-hidden shadow-2xl group transition-all duration-500"
      >
        {/* Card Background with elegant gradient and noise */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-white to-stone-200" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay noise" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-300/20 rounded-full blur-3xl -ml-32 -mb-32" />
        
        {/* Card Content */}
        <div className="relative h-full flex flex-col justify-between z-10">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-luxury !tracking-[0.2em] !text-[8px] opacity-60 mb-1">Official Bank</span>
              <h3 className="font-serif text-2xl text-stone-800 font-bold">{bankName}</h3>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-stone-800/5 border border-stone-800/10">
              <CreditCard className="text-stone-800/40" size={24} />
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Chip */}
            <div className="w-12 h-9 rounded-md bg-gradient-to-br from-amber-200 to-amber-400 relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 border border-amber-600/20" />
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-amber-600/20" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-amber-600/20" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-1">Account Number</span>
              <p className="text-2xl md:text-3xl font-mono text-stone-800 tracking-[0.15em] font-bold drop-shadow-sm">
                {accountNumber.match(/.{1,4}/g)?.join(' ')}
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-1">Account Holder</span>
              <p className="font-serif text-lg text-stone-700 font-bold uppercase tracking-wider">{accountHolder}</p>
            </div>
            <div className="flex -space-x-3 opacity-20">
              <div className="w-10 h-10 rounded-full bg-stone-800" />
              <div className="w-10 h-10 rounded-full bg-amber-600" />
            </div>
          </div>
        </div>
        
        {/* Elegant Border */}
        <div className="absolute inset-0 border border-white/60 rounded-[2rem] pointer-events-none" />
        <div className="absolute inset-[1px] border border-stone-800/5 rounded-[calc(2rem-1px)] pointer-events-none" />
      </motion.div>
      
      <CopyButton text={accountNumber} label="Salin No. Rekening" />
    </div>
  );
}

function CopyButton({ text, label }: { text: string, label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-3 px-10 py-4 glass border-white/60 rounded-full text-amber-600 hover:bg-amber-600 hover:text-white transition-all font-bold uppercase tracking-widest text-xs shadow-md"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "Berhasil Disalin" : label}
    </button>
  );
}

function WishItem({ name, message, time }: { name: string, message: string, time: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="p-10 glass rounded-[2.5rem] gold-border shadow-lg border-white/60"
    >
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-serif text-2xl text-amber-600">{name}</h4>
        <span className="text-luxury opacity-40">{time}</span>
      </div>
      <p className="text-stone-600 leading-relaxed opacity-80 italic text-lg">"{message}"</p>
    </motion.div>
  );
}
