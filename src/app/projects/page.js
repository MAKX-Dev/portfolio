export default function Projects() {
  const projects = [
    {
      title: "DSA Visualizer",
      description: "Interactive visualizations of sorting and searching algorithms built with React",
      tech: ["React","Tailwind CSS", "Vercel"],
      link: "https://makx-visualizer.vercel.app/",
      github: "https://github.com/MAKX-Dev/dsa-visualizer"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js and deployed on Vercel",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      link: "#",
      github: "https://github.com/MAKX-Dev/portfolio"
    }
  ]

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.link} target="_blank" className="text-blue-600 hover:underline">
                Live Demo
              </a>
              <a href={project.github} target="_blank" className="text-gray-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}