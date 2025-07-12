import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen py-20 px-6 overflow-hidden bg-transparent text-white">

      <div className="absolute inset-0 z-20" />

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-pink-200">Get in Touch</h2>
        <p className="text-lg text-white/80 mb-8">
          I’d love to connect! Whether it’s a job opportunity, project collaboration, or a friendly hello.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-6 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 backdrop-blur-md focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-6 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 backdrop-blur-md focus:outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-6 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 backdrop-blur-md focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="px-8 py-3 bg-pink-400 text-black font-bold rounded-lg hover:bg-pink-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
