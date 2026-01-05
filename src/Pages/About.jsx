import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-900">
      <div className="container mx-auto max-w-4xl px-6">
  
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center md:text-left">
          About Me
        </h2>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
    
          <p>
            I am <span className="text-blue-400 font-bold">Omor Faruk</span>, a
            dedicated MERN Stack Developer 
            
            I started programming because I was curious about how websites work.
            This led me to learn <span className="font-semibold text-white">HTML, CSS, and JavaScript</span>,
            eventually becoming a full-stack developer.
          </p>

    
          <p>
            I really enjoy building websites that are easy to use. I love working on the
            "brain" of the website—the backend. I have experience handling
            <span className="font-semibold text-white"> user logins and databases</span> in
            projects like <span className="italic text-blue-300">Club Sphere</span>.
            I always strive to write clean code and find the best ways to solve problems.
          </p>


          <p>
            When I am not coding, I love <span className="font-medium text-white">playing cricket and badminton</span>.
            I also enjoy <span className="font-medium text-white">traveling</span> to new places.
            These hobbies help me stay active and have taught me how to work well in a team.
            I am a hardworking person who is always ready to learn new things and build helpful tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;