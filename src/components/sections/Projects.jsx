import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
            hover:shadow-[0_2px_8px_rgba(59,130,246,.2)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Food Delivery Website</h3>
              <p className="text-gray-400 mb-4">
                Scalable food delivery website with admin dashboard and
                modernised user interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express.js", "ReactJS", "Node.js", "JWT"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/narayanan1208/food-delivery-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Projects →{" "}
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
            hover:shadow-[0_2px_8px_rgba(59,130,246,.2)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">
                Student Management Portal
              </h3>
              <p className="text-gray-400 mb-4">
                Student management portal for school and college.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Python",
                  "Django",
                  "ReactJS",
                  "TypeScript",
                  "JWT",
                  "Bootstrap",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/narayanan1208/student-management-portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Projects →{" "}
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
            hover:shadow-[0_2px_8px_rgba(59,130,246,.2)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Paradise Nursery</h3>
              <p className="text-gray-400 mb-4">
                A simple user friendly plant shopping website
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ReactJS", "Redux", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://narayanan1208.github.io/e-plantShopping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Projects →{" "}
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
            hover:shadow-[0_2px_8px_rgba(59,130,246,.2)] transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Bibliophile's Paradise</h3>
              <p className="text-gray-400 mb-4">
                A simple library checkout cystem where users can search and
                borrow books from a library.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Flask", "ReactJS", "TypeScript", "Docker"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/narayanan1208/Library-Checkout-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Projects →{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
