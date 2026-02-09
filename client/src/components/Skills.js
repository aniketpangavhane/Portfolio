import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "Next.js (Basic)",
        "JavaScript (ES6+)",
        "HTML",
        "CSS"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "REST API Development",
        "Authentication Systems",
        "Authorization Systems"
      ]
    },
    {
      title: "Databases",
      skills: [
        "MongoDB",
        "MySQL",
        "Database Schema Design",
        "Query Optimization"
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        "JavaScript",
        "Python (Basic)"
      ]
    },
    {
      title: "AR/VR Development",
      skills: [
        "Unity 3D",
        "C#",
        "AR/VR SDK",
        "VR Interaction Systems",
        "Gaze-Based Navigation"
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code"
      ]
    },
    {
      title: "Core Computer Science",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "MVC Architecture",
        "Async Programming",
        "Error Handling"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary-50">
      <div className="container-custom">

        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Skills aligned with real project & development experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-bold mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
