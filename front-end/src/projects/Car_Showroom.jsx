import React from 'react';

const Car_Showroom = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center text-center px-4 py-10 bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500">
      <header className="text-5xl md:text-7xl font-bold text-white mb-20 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
        🚗 Car Showroom Web Application
      </header>

      <section className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-6xl w-full">

        {/* Text Section */}
        <div className="flex-1 text-left max-w-xl text-lg text-black space-y-6">
          <p>
            An interactive car showroom web application built with a React frontend and Django (with Django REST Framework) backend. Users can browse cars, view detailed information, and enjoy interactive 3D experiences.
          </p>
          <p>
            This application allows users to explore a range of vehicles, view detailed information such as specifications, pricing, and images. Additionally, users can test drive cars in an interactive 3D showroom environment.
          </p>
          <p>
            The frontend is powered by React and React Router, allowing smooth transitions between pages, while the backend, built with Django and Django REST Framework, handles user authentication, car data management, and API responses.
          </p>
          <p>
            The project also integrates React Three Fiber to provide 3D renderings, allowing users to interact with the car models in a virtual showroom.
          </p>
          <p>
          </p>
          <a
            href="https://github.com/AxelGumiit/3Dapp/tree/main/Web3dCw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-10 px-6 py-3 text-xl bg-cyan-400 text-black rounded-lg hover:bg-cyan-600 hover:scale-110 transition transform duration-300">
              Check it out
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center max-w-4xl mt-6 md:mt-0">
          <img
            src="/images/car.png"
            alt="Car Showroom"
            className="w-full max-w-3xl h-auto border-4 border-cyan-400 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.8)]"
          />
        </div>
      </section>
    </div>
  );
};

export default Car_Showroom;
