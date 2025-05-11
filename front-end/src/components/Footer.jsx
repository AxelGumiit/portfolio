import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black bg-opacity-80 text-white py-8 mt-16 text-center">
      <p className="text-sm md:text-base">© 2025 Axel Gumiit. All Rights Reserved.</p>
      <div className="flex justify-center space-x-8 mt-4">
        <a
          href="https://www.linkedin.com/in/axel-gumiit-2992501a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 transform hover:scale-110 hover:text-gray-400"
        >
          <i className="fab fa-linkedin-in text-4xl md:text-5xl"></i>
        </a>
        
        <a
          href="https://github.com/AxelGumiit"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 transform hover:scale-110 hover:text-gray-400"
        >
          <i className="fab fa-github text-4xl md:text-5xl"></i>
        </a>
        
        <a
          href="mailto:axelgumiit1@gmail.com"
          className="transition-all duration-300 transform hover:scale-110 hover:text-gray-400"
        >
          <i className="fas fa-envelope text-4xl md:text-5xl"></i>
        </a>
      </div>
      <div className="mt-6 text-xs md:text-sm">
        <p className="text-gray-400">Built with React</p>
      </div>
    </footer>
  );
};

export default Footer;
