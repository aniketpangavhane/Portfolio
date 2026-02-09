import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Authentication & Authorization System",
      subtitle: "Full Stack Security Platform",
      description:
        "Developed a secure full stack authentication system with role-based access control and protected application routes.",
      category: "Full Stack",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "REST APIs"
      ],
      features: [
        "Built secure user registration & login workflows",
        "Implemented JWT authentication",
        "Role-based access control system",
        "Protected frontend & backend routes",
        "Scalable Express backend architecture",
        "Integrated APIs with React frontend"
      ]
    },
    {
      title: "ShopEase – E-Commerce Application",
      subtitle: "Full Stack Online Shopping Platform",
      description:
        "Built a full stack e-commerce application with product management, cart system, and secure authentication.",
      category: "Full Stack",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "REST APIs"
      ],
      features: [
        "Product listing & management system",
        "Shopping cart functionality",
        "REST API development",
        "Database schema design",
        "Optimized queries for performance",
        "Modular backend architecture"
      ]
    },
    {
      title: "AR/VR Interactive Experience",
      subtitle: "Unity 3D Virtual Environment",
      description:
        "Developed immersive AR/VR virtual environments with real-time navigation and gaze-based interactions.",
      category: "AR/VR",
      technologies: [
        "Unity 3D",
        "C#",
        "AR/VR SDK",
        "VR Interaction Systems"
      ],
      features: [
        "Built immersive virtual environments",
        "Gaze-based interaction system",
        "Real-time navigation",
        "Optimized VR rendering performance",
        "Collaborated as Technical Co-Lead"
      ]
    }
  ];

  const currentProject = projects[activeProject];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">

        <div className="text-center mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Work based on real development experience</p>
        </div>

        {/* Project Tabs */}
        <div className="flex justify-center mb-10">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`px-6 py-2 m-2 rounded-lg ${
                activeProject === index
                  ? "bg-primary-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Project {index + 1}
            </button>
          ))}
        </div>

        {/* Project Details */}
        <div className="card p-8 space-y-6">
          <h3 className="text-2xl font-bold">{currentProject.title}</h3>
          <p className="text-primary-600 font-semibold">
            {currentProject.subtitle}
          </p>
          <p>{currentProject.description}</p>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-2">Key Features</h4>
            <ul className="list-disc ml-6 space-y-1">
              {currentProject.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="font-semibold mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {currentProject.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
