import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Baby Album',
      description: 'A futuristic web app that organizes baby photos using AI tagging and timeline features.',
      link: '/projects/Album',
      image: '/images/book-slider.png',
      tags: ['React', 'Javascript', 'Photoshop'],
    },
    {
      title: 'Chess Game',
      description: 'A fully interactive chess game built with advanced AI opponent',
      link: '/projects/Chess',
      image: '/images/ChessGame.png',
      tags: ['C++'],
    },
    {
      title: 'Risk Game',
      description: 'A digital version of the classic strategy board game with local multiplayer features.',
      link: '/projects/Risk',
      image: '/images/Risk-game.png',
      tags: ['Unity'],
    },
    {
      title: 'Car Showroom',
      description: 'A virtual showroom that showcases 3D car models.',
      link: '/projects/Car_Showroom',
      image: '/images/car.png',
      tags: ['React', 'Django'],
    },
    {
      title: '3D Portfolio',
      description: 'An immersive 3D experience where users explore a virtual room to view projects and skills.',
      link: '/projects/3D_Portfolio',
      image: '/images/3d.png',
      tags: ['React', 'Javascript', 'Blender'],
    },
    {
      title: 'Payapp',
      description: 'A secure payment platform with features like money transfers, request tracking, and currency conversion.',
      link: '/projects/Payapp',
      image: '/images/payapp.png',
      tags: ['HTML/Bootstrap', 'Django', 'Docker', 'PostgreSQL'],
    },    
  ];

  return (
    <section className="min-h-screen text-white p-8">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Link
            to={project.link}
            key={index}
            className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-black bg-opacity-30 px-3 py-1 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
