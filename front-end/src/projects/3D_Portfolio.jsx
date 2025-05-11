import React from 'react';

const Website= () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center text-center px-4 py-10 bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500">
      <header className="text-5xl md:text-7xl font-bold text-white mb-20 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
      📚 3D Portfolio
      </header>

      <section className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-6xl w-full">

        {/* Text Section */}
        <div className="flex-1 text-left max-w-xl text-lg text-black space-y-6">
          <p>
          An interactive 3D website created using React Three Fiber with animations to showcase modern web design techniques.
          </p>
          <p>
          This project is a demonstration of how 3D graphics and animations can be incorporated into a website using the React framework, powered by React Three Fiber. The website features interactive 3D elements and smooth animations for an engaging user experienc
          </p>
          <a
            href="https://axelgumiit.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-10 px-6 py-3 text-xl bg-cyan-400 text-black rounded-lg hover:bg-cyan-600 hover:scale-110 transition transform duration-300">
              Check it out 
            </button>
          </a>
        </div>


        <div className="flex-1 flex justify-center items-center max-w-4xl mt-6 md:mt-0">
          <img
            src="/images/3d.png"
            alt="Chess"
            className="w-full max-w-3xl h-auto border-4 border-cyan-400 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.8)]"
          />
        </div>
      </section>
    </div>
  );
};

export default Website;
