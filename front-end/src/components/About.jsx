import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white text-center p-8">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="w-100 h-100 mb-6 md:mb-0 rounded-full overflow-hidden shadow-lg md:mr-8">
          <img 
            src="/images/Axel.jpeg" 
            alt="Axel Gumiit" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:ml-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate__animated animate__fadeIn">
            Hi, I'm Axel Gumiit 👋
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-6 opacity-80 animate__animated animate__fadeIn animate__delay-1s">
            I am passionate about front-end development. Focused on creating visually appealing and user-friendly websites using HTML, CSS, JavaScript, and React, I'm always exploring new tools and technologies to enhance my skills.
          </p>

          <div className="mb-8 animate__animated animate__fadeIn animate__delay-2s">
            <h2 className="text-3xl font-semibold mb-4">My Skills</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-lg opacity-90">
              <li className="bg-blue-800 text-white p-6 rounded-lg shadow-lg relative group">
                React
                <div className="w-full bg-gray-200 mt-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="mt-2 text-xl">90%</p>
              </li>
              <li className="bg-blue-800 text-white p-6 rounded-lg shadow-lg relative group">
                Django
                <div className="w-full bg-gray-200 mt-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="mt-2 text-xl">75%</p>
              </li>
              <li className="bg-blue-800 text-white p-6 rounded-lg shadow-lg relative group">
                JavaScript
                <div className="w-full bg-gray-200 mt-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="mt-2 text-xl">80%</p>
              </li>
              <li className="bg-blue-800 text-white p-6 rounded-lg shadow-lg relative group">
                HTML/CSS
                <div className="w-full bg-gray-200 mt-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="mt-2 text-xl">100%</p>
              </li>
              <li className="bg-blue-800 text-white p-6 rounded-lg shadow-lg relative group">
                Tailwind CSS
                <div className="w-full bg-gray-200 mt-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="mt-2 text-xl">60%</p>
              </li>
              <li className="bg-blue-800 text-white p-6 rounded-lg shadow-lg relative group">
                Git & GitHub
                <div className="w-full bg-gray-200 mt-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="mt-2 text-xl">85%</p>
              </li>
              <li className="bg-blue-800 text-white p-6 rounded-lg shadow-lg relative group">
                SQL
                <div className="w-full bg-gray-200 mt-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="mt-2 text-xl">65%</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link 
              to="/projects"
              className="px-6 py-3 bg-white text-blue-800 font-semibold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
