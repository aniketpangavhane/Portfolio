import React, { useEffect, useState } from 'react';
import myPhoto from "../assets/My_Photo.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full-Stack Developer', 'MERN Stack Developer', 'Frontend Developer', 'Backend Developer'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentRole.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary-50 via-white to-primary-50 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary-200 rounded-full blur-xl opacity-30 animate-pulse-soft"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-accent-200 rounded-full blur-xl opacity-30 animate-pulse-soft"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">

          {/* LEFT CONTENT */}
          <div className="space-y-8 animate-slide-in-left">

            <div className="space-y-4">
              <p className="text-primary-600 font-semibold text-lg">
                👋 Hello, I'm
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900">
                <span className="gradient-text">Aniket Pangavhane</span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-secondary-700 flex items-center">
                I'm a
                <span className="ml-2 text-primary-600 relative">
                  {displayText}
                  <span className="animate-blink">|</span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-secondary-600 max-w-2xl leading-relaxed">
              Backend Developer specializing in Node.js, Express.js, and MongoDB.
              I build secure, scalable APIs and also develop immersive AR/VR
              systems using Unity.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary btn-lg"
              >
                Get In Touch
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-secondary btn-lg"
              >
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <p className="text-secondary-600 font-medium">
                Connect with me:
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-lg shadow-soft hover:-translate-y-1 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-lg shadow-soft hover:-translate-y-1 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">

              <img
                src={myPhoto}
                alt="Profile"
                className="rounded-full w-80 h-80 object-cover border-4 border-white shadow-lg"
              />

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
                JS
              </div>

              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                DB
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-8 py-8 border-t border-secondary-200">

          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">
              3 Months
            </div>
            <p className="text-secondary-600">
              Internship Experience
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">
              6+
            </div>
            <p className="text-secondary-600">
              Projects Completed
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">
              8+
            </div>
            <p className="text-secondary-600">
              Technologies
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
