import React from 'react';

const Album= () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center text-center px-4 py-10 bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500">
      <header className="text-5xl md:text-7xl font-bold text-white mb-20 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
      📚 Baby Album
      </header>

      <section className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-6xl w-full">

        {/* Text Section */}
        <div className="flex-1 text-left max-w-xl text-lg text-black space-y-6">
          <p>
          A 3D interactive photo album created using the React framework.
          </p>
          <p>
          This 3D book showcases a photo album with flipping pages and interactive features. Built using the React framework, it allows users to interact with images in a 3D space, flipping through pages just like a real book.
          </p>
          <p>
          This project demonstrates how 3D elements and interactivity can be seamlessly integrated into a modern website, providing a unique user experience.
          </p>
          <a
            href="https://shantelle.netlify.app/"
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
            src="/images/book-slider.png"
            alt="Chess"
            className="w-full max-w-3xl h-auto border-4 border-cyan-400 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.8)]"
          />
        </div>
      </section>
    </div>
  );
};

export default Album;
