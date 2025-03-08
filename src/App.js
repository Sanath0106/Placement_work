import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  FaMoon, 
  FaSun, 
  FaRocket, 
  FaCode, 
  FaBars,
  FaTimes,
  FaLaptopCode,
  FaTrophy,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
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
              <div className="flex items-center space-x-3">
                {/* Logo Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-2xl"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🌍
                  </motion.div>
                </motion.div>

                {/* Logo Text */}
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold relative">
                    <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 bg-clip-text text-transparent">
                      Earthling
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500">
                      Aid
                    </span>
                    <span className="relative">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Tech
                      </span>
                      <motion.span
                        className="absolute -top-1 -right-2 text-xs"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.8, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        ⚡
                      </motion.span>
                    </span>
                  </h1>
                </div>
              </div>
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
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[20%] w-20 h-20 text-white/10"
        >
          <FaCode size={80} />
        </motion.div>

        <motion.div 
          animate={{ 
            y: [20, -20, 20],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-[15%] w-16 h-16 text-white/10"
        >
          <FaLaptopCode size={64} />
        </motion.div>

        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-6"
              >
                <span className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sm font-medium">
                  🚀 Your Career Journey Starts Here
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Prepare, Practice,{" "}
                <motion.span
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Succeed
                </motion.span>
              </h1>
              <p className="text-xl mb-8 text-gray-100/90 leading-relaxed">
                Your one-stop platform for placement preparation. Master technical interviews, 
                solve coding challenges, and track your progress towards success.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-3 rounded-full font-semibold text-lg overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:bg-white"></span>
                  <span className="relative text-blue-600 flex items-center">
                    Get Started <FaRocket className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="hidden md:block relative"
            >
              {/* Glowing effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl transform scale-110"></div>
              
              {/* Floating elements around image */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <motion.img 
                  src="/images/hero-image.png"
                  alt="Platform Preview" 
                  className="w-full drop-shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </motion.div>

              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20 px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.2] md:leading-[1.3] tracking-normal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Everything You Need to Succeed
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Comprehensive tools and resources to help you ace your placement interviews
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
            {[
              {
                icon: <FaLaptopCode className="text-blue-500 dark:text-blue-400" />,
                title: "Interactive Quizzes",
                description: "Practice with our vast collection of technical and aptitude questions"
              },
              {
                icon: <FaCode className="text-purple-500 dark:text-purple-400" />,
                title: "Code Practice",
                description: "Solve real coding problems with our integrated IDE"
              },
              {
                icon: <FaTrophy className="text-blue-500 dark:text-blue-400" />,
                title: "Track Progress",
                description: "Monitor your improvement with detailed performance analytics"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg 
                           transition-all duration-300 hover:shadow-2xl border border-gray-100 
                           dark:border-gray-700 flex flex-col items-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 
                              dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" 
                />
                <div className="relative z-10 w-full">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 
                                transition-transform duration-300 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white 
                               group-hover:text-blue-600 dark:group-hover:text-blue-400 
                               transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                              from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 
                              transition-transform duration-300 rounded-b-2xl" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="mb-12 px-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.4] md:leading-[1.4] tracking-normal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-2">
                About EarthlingAidTech
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed px-4 max-w-3xl mx-auto">
              EarthlingAidTech is your comprehensive platform for placement preparation, designed to help students excel in 
              their career journey. We combine cutting-edge technology with expert guidance to provide the best learning 
              experience.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
            {[
              {
                title: "Our Mission",
                description: "To empower students with the tools and knowledge they need to secure their dream careers.",
                icon: "🎯"
              },
              {
                title: "Our Vision",
                description: "To become the leading platform for placement preparation and career development.",
                icon: "👁️"
              },
              {
                title: "Our Values",
                description: "Excellence, Innovation, and Student Success drive everything we do.",
                icon: "⭐"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-700 p-10 rounded-2xl shadow-lg 
                           transition-all duration-300 hover:shadow-2xl border border-gray-100 
                           dark:border-gray-600 flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 
                              dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" 
                />
                <div className="relative z-10 flex-1">
                  <span className="block text-5xl mb-6 transform group-hover:scale-110 
                                 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white 
                               group-hover:text-blue-600 dark:group-hover:text-blue-400 
                               transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                              from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 
                              transition-transform duration-300 rounded-b-2xl" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-400">EarthlingAidTech</h2>
              <p className="text-gray-400">
                Empowering students to achieve their career goals through comprehensive placement preparation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    className="text-gray-400 hover:text-blue-400 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    className="text-gray-400 hover:text-blue-400 cursor-pointer"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="features" 
                    spy={true} 
                    smooth={true} 
                    className="text-gray-400 hover:text-blue-400 cursor-pointer"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://bmsit.ac.in/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400"
                  >
                    College Website
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">For Users</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => {/* Add your login logic here */}} 
                    className="text-gray-400 hover:text-blue-400 text-left w-full"
                  >
                    Student Login
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {/* Add your login logic here */}} 
                    className="text-gray-400 hover:text-blue-400 text-left w-full"
                  >
                    Staff Login
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {/* Add your help center logic here */}} 
                    className="text-gray-400 hover:text-blue-400 text-left w-full"
                  >
                    Help Center
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <FaEnvelope className="mr-2" />
                  <a href="mailto:contact@earthlingaidtech" className="hover:text-blue-400">
                    contact@earthlingaidtech
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <FaPhone className="mr-2" />
                  <a href="tel:+91 9876543210" className="hover:text-blue-400">
                    +91 987 654 3210
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <FaMapMarkerAlt className="mr-2" />
                  <address className="not-italic">
                    Yelahanka, Avalahalli,<br />
                    Bengaluru, Karnataka - 560064
                  </address>
                </li>
                <li className="flex items-center space-x-4 mt-4">
                  <a 
                    href="https://www.linkedin.com/school/bms-institute-of-technology-and-management/posts/?feedView=all" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href="https://twitter.com/earthlingaidtech" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/bmsitm_bengaluru/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EarthlingAidTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
