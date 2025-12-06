
import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/omor.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 20px rgba(251, 146, 60, 0.3)",
      "0 0 40px rgba(251, 146, 60, 0.5)",
      "0 0 20px rgba(251, 146, 60, 0.3)",
    ],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)",
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        duration: 0.8,
      },
    },
  };

  return (
    <header id="hero" className="hero min-h-screen pt-20 bg-linear-to-br from-gray-900 via-black to-gray-950 overflow-hidden">
      <div className="hero-content max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight"
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={wordVariants}
              className="inline-block"
            >
              Hi, I'm
            </motion.div>
            <br />
            <motion.span 
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600"
              variants={wordVariants}
            >
              OMOR FARUK
            </motion.span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-gray-300"
          >
            Frontend Web Developer & MERN Stack Developer — I build accessible
            and performant web apps that people enjoy using.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 flex gap-4 flex-wrap">
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1lajywt-pb3jJFJ3lxevalFzsFg1_QIMd"
              download="OMOR-FARUK-Resume.pdf"
              className="btn btn-primary bg-amber-600 border-0 text-white shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>

            <motion.a
              href="/projects"
              className="btn btn-ghost text-amber-400 border border-amber-500"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center gap-6"
          >
            <motion.a
              href="https://github.com/omor244"
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold underline transition-colors"
              whileHover={{ x: 5 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/omor-dev/"
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold underline transition-colors"
              whileHover={{ x: 5 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="flex justify-center" variants={imageVariants} initial="hidden" animate="visible">
          <motion.div
            className="relative"
            animate={floatingAnimation}
          >
            {/* Outer glow effect (daisyUI-friendly) */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: "linear-gradient(90deg,#f59e0b,#fbbf24)" }}
              animate={glowAnimation}
            ></motion.div>

            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 z-5"></div>

            {/* Image container with professional styling */}
            <div className="relative z-10">
              {/* Professional frame effect */}
              <div className="absolute inset-0 rounded-full" style={{background: 'radial-gradient(circle at 20% 20%, rgba(245,158,11,0.08), transparent)'}}></div>
              
              <motion.img
                src={profile}
                alt="OMOR FARUK"
                className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-2xl border-4 border-amber-500 relative z-20"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              
              {/* Subtle inner shadow */}
              <div className="absolute inset-0 rounded-full shadow-inner border-4 border-black/10 z-30"></div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full blur-sm z-5 opacity-60"></div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
