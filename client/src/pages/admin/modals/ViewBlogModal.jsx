import React from 'react';
import { X } from 'lucide-react';

interface ViewBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: any;
}

const ViewBlogModal = ({ isOpen, onClose, blog }: ViewBlogModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">View Blog Post</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900">{blog.title}</h3>
            <div className="flex items-center gap-4 mt-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                {blog.category}
              </span>
              <span className="text-gray-500 text-sm">{blog.date}</span>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Content</h4>
            <div className="prose max-w-none">
              {blog.content}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Excerpt</h4>
            <p className="text-gray-600">{blog.excerpt}</p>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <span className="text-sm text-gray-500">Views</span>
              <p className="font-medium">{blog.views}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Comments</span>
              <p className="font-medium">{blog.comments}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogModal;