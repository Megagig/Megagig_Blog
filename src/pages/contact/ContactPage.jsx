import { Phone, Mail, Linkedin, Twitter } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in touch</h1>
          <p className="text-2xl text-blue-100">
            Let's talk about your project
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-600 mb-6">
                Thinking about a new project, a problem to solve, or just want
                to connect? Let's do it!
              </p>
              <p className="text-gray-600 mb-6">
                Use the form on this page or get in touch by other means.
              </p>
              <p className="text-gray-600">
                We love questions and feedback – and we're always happy to help!
                Here are some ways to contact us.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="text-blue-600" size={24} />
                <span>Phone: +234 8060374755</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="text-blue-600" size={24} />
                <span>Email: megagigdev@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Linkedin className="text-blue-600" size={24} />
                <span>LinkedIn: Obi Anthony</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Twitter className="text-blue-600" size={24} />
                <span>Twitter: @megagigsolution</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-8">
              Your Contact Information
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>

              <div className="space-y-6">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />

                <select className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="IN">Nigeria</option>
                  <option value="CA">Canada</option>
                </select>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  What services do you need for your project?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span>Website Development</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span>App Development</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span>Website Migration</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span>E-commerce Site</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span>Design System</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span>Performance Evaluation</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  How much is the anticipated budget for your next project?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="budget"
                      className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Less than $400</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="budget"
                      className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span>$400 - $800</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="budget"
                      className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span>$800 - $1000</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="budget"
                      className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                    />
                    <span>More than $1000</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Tell me about your project
                </h3>
                <textarea
                  rows={6}
                  placeholder="Project description"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
