import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from '../../../components/Image';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 ">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Hi, I&apos;m Anthony
              <span className="block text-blue-600">Full Stack Developer</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              I craft exceptional digital experiences with modern web
              technologies. Specializing in building scalable applications that
              combine elegant design with robust functionality.
            </p>
            <div className="flex gap-4">
              <Link to="/portfolio">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition">
                  View My Work
                </button>
              </Link>

              <Link to="/contact">
                <button className="border-2 border-gray-300 px-8 py-3 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition">
                  Hire Me
                </button>
              </Link>
            </div>
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/yourusername"
                className="text-gray-600 hover:text-blue-600"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-gray-600 hover:text-blue-600"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                className="text-gray-600 hover:text-blue-600"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 px-16 md:px-8 lg:px-12">
            <Image
              src="profile.jpeg"
              alt="Anthony"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
