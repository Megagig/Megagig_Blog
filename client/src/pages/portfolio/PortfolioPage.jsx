import { Github, ExternalLink, Calendar, Tag } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution built with React and Node.js. Features include user authentication, product management, shopping cart functionality, payment processing with Stripe, and order management.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://ecommerce-demo.com',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux', 'JWT'],
    date: '2024',
    features: [
      'User authentication and authorization',
      'Product search and filtering',
      'Shopping cart management',
      'Secure payment processing',
      'Order tracking and history',
      'Admin dashboard for inventory management',
    ],
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates. Built with React and Firebase, it enables teams to organize projects, assign tasks, and track progress efficiently.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    github: 'https://github.com/yourusername/taskmanager',
    live: 'https://taskmanager-demo.com',
    tags: ['React', 'Firebase', 'Tailwind', 'React DnD', 'Real-time Database'],
    date: '2024',
    features: [
      'Real-time collaboration',
      'Drag and drop task organization',
      'Team management',
      'Task comments and attachments',
      'Progress tracking',
      'Email notifications',
    ],
  },
  {
    title: 'Social Media Dashboard',
    description:
      'A comprehensive analytics dashboard for social media management. Visualizes key metrics and engagement data across multiple platforms using D3.js for interactive charts.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    github: 'https://github.com/yourusername/dashboard',
    live: 'https://dashboard-demo.com',
    tags: ['React', 'D3.js', 'REST API', 'Material-UI', 'Node.js'],
    date: '2023',
    features: [
      'Multi-platform analytics integration',
      'Custom chart visualization',
      'Automated reporting',
      'Engagement metrics tracking',
      'Export functionality',
      'Customizable dashboard layouts',
    ],
  },
  {
    title: 'Weather Application',
    description:
      'A modern weather application providing real-time weather updates with location tracking. Features include hourly and weekly forecasts, weather alerts, and location-based recommendations.',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8',
    github: 'https://github.com/yourusername/weather',
    live: 'https://weather-demo.com',
    tags: ['React', 'OpenWeather API', 'Geolocation', 'Progressive Web App'],
    date: '2023',
    features: [
      'Real-time weather updates',
      'Location-based forecasts',
      'Weather alerts and notifications',
      'Offline functionality',
      'Interactive weather maps',
      'Multiple location tracking',
    ],
  },
  {
    title: 'Blog Platform',
    description:
      'A modern blogging platform with markdown support, built using Next.js and MongoDB. Features include rich text editing, image optimization, and SEO-friendly content management.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
    github: 'https://github.com/yourusername/blog',
    live: 'https://blog-demo.com',
    tags: [
      'React',
      'Next.js',
      'MongoDB',
      'Markdown',
      'SEO',
      'Image Optimization',
    ],
    date: '2023',
    features: [
      'Markdown editor with preview',
      'Image optimization and CDN',
      'SEO optimization',
      'Comment system',
      'Categories and tags',
      'Analytics integration',
    ],
  },
  {
    title: 'Real Estate Platform',
    description:
      'A comprehensive real estate platform featuring property listings, virtual tours, and mortgage calculators. Built with React and Node.js, it provides a seamless experience for property search and management.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    github: 'https://github.com/yourusername/realestate',
    live: 'https://realestate-demo.com',
    tags: ['React', 'Node.js', 'PostgreSQL', 'MapBox', 'Stripe'],
    date: '2023',
    features: [
      'Advanced property search',
      'Virtual property tours',
      'Mortgage calculator',
      'Property comparison',
      'Appointment scheduling',
      'Agent dashboard',
    ],
  },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-blue-100">
            Explore my portfolio of web development projects
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={20} className="text-gray-500" />
                  <span className="text-gray-500">{project.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      <Tag size={14} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
