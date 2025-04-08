import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "NextJS",
    "TypeScript",
    "Bootstrap",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Python", "PostgreSL", "MongoDB", "AWS"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Computer Science and Engineering</strong> -
                  College of Engineering Adoor (2016-2020)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
              <div className="space-y-6 text-gray-300">
                <div className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all">
                  <h4 className="font-semibold text-lg mb-2">
                    Full Stack Developer at CSC AG Merchants Private Limited
                    (Jan 2024 - Present)
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Engineered Python scripts to calculate diverse insurance
                      quotes for the parent company.
                    </li>
                    <li>
                      Utilized Pandas for report generation in Excel and PDF,
                      and Matplotlib for visualizing insurance quotes.
                    </li>
                    <li>
                      Built the insurance portal's front end for agents and
                      customers using ReactJS and Bootstrap.
                    </li>
                    <li>
                      Customized report content with Jinja templates based on
                      policyholder data and business requirements; executed unit
                      tests for quote calculations.
                    </li>
                    <li>
                      Managed the insurance website database using PostgreSQL.
                    </li>
                    <li>
                      Created a mobile app for the portal with React Native,
                      leveraging Redux Toolkit for efficient state management
                      across web and mobile platforms.
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all">
                  <h4 className="font-semibold text-lg mb-2">
                    Software Engineer at Quest Global (Jan 2021 - Dec 2023)
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Improved automation test reports with JavaScript, HTML,
                      and CSS for enhanced clarity.
                    </li>
                    <li>
                      Developed a folder mapping plugin for SonarQube using
                      ReactJS, TypeScript, HTML, and CSS.
                    </li>
                    <li>
                      Designed a Chart.js visualization plugin for SonarQube to
                      display data in charts and reports.
                    </li>
                    <li>
                      Implemented backend functionality for plugins with Ruby on
                      Rails, managed databases with PostgreSQL, and used Maven
                      for project management in SonarQube.
                    </li>
                    <li>
                      Utilized Java to retrieve results from Coverity,
                      Understand, and Klocwork, uploading data to the SonarQube
                      server.
                    </li>
                    <li>
                      Deployed AI-driven recommendation features in SonarQube
                      using Ruby.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
