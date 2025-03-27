import React from "react";
import DeveloperImage from "../assets/hello2.jpg"; // Adjust the path as necessary

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 text-[#161514] overflow-hidden"
    >
      {/* Background Overlay */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${DeveloperImageBack})`,
        }}
      ></div> */}

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-[#E90E65] mb-10">
          About Me
        </h1>

        {/* Card Section */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden grid md:grid-cols-2 max-w-5xl w-full gap-6 p-6">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={DeveloperImage}
              alt="Developer"
              className="object-cover w-[350px] h-[350px] rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="p-4 flex flex-col justify-center text-start">
            <h2 className="text-3xl font-semibold text-[#E90E65] mb-4">
              Hello!
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Hi, I’m a passionate and dedicated front-end developer currently
              working at Varion Advisor Analytics. My expertise lies in creating
              intuitive and visually appealing user interfaces using modern
              tools and technologies like React, Tailwind CSS, and Bootstrap. I
              enjoy crafting responsive and dynamic applications that provide
              seamless user experiences.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              I have worked on a variety of projects, including food ordering
              platforms, dashboards, and a MERN-based chat application. I am
              skilled in integrating features such as authentication, real-time
              communication, and API handling into my projects.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              As someone who thrives in collaborative environments, I enjoy
              problem-solving and continuously improving my skills. I focus on
              writing clean, maintainable code and keeping up with the latest
              trends in web development.
            </p>

            {/* Button */}
            <a href="mailto:webmaster@example.com">
              <button className="mt-6 px-6 py-3 bg-[#E90E65] text-white text-lg font-bold rounded-full shadow-md hover:bg-[#d00c59] hover:shadow-lg transition duration-300">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
