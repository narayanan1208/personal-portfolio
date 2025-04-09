import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Narayanan
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a full-stack developer with a passion for creating dynamic and
            responsive web applications.My goal is to build user-friendly
            interfaces and optimize performance to enhance user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,.4)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/narayanan-srikumar-757411132/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,.4)] hover:bg-blue-500/10"
            >
              LinkedIn Bio
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
