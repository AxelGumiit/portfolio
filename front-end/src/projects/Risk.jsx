import React from 'react';

const RiskGame = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center text-center px-4 py-10 bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500">
      <header className="text-5xl md:text-7xl font-bold text-white mb-20 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
      🎲 Risk Game: World Conquest
      </header>

      <section className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-6xl w-full">

        {/* Text Section */}
        <div className="flex-1 text-left max-w-xl text-lg text-black space-y-6">
          <p>
            A strategy game inspired by the classic Risk game where you can conquer the world with tactical gameplay.
          </p>
          <p>
            This project was developed using Unity and C# to create an immersive strategy game where players can strategize and battle for global domination.
          </p>
          <p>
            The game features turn-based combat, territory expansion, and resource management, providing a deep and engaging tactical experience.
          </p>
          <a
            href="https://github.com/AxelGumiit/world-conquest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 px-6 py-3 text-xl bg-cyan-400 text-black rounded-lg hover:bg-cyan-600 hover:scale-110 transition transform duration-300">
              Check it out on GitHub
            </button>
          </a>
        </div>


        <div className="flex-1 flex justify-center items-center max-w-4xl mt-6 md:mt-0">
          <img
            src="/images/Risk-game.png"
            alt="Risk Game Screenshot"
            className="w-full max-w-3xl h-auto border-4 border-cyan-400 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.8)]"
          />
        </div>
      </section>
    </div>
  );
};

export default RiskGame;
