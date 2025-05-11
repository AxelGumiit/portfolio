import React from 'react';

const ChessGame= () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center text-center px-4 py-10 bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500">
      <header className="text-5xl md:text-7xl font-bold text-white mb-20 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
      ♟️ Chess in C++
      </header>

      <section className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-6xl w-full">

        {/* Text Section */}
        <div className="flex-1 text-left max-w-xl text-lg text-black space-y-6">
          <p>
            A classic chess game built using C++ in a team workshop project
          </p>
          <p>
            This project was developed as part of a workshop where we created a fully-functional chess game in C++. The game features a user-friendly interface and standard chess rules
          </p>
          <p>
          The game allows two players to compete against each other, with move validation, a game timer, and checkmate detection included. It was a great opportunity to apply object-oriented programming concepts to a real-world application
          </p>
          <a
            href="https://github.com/AxelGumiit/cpp-chess"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-10 px-6 py-3 text-xl bg-cyan-400 text-black rounded-lg hover:bg-cyan-600 hover:scale-110 transition transform duration-300">
              Check it out on GitHub
            </button>
          </a>
        </div>


        <div className="flex-1 flex justify-center items-center max-w-4xl mt-6 md:mt-0">
          <img
            src="/images/ChessGame.png"
            alt="Chess"
            className="w-full max-w-3xl h-auto border-4 border-cyan-400 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.8)]"
          />
        </div>
      </section>
    </div>
  );
};

export default ChessGame;
