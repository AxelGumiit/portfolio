import React from 'react';

const Payapp= () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center text-center px-4 py-10 bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500">
      <header className="text-5xl md:text-7xl font-bold text-white mb-20 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
      💸 Payapp
      </header>

      <section className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-6xl w-full">

        {/* Text Section */}
        <div className="flex-1 text-left max-w-xl text-lg text-black space-y-6">
        <p>
            Payapp is a modern digital payment application built using HTML,Boostrap and Django, designed for secure and user-friendly financial transactions.
            </p>
            <p>
            It offers features like instant money transfers, payment requests, and real-time transaction tracking, all within a clean, interactive UI. Users can manage their finances efficiently with support for multiple currencies and instant notifications.
            </p>
            <p>
            This project showcases how a seamless and intuitive payment experience can be achieved through modern web technologies, blending performance with functionality.
            </p>

          <a
            href="https://github.com/AxelGumiit/WebApp/tree/main/webapps2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 px-6 py-3 text-xl bg-cyan-400 text-black rounded-lg hover:bg-cyan-600 hover:scale-110 transition transform duration-300">
              Check it out Github
            </button>
          </a>
        </div>


        <div className="flex-1 flex justify-center items-center max-w-4xl mt-6 md:mt-0">
          <img
            src="/images/payapp.png"
            alt="Chess"
            className="w-full max-w-3xl h-auto border-4 border-cyan-400 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.8)]"
          />
        </div>
      </section>
    </div>
  );
};

export default Payapp;
