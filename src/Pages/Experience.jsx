import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "MERN Stack Web Developer",
      company: "Programming Hero (Course Completion)",
      duration: "2025",
      description: [
        "Completed a full-stack web development course covering MongoDB, Express, React, and Node.js.",
        "Built multiple full-stack projects including CRUD applications and e-commerce prototypes.",
        "Gained hands-on experience with REST APIs, JWT Authentication, and responsive UI design.",
      ],
    },
    {
      role: "Frontend Web Developer",
      company: "Personal Projects",
      duration: "2025 - Present",
      description: [
        "Designed and developed responsive websites using React.js, Tailwind CSS, and Bootstrap.",
        "Implemented modern web features including dynamic routing, state management, and API integration.",
        "Focused on clean, scalable, and maintainable code for real-world web applications.",
      ],
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.4 },
    }),
  };

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

  return (
    <section id="experience" className="py-20 bg-linear-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">
            Experience
          </span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(251, 146, 60, 0.4)",
              }}
              className="bg-linear-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg relative z-10 border border-gray-700/50 group"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-linear-to-br from-amber-400/5 to-amber-600/5 pointer-events-none"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
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
                  {exp.role}
                </motion.h3>
                <motion.p
                  className="text-amber-300 font-semibold mt-2"
                  custom={0.1}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {exp.company}
                </motion.p>
                <motion.p
                  className="text-gray-500 text-sm mt-1"
                  custom={0.2}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {exp.duration}
                </motion.p>

                <motion.ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="list-disc list-inside text-gray-400 text-sm hover:text-gray-300 transition-colors"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
