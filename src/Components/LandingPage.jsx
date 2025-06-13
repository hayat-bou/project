import React from "react";
import ServicesSlider from "./ServicesSlider"; // 👈 مهم

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
        <div className="text-white text-2xl font-bold">Advanced Agency</div>
        <ul className="flex space-x-6 text-white font-medium">
          <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </nav>

      {/* Hero + Services side-by-side */}
      <header
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1740&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Left Hero Text */}
          <div className="text-white max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Elevate Your Brand with <span className="text-yellow-300">Advanced Agency</span>
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              We create impactful strategies and digital experiences that drive success.
            </p>
            <a
              href="#contact"
              className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full transition"
            >
              Get Started
            </a>
          </div>

          {/* Right Services Slider */}
          <ServicesSlider />
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
