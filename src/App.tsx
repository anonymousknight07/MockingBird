import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram, ChevronDown, Menu, X } from 'lucide-react';
import { HorizontalScroll } from './components/HorizontalScroll';
import DietNutrition from './pages/DietNutrition';
import MoodTracker from './pages/MoodTracker';
import Demo from './pages/Demo';
import Quiz from './pages/Quiz';
import { useState } from 'react';

const cards = [
  [
    {
      title: <h2 className="font-manrope text-2xl text-white">Grounded in science</h2>,
      description: <p className="font-poppins text-sm text-white">Our mental health care options are based on scientifically proven treatments & clinically validated approaches</p>,
      logo: <img src="/assets/why1.svg" alt="Logo" className="w-12 h-12 filter invert" />,
      color: 'bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white',
    },
    {
      title: <h2 className="font-manrope text-2xl text-white">Personalized Care</h2>,
      description: <p className="font-poppins text-sm text-white">Our treatment plans are tailored to your unique needs, so you can get the right care at the right time.</p>,
      logo: <img src="/assets/why2.svg" alt="Logo" className="w-12 h-12 filter invert" />,
      color: 'bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white',
    },
    {
      title: <h2 className="font-manrope text-2xl text-white">Round The Clock Support</h2>,
      description: <p className="font-poppins text-sm text-white">Our mental healthcare offerings and services can be accessed from wherever you might be, all 7 days a week.</p>,
      logo: <img src="/assets/why3.svg" alt="Logo" className="w-12 h-12 filter invert" />,
      color: 'bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white',
    },
    {
      title: <h2 className="font-manrope text-2xl text-white">Integrated Mental Healthcare</h2>,
      description: <p className="font-poppins text-sm text-white">Access self-care tools, Community support, and in-person or online therapy and psychiatry services.</p>,
      logo: <img src="/assets/why4.svg" alt="Logo" className="w-12 h-12 filter invert" />,
      color: 'bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white',
    },
  ]
];

const services = [
  {
    title: 'Mental Counseling',
    description: 'Professional counseling services to help you navigate life\'s challenges.',
    image: '/assets/Services1.png'
  },
  {
    title: 'Anxiety Treatment',
    description: 'Specialized treatment programs for managing anxiety and stress.',
    image: '/assets/Services2.png'
  },
  {
    title: 'Depression Support',
    description: 'Comprehensive support for overcoming depression and finding joy.',
    image: '/assets/Services3.png'
  },
  {
    title: 'Family Therapy',
    description: 'Strengthen family bonds and improve communication.',
    image: '/assets/Services4.png'
  }
];

function HomePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [offeringsRef, offeringsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-[url('/assets/lines.png')] bg-cover bg-no-repeat bg-fixed min-h-screen z-10">
      <div className="min-h-screen bg-gray-50">
        <motion.section ref={heroRef} initial={{ opacity: 0, y: 50 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-manrope font-bold mb-6">The <span className="text-coral-500">Number One</span><br />Mental Health Benefit</h1>
              <p className="font-poppins font-bold text-gray-600 mb-8">Dedicated to help people navigate in life while with 100% of wellness. We're the pioneer in avoiding employee burnout, improving productivity, and overall well-being in life.</p>
              <button className="bg-customOrange text-white px-8 py-3 rounded-full hover:bg-hoverOrange">
                <Link to="/demo" className="text-white">Take a test</Link>
              </button>
            </div>
            <div>
              <img src="/assets/Homeimage.png" alt="Mental Health Illustration" className="rounded-2xl" />
            </div>
          </div>
        </motion.section>

        <motion.section ref={whyRef} initial={{ opacity: 0, y: 50 }} animate={whyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="container mx-auto px-4 py-20">
          <h4 className='font-manrope text-center font-bold text-sm mb-4'>Why ?</h4>
          <h3 className="font-manrope text-center text-4xl font-bold mb-12">Why Our Mental Health Therapy are the Best Choice</h3>
          <HorizontalScroll cards={cards.flat()} />
        </motion.section>

        <motion.section ref={offeringsRef} initial={{ opacity: 0, y: 50 }} animate={offeringsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div><img src="/assets/AboutUs.svg" alt="Mental Health Care" className="rounded-2xl" /></div>
            <div>
              <h4 className='font-manrope text-center font-bold text-sm mb-4'>About Us</h4>
              <h3 className="font-manrope text-left text-4xl font-bold mb-12">Our Mental Health Care<br /><span className="text-customOrange">Offerings</span></h3>
              <p className="text-black font-poppins mb-8 text-sm">Our in-house team of mental health therapist and psychiatrists is highly qualified and trained to deliver quality and compassionate clinical treatment. Our team follows proprietary clinical protocols & undergoes peer supervision to ensure each individual gets exceptional care, either online or in person.</p>
              <button className="bg-customOrange text-white px-8 py-3 rounded-full hover:bg-hoverOrange">
                <Link to="/demo" className="text-white">Take the Test</Link>
              </button>
            </div>
          </div>
        </motion.section>

        <motion.section ref={servicesRef} initial={{ opacity: 0, y: 50 }} animate={servicesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="container mx-auto px-4 py-20">
          <h2 className="font-manrope text-center font-bold text-sm mb-4">Services</h2>
          <h3 className="font-manrope text-center text-4xl font-bold mb-12">Empowering Minds Our Mental Health Consulting Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div key={index} className="relative group overflow-hidden rounded-2xl aspect-square" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <motion.div initial={{ opacity: 0, y: 20 }} whileHover={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-6 text-white">
                  <h4 className="text-2xl font-manrope font-bold mb-4 text-center">{service.title}</h4>
                  <p className="text-sm font-poppins text-gray-200 text-center">{service.description}</p>
                  <button className="mt-4 bg-coral-500 text-white px-8 py-3 rounded-full hover:bg-coral-600 w-fit text-center">Get Started</button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function Layout() {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src="/assets/logo.png" alt="Logo" className="w-8 h-8" />
              <span className="font-manrope font-bold text-xl">MockingBird</span>
            </div>
            <div className="hidden md:flex font-poppins gap-8 items-center">
              <Link to="/" className="hover:text-customOrange">Home</Link>
              <div className="relative">
                <button className="flex items-center gap-1 hover:text-customOrange focus:outline-none" onClick={() => setShowServicesMenu(!showServicesMenu)}>
                  Services
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${showServicesMenu ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <a href="#" className="hover:text-customOrange">About</a>
              <Link to="#" className="bg-customOrange text-white px-6 py-2 rounded-full hover:bg-hoverOrange">Contact Us</Link>
            </div>
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween' }} className="fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white z-50 shadow-xl md:hidden p-4 overflow-y-auto">
              <div className="flex flex-col gap-4">
                <Link to="/" className="p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <div className="relative">
                  <button className="w-full flex justify-between items-center p-2 hover:bg-gray-100 rounded" onClick={() => setShowMobileServices(!showMobileServices)}>
                    Services
                    <ChevronDown className={`w-4 h-4 transform transition-transform ${showMobileServices ? 'rotate-180' : ''}`} />
                  </button>
                  {showMobileServices && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link to="/diet-nutrition" className="block p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Diet & Nutrition</Link>
                      <Link to="/mood-tracker" className="block p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Mood Tracker</Link>
                    </div>
                  )}
                </div>
                <Link to="#" className="p-2 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="#" className="bg-customOrange text-white px-6 py-2 rounded-full hover:bg-hoverOrange text-center" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showServicesMenu && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 z-40 hidden md:block" onClick={() => setShowServicesMenu(false)} />
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl z-50 w-[400px] overflow-hidden hidden md:block">
              <div className="p-4 grid grid-cols-1 gap-4">
                <Link to="/diet-nutrition" className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setShowServicesMenu(false)}>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <img src="/assets/Services1.png" alt="Diet & Nutrition" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-lg">Diet & Nutrition</h3>
                    <p className="text-sm text-gray-600">Personalized nutrition plans and guidance</p>
                  </div>
                </Link>
                <Link to="/mood-tracker" className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setShowServicesMenu(false)}>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <img src="/assets/Services2.png" alt="Mood Tracker" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-lg">Mood Tracker</h3>
                    <p className="text-sm text-gray-600">Track and analyze your emotional well-being</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diet-nutrition" element={<DietNutrition />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/quiz/:type" element={<Quiz />} />
      </Routes>

      <footer className="footer-gradient text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/assets/logo.svg" alt="Heart" className="w-8 h-8" />
                <span className="font-bold text-xl">MockingBird</span>
              </div>
              <p className="text-sm opacity-80">Empowering you to find peace of mind and emotional well-being through support, guidance, and understanding</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100">Psychotherapy</a></li>
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100">Mental Counseling</a></li>
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100">Support Groups</a></li>
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100">Case Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm opacity-80">+91 8688063392</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm opacity-80">saideepakdusa@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-8 h-8" />
                  <span className="text-sm opacity-80">L30-225/2, Subhas Nagar, A. S. Rao Nagar, Secunderabad, Telangana 500040, India</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100">Privacy Policy</a></li>
                <li><a href="#" className="text-sm opacity-80 hover:opacity-100">Term Of Use</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <div className="flex justify-center gap-6 mb-4">
              <a href="#" className="hover:scale-110 transition-transform"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Youtube className="w-6 h-6" /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Instagram className="w-6 h-6" /></a>
            </div>
            <p className="text-center text-sm opacity-80">© {new Date().getFullYear()} @MockingBird all rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;