const Projects = () => {
  const projects = [
    {
      title: "College Website",
      description: "A responsive college website showcasing modern design.",
      link: "https://github.com/NomaanAttar/CollegeWebsite",
    },
    {
      title: "Weather App",
      description: "A responsive weather app",
      link: "https://github.com/NomaanAttar/weather-app",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-black text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 hover:cursor-pointer text-white shadow-lg rounded-lg hover:scale-105 transform transition-all"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-100 mt-4 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
