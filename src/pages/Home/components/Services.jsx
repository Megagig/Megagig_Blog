import {
  Code,
  Globe,
  Server,
  Smartphone,
  Database,
  Palette,
} from 'lucide-react';

const services = [
  {
    icon: <Code size={40} />,
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks and best practices',
  },
  {
    icon: <Server size={40} />,
    title: 'Backend Development',
    description: 'Scalable server solutions and API development',
  },
  {
    icon: <Database size={40} />,
    title: 'Database Design',
    description: 'Efficient database architecture and optimization',
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Responsive Design',
    description: 'Mobile-first websites that work on all devices',
  },
  {
    icon: <Globe size={40} />,
    title: 'Web Optimization',
    description: 'Performance optimization and SEO improvements',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <p className="text-xl text-gray-600">
            Solutions I offer to my clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
