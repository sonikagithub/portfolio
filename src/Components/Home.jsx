import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import resume from "../assets/ResumePV.pdf";
import BackImage1 from "../assets/HomeBack.jpeg";

const Home = () => {
  return (
    <div
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackImage1})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E90E65] to-[#161514] opacity-75"></div>
      </div>

      {/* Social Media Icons in Top-Right */}
      <div className="absolute top-4 right-4 flex space-x-4 z-20">
        <a
          href="https://www.linkedin.com/in/pooja-verma-9051a3232/"
          className="p-2 rounded-full border border-white hover:bg-white hover:text-[#161514] transition"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/sonikagithub"
          className="p-2 rounded-full border border-white hover:bg-white hover:text-[#161514] transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      {/* Content in Two-Column Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-11/12 max-w-4xl">
        {/* Left Grid: Name with Slide Animation */}
        <div className="text-center md:text-left ">
          <h1 className="text-5xl font-bold mb-4 whitespace-nowrap">
            Hi, I'm Pooja Verma
          </h1>

          <p className="text-lg animate-fade-in-delay">
            Web Developer & Designer and I'm a developer passionate about
            creating stunning web applications.
          </p>
          <a
            href={resume}
            download="PoojaVerma_Resume.pdf"
            className="mt-4 px-6 py-2 inline-block bg-white text-[#161514] font-semibold rounded-full hover:bg-opacity-90 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
