import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://ecommerce-demo.com',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    github: 'https://github.com/yourusername/taskmanager',
    live: 'https://taskmanager-demo.com',
    tags: ['React', 'Firebase', 'Tailwind'],
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    github: 'https://github.com/yourusername/dashboard',
    live: 'https://dashboard-demo.com',
    tags: ['React', 'D3.js', 'API'],
  },
  {
    title: 'Weather Application',
    description: 'Real-time weather updates with location tracking',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8',
    github: 'https://github.com/yourusername/weather',
    live: 'https://weather-demo.com',
    tags: ['React', 'OpenWeather API'],
  },
  {
    title: 'Blog Platform',
    description: 'Modern blogging platform with markdown support',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
    github: 'https://github.com/yourusername/blog',
    live: 'https://blog-demo.com',
    tags: ['React', 'Next.js', 'MongoDB'],
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    github: 'https://github.com/yourusername/dashboard',
    live: 'https://dashboard-demo.com',
    tags: ['React', 'D3.js', 'API'],
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">Some of my recent work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
