import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'; // Import icons

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xovdlzze', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: data,
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <section className="min-h-screen text-white p-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center mb-8"
      >
        <Typewriter
          words={['Contact Me', 'Let’s Talk', 'Send a Message']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-xl p-6 max-w-lg mx-auto space-y-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-lg bg-black bg-opacity-50 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-4 rounded-lg bg-black bg-opacity-50 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-4 rounded-lg bg-black bg-opacity-50 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-blue-400"
        >
          Send Message
        </button>

        {status === 'SUCCESS' && (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
            className="text-green-400 text-center mt-2 font-semibold"
          >
            🎉 Message sent successfully! 🎉
          </motion.p>
        )}
        {status === 'ERROR' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-center mt-2"
          >
            Oops! Something went wrong.
          </motion.p>
        )}
      </motion.form>

      <div className="text-center mt-8 space-y-2">
        <p className="flex justify-center items-center space-x-2">
          <FiMail className="text-white text-3xl" />
          <a href="mailto:axelgumiit1@gmail.com" className="text-white text-3xl">
            axelgumiit1@gmail.com
          </a>
        </p>
        <p className="flex justify-center items-center space-x-2">
          <FiLinkedin className="text-white text-3xl" />
          <a
            href="https://www.linkedin.com/in/axel-gumiit-2992501a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl"
          >
            Axel Gumiit
          </a>
        </p>
        <p className="flex justify-center items-center space-x-2">
          <FiGithub className="text-white text-3xl" />
          <a
            href="https://github.com/AxelGumiit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl"
          >
            Axel Gumiit
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
