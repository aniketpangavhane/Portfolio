import React from 'react';

const About = () => {

  // ✅ Updated Highlights (Backend + AR/VR)
  const highlights = [
    {
      icon: '⚙️',
      title: 'Backend Architecture',
      description: 'Designing scalable REST APIs & microservice-ready systems'
    },
    {
      icon: '🔐',
      title: 'Security Focused',
      description: 'JWT Authentication, RBAC & secure backend workflows'
    },
    {
      icon: '🥽',
      title: 'AR/VR Development',
      description: 'Building immersive Unity-based AR/VR applications'
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary-50">
      <div className="container-custom">

        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Section */}
          <div className="relative animate-slide-in-left">

            <div className="relative z-10">
              <div className="w-full h-auto rounded-2xl shadow-large bg-white aspect-[4/5] flex items-center justify-center">

                {/* MERN Logo */}
                <img
                  src="https://www.workiy.com/sites/default/files/inline-images/MERN-logo.png"
                  alt="MERN Logo"
                  className="-rotate-90 p-6"
                />

              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-slide-in-right">

            <div className="space-y-6">

              <h3 className="text-2xl md:text-3xl font-bold text-secondary-900">
                Backend Developer & AR/VR Enthusiast
              </h3>

              <div className="space-y-4 text-secondary-600 text-lg leading-relaxed">

                <p>
                  I'm a passionate <span className="font-semibold text-primary-600">B.Tech IT Engineering student</span> at
                  <span className="font-semibold text-primary-600"> MIT ADT UNIVERSITY, PUNE</span>,
                  specializing in backend development and scalable system design.
                </p>

                <p>
                  I recently completed a <span className="font-semibold text-primary-600">
                  Backend Developer Internship at Combat Solutions AI</span>,
                  where I built secure APIs, optimized databases, and contributed to real-world AI-driven systems.
                </p>

                <p>
                  My core expertise lies in <span className="font-semibold">Node.js, Express.js, MongoDB, and REST API development</span>.
                  I focus on writing clean, production-ready code with strong authentication, performance optimization,
                  and scalable architecture.
                </p>

                <p>
                  Beyond web development, I also work on <span className="font-semibold text-primary-600">AR/VR systems using Unity</span>,
                  building immersive virtual environments and interactive simulations.
                </p>

              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-6">

              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="text-3xl">
                    {highlight.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1">
                      {highlight.title}
                    </h4>

                    <p className="text-secondary-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">

              {/* Resume Download */}
              <a
                href="/Aniket_Pangavhane_Resume.pdf"
                download="Aniket_Pangavhane_Resume.pdf"
                className="btn btn-primary"
              >
                Download Resume
              </a>

              {/* Contact Scroll */}
              <button
                onClick={() =>
                  document.getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn btn-outline"
              >
                Let's Connect
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
