import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/99 via-black/97 to-black/95 backdrop-blur-xl z-50 shadow-2xl border-b border-amber-600/10"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-amber-600/30 to-transparent blur-lg"></div>

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo with glow effect */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <span className="relative text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 group-hover:from-amber-200 group-hover:to-amber-500 transition-all duration-300">
              OMOR FARUK
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 font-medium">
          <motion.div initial="rest" whileHover="hover" variants={linkVariants}>
            <Link to="/" className="text-gray-300 hover:text-amber-400 relative group transition-colors duration-300 text-sm uppercase tracking-wider">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.div>

          <motion.div initial="rest" whileHover="hover" variants={linkVariants}>
            <Link to="/projects" className="text-gray-300 hover:text-amber-400 relative group transition-colors duration-300 text-sm uppercase tracking-wider">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.div>

          <motion.div initial="rest" whileHover="hover" variants={linkVariants}>
            <a href="/contact" className="text-gray-300 hover:text-amber-400 relative group transition-colors duration-300 text-sm uppercase tracking-wider">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </motion.div>

          <motion.a
            href="https://drive.google.com/uc?export=download&id=1lajywt-pb3jJFJ3lxevalFzsFg1_QIMd"
            download="OMOR-FARUK-Resume.pdf"
            className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg text-sm uppercase tracking-wider"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 15px 35px rgba(251, 146, 60, 0.5)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </div>

        {/* Mobile Menu Button with icon */}
        <motion.div className="md:hidden">
          <motion.button
            onClick={() => setOpen(!open)}
            className="text-white hover:text-amber-400 transition-colors duration-300 p-2 hover:bg-amber-600/10 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <motion.div 
          className="md:hidden bg-gradient-to-b from-gray-950/98 to-black/98 backdrop-blur-xl shadow-2xl p-6 space-y-2 border-t border-amber-600/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: "Home", path: "/" },
            { label: "Projects", path: "/projects" },
            { label: "Contact", path: "/contact" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-amber-400 py-3 px-4 rounded-lg hover:bg-amber-600/10 transition-all duration-300 text-sm uppercase tracking-wider"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            custom={3}
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1lajywt-pb3jJFJ3lxevalFzsFg1_QIMd"
              download="OMOR-FARUK-Resume.pdf"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg text-center font-semibold hover:from-amber-600 hover:to-amber-700 transition-all mt-4 text-sm uppercase tracking-wider"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
