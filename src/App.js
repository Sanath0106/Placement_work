import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  FaMoon, 
  FaSun, 
  FaRocket, 
  FaCode, 
  FaChartLine, 
  FaUserGraduate,
  FaBars,
  FaTimes,
  FaLaptopCode,
  FaClipboardCheck,
  FaTrophy,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Home", to: "home" },
    { title: "Features", to: "features" },
    { title: "About", to: "about" },
    { title: "Contact", to: "contact" }
  ];

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* Header/Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 shadow-md z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center w-1/4"
            >
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                PlacementHub
              </h1>
            </motion.div>

            {/* Centered Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-12">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                  >
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-64}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 cursor-pointer transition-all duration-300 relative group"
                    >
                      {link.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center space-x-4 w-1/4 justify-end">
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-4 py-1.5 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
              >
                Student Login
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                Staff Login
              </motion.button>
            </div>

            {/* Mobile Menu Button with Animation */}
            <motion.div 
              className="md:hidden flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className="text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Navigation with Animation - Update the buttons here too */}
          <motion.div
            initial={false}
            animate={{ height: isMenuOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 cursor-pointer transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: 0.4 }}
                className="space-y-2 pt-2"
              >
                <button className="w-full px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Student Login
                </button>
                <button className="w-full px-3 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">
                  Staff Login
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Dark Mode Toggle with Animation */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        onClick={toggleDarkMode}
        className="fixed top-20 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 z-50 hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? 
          <FaSun className="text-yellow-400 w-5 h-5" /> : 
          <FaMoon className="text-gray-700 w-5 h-5" />
        }
      </motion.button>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-r from-blue-500 to-blue-700 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Prepare, Practice, <span className="text-blue-300">Succeed</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Your one-stop platform for placement preparation. Master technical interviews, 
                solve coding challenges, and track your progress towards success.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block relative"
            >
              <motion.img 
                src="/images/hero-image.png"
                alt="Platform Preview" 
                className="w-[90%] mx-auto h-auto object-contain filter drop-shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white font-poppins">
              Everything You Need to Succeed
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-poppins">
              Comprehensive tools and resources to help you ace your placement interviews
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <FeatureCard
              icon={<FaLaptopCode className="transform transition-transform group-hover:rotate-12" />}
              title="Interactive Quizzes"
              description="Practice with our vast collection of technical and aptitude questions"
            />
            <FeatureCard
              icon={<FaCode className="transform transition-transform group-hover:rotate-12" />}
              title="Code Practice"
              description="Solve real coding problems with our integrated IDE"
            />
            <FeatureCard
              icon={<FaClipboardCheck className="transform transition-transform group-hover:rotate-12" />}
              title="Mock Interviews"
              description="Prepare with AI-powered mock interviews and get instant feedback"
            />
            <FeatureCard
              icon={<FaTrophy className="transform transition-transform group-hover:rotate-12" />}
              title="Track Progress"
              description="Monitor your improvement with detailed performance analytics"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
              About PlacementHub
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              PlacementHub is your comprehensive platform for placement preparation, designed to help students 
              excel in their career journey. We combine cutting-edge technology with expert guidance to provide 
              the best learning experience.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To empower students with the tools and knowledge they need to secure their dream careers.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To become the leading platform for placement preparation and career development.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Our Values</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Excellence, Innovation, and Student Success drive everything we do.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-400">PlacementHub</h2>
              <p className="text-gray-400">
                Empowering students to achieve their career goals through comprehensive placement preparation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">For Users</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Student Login</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Staff Login</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400">Resources</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <FaEnvelope className="mr-2" />
                  <a href="mailto:contact@placementhub.com" className="hover:text-blue-400">
                    contact@placementhub.com
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <FaPhone className="mr-2" />
                  <a href="tel:+919876543210" className="hover:text-blue-400">
                    +91 987 654 3210
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <FaMapMarkerAlt className="mr-2" />
                  <address className="not-italic">
                    123 Education Street,<br />
                    Tech Park, Bangalore<br />
                    Karnataka - 560001
                  </address>
                </li>
                <li className="flex items-center space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <FaInstagram size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PlacementHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }}
      className="p-8 bg-white dark:bg-gray-800 rounded-2xl text-center group hover:bg-gradient-to-b hover:from-blue-50 hover:to-white dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300"
    >
      <motion.div 
        className="text-5xl text-blue-600 dark:text-blue-400 mb-6 flex justify-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white font-poppins group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-poppins">
        {description}
      </p>
    </motion.div>
  );
}

export default App;
