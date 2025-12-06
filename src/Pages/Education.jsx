
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationList = [
    {
      degree: "MERN Stack Course",
      college: "Programming Hero",
      year: "2025",
      major: "Full Stack Web Development",
      icon: "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fhome2%2Fbanner-thumbnail.jpg&w=3840&q=75",
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        duration: 0.8,
      },
    },
  };

  const shimmerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.2, 0.6, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.4 },
    }),
  };

  return (
    <section id="education" className="py-20 bg-linear-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">
            Education
          </span>
        </motion.h2>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-linear-to-b from-amber-500 via-amber-400 to-amber-500 h-full hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          />

          <div className="space-y-12">
            {educationList.map((edu, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between`}
                  custom={isLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Card */}
                  <motion.div
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 25px 50px rgba(251, 146, 60, 0.4)",
                    }}
                    className={`bg-linear-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg w-full md:w-5/12 relative z-10 border border-gray-700/50 group ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Sweating/Sweat Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-linear-to-br from-amber-400/5 to-amber-600/5 pointer-events-none"
                      variants={shimmerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />

                    <div className="relative z-10">
                      <motion.h3
                        className="text-2xl font-semibold text-white group-hover:text-amber-400 transition-colors"
                        custom={0}
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <motion.p
                        className="text-gray-400 mt-2"
                        custom={0.1}
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {edu.college}
                      </motion.p>
                      <motion.p
                        className="text-amber-300 font-semibold mt-3"
                        custom={0.2}
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {edu.major}
                      </motion.p>
                      <motion.p
                        className="text-gray-500 mt-2 text-sm"
                        custom={0.3}
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        Graduation Year: {edu.year}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Image with Sweat Droplets Effect */}
                  <motion.div
                    variants={imageVariants}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(251, 146, 60, 0.5)",
                    }}
                    className="w-36 h-36 md:w-32 md:h-32 mt-6 md:mt-0 md:mx-8 relative group"
                  >
                    <img
                      src={edu.icon}
                      alt="Education Icon"
                      className="w-full h-full object-cover rounded-full shadow-md"
                    />

                    {/* Sweat droplet animations */}
                    {[0, 1, 2].map((drop) => (
                      <motion.div
                        key={drop}
                        className="absolute w-2 h-3 bg-linear-to-b from-amber-300 to-amber-500 rounded-full opacity-0"
                        animate={{
                          y: [0, 40, 80],
                          opacity: [1, 0.7, 0],
                          x: Math.random() * 20 - 10,
                        }}
                        transition={{
                          duration: 2,
                          delay: drop * 0.4,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                        style={{
                          top: "50%",
                          left: `${30 + drop * 20}%`,
                        }}
                      />
                    ))}

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-linear-to-br from-amber-400/20 to-amber-600/20 blur-lg pointer-events-none"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
