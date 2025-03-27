import React from "react";
import { FaEye } from "react-icons/fa";
import Daylog from "../assets/Daylogs.png";
import Tomato from "../assets/FoodDel.png";
import Geek from "../assets/LoginForm.png";
import TempConvertor from "../assets/TempCon.png";
import Educity from "../assets/Educity.png";
import Calculator from "../assets/Calculator.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: Daylog,
      title: "DAYLOGS",
      description:
        "I built a modern HRMS website with a responsive frontend using React and Tailwind CSS...",
      link: "https://daylogs.in/",
    },
    {
      id: 2,
      image: Tomato,
      title: "TOMATO",
      description:
        "I created a food ordering website that offers a seamless experience for browsing, selecting, and ordering dishes.",
      link: "https://food-del-lilac.vercel.app/",
    },
    {
      id: 3,
      image: Geek,
      title: "Geek-Shop",
      description:
        "I created a sleek Login and Registration form using React and CSS. It features responsive design, smooth transitions, and clear form validation for a seamless user experience.",
      link: "https://react-form-eight-brown.vercel.app/",
    },
    {
      id: 4,
      image: TempConvertor,
      title: "Temperature Converter",
      description:
        "An application to convert temperatures between Celsius, Fahrenheit, and Kelvin.",
      link: "https://sonikagithub.github.io/tempconverter/",
    },
    {
      id: 5,
      image: Educity,
      title: "Educity",
      description:
        "A college website project is a comprehensive platform designed to provide essential information about the institution. It includes sections for courses, admissions, faculty, events, and student resources. ",
      link: "https://education-iota-fawn.vercel.app/",
    },
    {
      id: 6,
      image: Calculator,
      title: "Calculator",
      description:
        "A basic calculator application for performing arithmetic operations.",
      link: "https://fitnesstracker.com/",
    },
  ];

  return (
    <div id="projects" className="px-4 sm:px-10 md:px-20 lg:px-40 py-8">
      <h1 className="text-center text-2xl md:text-3xl font-bold my-6 md:my-10">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative border rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 cursor-pointer"
          >
            {/* Image Section */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-48 object-cover"
            />
            {/* Text Section */}
            <div className="p-4">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 flex items-center mt-3"
              >
                <FaEye className="mr-2" />
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
