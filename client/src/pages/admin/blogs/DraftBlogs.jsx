import React, { useState } from 'react';
import { Search, Edit, Eye, Trash2 } from 'lucide-react';
import EditBlogModal from '../modals/EditBlogModal'; // Import EditBlogModal
import ViewBlogModal from '../modals/ViewBlogModal'; // Import ViewBlogModal
import DeleteBlogModal from '../modals/DeleteBlogModal'; // Import DeleteBlogModal

const draftBlogs = [
  {
    id: 1,
    title: 'Upcoming Web Development Trends 2024',
    category: 'Development',
    lastModified: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    author: 'John Doe',
    content: 'This blog discusses upcoming trends in web development for 2024.',
    excerpt: 'A brief overview of web development trends.',
  },
  {
    id: 2,
    title: 'Getting Started with TypeScript',
    category: 'Tutorial',
    lastModified: '2024-03-14',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    author: 'Jane Smith',
    content: "A beginner's guide to TypeScript.",
    excerpt: 'Learn the basics of TypeScript.',
  },
];

const DraftBlogs = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openDeleteModal = (blog) => {
    setSelectedBlog(blog);
    setIsDeleteModalOpen(true);
  };

  const openEditModal = (blog) => {
    setSelectedBlog(blog);
    setIsEditModalOpen(true);
  };

  const openViewModal = (blog) => {
    setSelectedBlog(blog);
    setIsViewModalOpen(true);
  };

  const closeModals = () => {
    setSelectedBlog(null);
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
    setIsViewModalOpen(false);
  };

  const handleDelete = (id) => {
    console.log('Delete blog:', id);
    // Implement the deletion logic here
    closeModals();
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Draft Blogs</h1>
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
                  Author
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
              {draftBlogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <span className="font-medium text-gray-900">
                        {blog.title}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {blog.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{blog.author}</td>
                  <td className="py-4 px-6 text-gray-600">
                    {blog.lastModified}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal(blog)}
                        className="p-1 text-gray-600 hover:text-blue-600"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => openViewModal(blog)}
                        className="p-1 text-gray-600 hover:text-blue-600"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => openDeleteModal(blog)}
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
      <EditBlogModal
        isOpen={isEditModalOpen}
        onClose={closeModals}
        onSubmit={(updatedBlog) => {
          console.log('Updated blog:', updatedBlog);
          closeModals();
        }}
        blog={selectedBlog}
      />
      <ViewBlogModal
        isOpen={isViewModalOpen}
        onClose={closeModals}
        blog={selectedBlog}
      />
      <DeleteBlogModal
        isOpen={isDeleteModalOpen}
        onClose={closeModals}
        onConfirm={() => handleDelete(selectedBlog.id)}
        blog={selectedBlog}
      />
    </div>
  );
};

export default DraftBlogs;
