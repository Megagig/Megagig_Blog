import { useState } from 'react';
import { Search, Filter, Trash2, Edit, Eye, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EditProjectModal from '../modals/EditProjectModal'; // Import EditProjectModal
import ViewProjectModal from '../modals/ViewProjectModal'; // Import ViewProjectModal
import DeleteProjectModal from '../modals/DeleteProjectModal'; // Import DeleteProjectModal

// Mock data for demonstration
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    status: 'Completed',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    technologies: ['React', 'Node.js', 'MongoDB'],
    client: 'TechCorp Inc.',
    github: 'https://github.com/example/project',
    live: 'https://example.com',
    description: 'A full-featured e-commerce platform.',
  },
  // Add more mock projects...
];

const AllProjects = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openEditModal = (project) => {
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const openViewModal = (project) => {
    setSelectedProject(project);
    setIsViewModalOpen(true);
  };

  const openDeleteModal = (project) => {
    setSelectedProject(project);
    setIsDeleteModalOpen(true);
  };

  const closeModals = () => {
    setSelectedProject(null);
    setIsEditModalOpen(false);
    setIsViewModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleDelete = (id) => {
    console.log('Delete project:', id);
    // Logic to delete the project from the list
    closeModals();
  };

  return (
    <div className="p-6 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">All Projects</h1>
        <button
          onClick={() => navigate('/admin/projects/new')}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add New Project
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="All">All Categories</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Project
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Category
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Technologies
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Client
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Links
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <span className="font-medium text-gray-900">
                          {project.title}
                        </span>
                        <span className="block text-sm text-gray-500">
                          {project.date}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {project.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{project.client}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        Live
                      </a>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal(project)}
                        className="p-1 text-gray-600 hover:text-blue-600"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => openViewModal(project)}
                        className="p-1 text-gray-600 hover:text-blue-600"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => openDeleteModal(project)}
                        className="p-1 text-gray-600 hover:text-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modals */}
        <EditProjectModal
          isOpen={isEditModalOpen}
          onClose={closeModals}
          onSubmit={(updatedProject) => {
            console.log('Updated project:', updatedProject);
            // Logic to update the project
            closeModals();
          }}
          project={selectedProject}
        />
        <ViewProjectModal
          isOpen={isViewModalOpen}
          onClose={closeModals}
          project={selectedProject}
        />
        <DeleteProjectModal
          isOpen={isDeleteModalOpen}
          onClose={closeModals}
          onConfirm={() => handleDelete(selectedProject.id)}
          project={selectedProject}
        />
      </div>
    </div>
  );
};

export default AllProjects;
