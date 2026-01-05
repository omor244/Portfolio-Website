import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillGroups = {
    Frontend: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "NextJs", level: 75 },
    
      // { name: "Redux", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      // { name: "Bootstrap 5", level: 80 },
    ],
    Backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "NextJs Server", level: 60 },
    ],
    Tools: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 80 },
      { name: "Postman", level: 85 },
      { name: "Tan Stack Query", level: 90 },
      { name: "React Hook Form ", level: 70 },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
      },
    }),
  };

  const progressVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  const titleVariants = {
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

  return (
    <section id="skills" className="py-20 bg-linear-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          My <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">Skills</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Object.entries(skillGroups).map(([group, items]) => (
            <motion.div
              key={group}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)",
              }}
              className="bg-linear-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
            >
              <motion.h3
                className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {group}
              </motion.h3>

              <ul className="space-y-6">
                {items.map((item, idx) => (
                  <motion.li
                    key={item.name}
                    custom={idx}
                    variants={skillItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <motion.span
                        className="font-medium text-white text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + idx * 0.08 }}
                      >
                        {item.name}
                      </motion.span>
                      <motion.span
                        className="text-amber-400 font-semibold text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + idx * 0.08 }}
                      >
                        {item.level}%
                      </motion.span>
                    </div>

                    {/* Progress bar container */}
                    <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        custom={item.level}
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-linear-to-r from-amber-500 to-amber-400"
                        style={{
                          background: "linear-gradient(90deg, #d97706, #fbbf24)",
                          boxShadow: "0 0 10px rgba(251, 146, 60, 0.6)",
                        }}
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
