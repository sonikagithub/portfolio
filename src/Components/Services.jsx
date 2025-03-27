import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Services = () => {
  const skills = [
    { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#68A063" /> },
    { name: "MongoDB", icon: <FaDatabase size={40} color="#4DB33D" /> },
    { name: "HTML", icon: <FaHtml5 size={40} color="#E34C26" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} color="#F7DF1E" /> },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill size={40} color="#38B2AC" />,
    },
    { name: "Bootstrap", icon: <FaBootstrap size={40} color="#7952B3" /> },
    {
      name: "C",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/512px-C_Programming_Language.svg.png"
          alt="C Programming Language"
          className="w-10 h-10"
        />
      ),
    },
    {
      name: "C++",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
          alt="C++ Programming Language"
          className="w-10 h-10"
        />
      ),
    },
    { name: "Java", icon: <FaJava size={40} color="#007396" /> },
    {
      name: "Express.js",
      icon: (
        <img
          src="https://w7.pngwing.com/pngs/846/87/png-transparent-mean-solution-stack-express-js-node-js-javascript-github-text-trademark-logo.png"
          alt="Express.js Framework"
          className="w-10 h-10"
        />
      ),
    },
  ];

  return (
    <div id="skills" className="px-8 py-10 bg-gray-100 text-gray-800">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center mb-8 text-[#E90E65]">
        My Services & Skills
      </h1>

      {/* Introduction Section */}
      <section className="mb-12">
        <p className="text-lg text-center max-w-2xl mx-auto">
          I am a software developer skilled in the MERN stack, specializing in
          frontend development with React and backend development with Node.js.
          I also have experience in using MongoDB, Express.js, and related
          technologies to create full-stack applications.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#E90E65]">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-[#E90E65]">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
