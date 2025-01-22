import React, { useState } from 'react';
import { Search, Edit, Eye, Trash2 } from 'lucide-react';
import EditProjectModal from '../modals/EditProjectModal'; // Import EditProjectModal
import ViewProjectModal from '../modals/ViewProjectModal'; // Import ViewProjectModal
import DeleteProjectModal from '../modals/DeleteProjectModal'; // Import DeleteProjectModal

const draftProjects = [
  {
    id: 1,
    title: 'AI-Powered Chat Application',
    category: 'Web Development',
    lastModified: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    status: 'In Progress',
    description: 'A chat application powered by AI.',
  },
  {
    id: 2,
    title: 'E-commerce Mobile App',
    category: 'Mobile Development',
    lastModified: '2024-03-14',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    status: 'Planning',
    description: 'A mobile application for e-commerce.',
  },
];

const DraftProjects = () => {
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Draft Projects</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          New Draft
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search drafts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Title
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Category
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Last Modified
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {draftProjects.map((project) => (
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
                      <span className="font-medium text-gray-900">
                        {project.title}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {project.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">
                    {project.lastModified}
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
        onConfirm={() => handleDelete(selectedProject?.id)}
        project={selectedProject}
      />
    </div>
  );
};

export default DraftProjects;
