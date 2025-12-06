import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shakil Talukder",
      role: "Programming Mentor",
      feedback:
        "OMOR FARUK is a highly dedicated developer. He quickly grasped complex concepts in MERN Stack and delivered projects with excellent quality.",
      image:
        "https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/542091978_122099413803001560_6884597544090672553_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KrVytPyW7vgQ7kNvwHPMS36&_nc_oc=Adncux-FZV3OGbFlcPraX8uJj7oHEfPhAKwbxf_AtCZu05TA5fqRpMJktD2EJq9ULNU&_nc_zt=23&_nc_ht=scontent.fdac11-2.fna&_nc_gid=xW8Q9hujcpEgkXpU6Gf4Qw&oh=00_AfkJGZ4LWLoM001WVtgmslTQzwuRKhsSoUmFSJH2gDwDsA&oe=69382E97",
      rating: 5,
    },
    {
      name: "Talha Tarique",
      role: "Course Instructor",
      feedback:
        "OMOR FARUK consistently shows attention to detail and writes clean, maintainable code. He is a fast learner and a reliable developer.",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQG5s3ECgtbvaA/profile-displayphoto-crop_800_800/B56ZoDPEGHJ4AI-/0/1760990883348?e=1766620800&v=beta&t=i-d9wTzquwqORVJN6OZ-GRDn45jlDMmz-VZArDICmoE",
      rating: 5,
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
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
        delay: index * 0.2,
      },
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
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
    <section id="testimonials" className="py-20 bg-linear-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">
            Testimonials
          </span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{
                y: -15,
                boxShadow: "0 30px 60px rgba(251, 146, 60, 0.3)",
              }}
              className="bg-linear-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg relative z-10 border border-gray-700/50 group overflow-hidden"
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-amber-400/5 to-amber-600/5 pointer-events-none"
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
                {/* Quote Icon */}
                <motion.div
                  className="mb-6 text-amber-500/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Quote size={32} />
                </motion.div>

                {/* Star Rating */}
                <motion.div
                  className="flex gap-1 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {[...Array(test.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </motion.div>

                {/* Feedback Text */}
                <motion.p
                  className="text-gray-300 mb-6 text-sm leading-relaxed italic"
                  custom={0}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  "{test.feedback}"
                </motion.p>

                {/* Divider */}
                <motion.div
                  className="h-px bg-linear-to-r from-transparent via-amber-500 to-transparent mb-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                />

                {/* User Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-500/50"
                    />
                    {/* Avatar glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-amber-500/20 blur-lg"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>

                  {/* Name and Role */}
                  <div className="flex-1">
                    <motion.h3
                      className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors"
                      custom={0.1}
                      variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {test.name}
                    </motion.h3>
                    <motion.p
                      className="text-amber-300 font-medium text-sm"
                      custom={0.2}
                      variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {test.role}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
