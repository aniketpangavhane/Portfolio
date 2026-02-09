import React from 'react';

const Experience = () => {
  const experience = {
    position: "Backend Developer Intern",
    company: "Combat Solutions AI",
    duration: "Nov 2025 – 1 Feb 2026",
    location: "Remote",
    type: "Internship",
    achievements: [
      {
        icon: "🔧",
        title: "Backend API Development",
        description:
          "Developed scalable RESTful APIs using Node.js and Express.js to support AI-driven applications and client platforms."
      },
      {
        icon: "🗄️",
        title: "Database Design & Optimization",
        description:
          "Worked with MongoDB and MySQL to design schemas, optimize queries, and ensure efficient data retrieval."
      },
      {
        icon: "🔐",
        title: "Authentication & Security",
        description:
          "Implemented JWT-based authentication and role-based authorization to secure backend services."
      },
      {
        icon: "⚡",
        title: "Performance Optimization",
        description:
          "Enhanced backend performance through async programming, error handling, and optimized middleware usage."
      },
      {
        icon: "🤝",
        title: "Cross-Team Collaboration",
        description:
          "Collaborated with AI engineers and frontend developers to integrate APIs with AI models and UI systems."
      }
    ],
    technologies: [
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "Express.js", color: "bg-gray-100 text-gray-800" },
      { name: "MongoDB", color: "bg-emerald-100 text-emerald-800" },
      { name: "MySQL", color: "bg-blue-100 text-blue-800" },
      { name: "JWT", color: "bg-purple-100 text-purple-800" },
      { name: "REST APIs", color: "bg-orange-100 text-orange-800" },
      { name: "Postman", color: "bg-red-100 text-red-800" },
      { name: "Git", color: "bg-yellow-100 text-yellow-800" }
    ]
  };

  return (
    <section id="experience" className="section-padding bg-secondary-50">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional backend development journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8 lg:p-12 animate-slide-up">

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="space-y-2">

                <div className="flex items-center space-x-3">
                  <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900">
                    {experience.position}
                  </h3>

                  <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                    {experience.type}
                  </span>
                </div>

                <h4 className="text-xl font-semibold text-primary-600">
                  {experience.company}
                </h4>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-secondary-600">

                  {/* Duration */}
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{experience.duration}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{experience.location}</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h5 className="text-lg font-semibold text-secondary-900 mb-6">
                Key Responsibilities & Achievements
              </h5>

              <div className="grid gap-6">
                {experience.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-secondary-100 rounded-xl"
                  >
                    <div className="text-2xl flex-shrink-0 mt-1">
                      {achievement.icon}
                    </div>

                    <div>
                      <h6 className="font-semibold text-secondary-900 mb-1">
                        {achievement.title}
                      </h6>
                      <p className="text-secondary-600 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h5 className="text-lg font-semibold text-secondary-900 mb-4">
                Technologies & Tools Used
              </h5>

              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
