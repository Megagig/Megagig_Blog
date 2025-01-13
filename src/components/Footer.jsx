import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Anthony</h3>
            <p className="text-gray-400 mb-4">
              Crafting digital experiences with code and creativity. Let&apos;s
              build something amazing together.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                className="hover:text-blue-500"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="hover:text-blue-500"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                className="hover:text-blue-500"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services#web"
                  className="text-gray-400 hover:text-white"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/services#backend"
                  className="text-gray-400 hover:text-white"
                >
                  Backend Development
                </a>
              </li>
              <li>
                <a
                  href="/services#database"
                  className="text-gray-400 hover:text-white"
                >
                  Database Design
                </a>
              </li>
              <li>
                <a
                  href="/services#mobile"
                  className="text-gray-400 hover:text-white"
                >
                  Responsive Design
                </a>
              </li>
              <li>
                <a
                  href="/services#optimization"
                  className="text-gray-400 hover:text-white"
                >
                  Web Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={20} />
                <a
                  href="mailto:anthony@example.com"
                  className="hover:text-white"
                >
                  anthony@example.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={20} />
                <a href="tel:+1234567890" className="hover:text-white">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={20} />
                <span>New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Anthony. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
