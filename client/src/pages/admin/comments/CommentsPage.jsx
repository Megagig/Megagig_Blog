import React from 'react';
import { Search, Filter, ThumbsUp, ThumbsDown, MessageSquare, Trash2 } from 'lucide-react';

const comments = [
  {
    id: 1,
    author: "John Smith",
    content: "Great article! Very informative and well-written.",
    post: "Top Web Development Trends 2024",
    date: "2024-03-15",
    status: "approved",
    likes: 12,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    id: 2,
    author: "Sarah Johnson",
    content: "This helped me understand the concept better. Thanks!",
    post: "Getting Started with React",
    date: "2024-03-14",
    status: "pending",
    likes: 8,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

const CommentsPage = () => {
  const [selectedStatus, setSelectedStatus] = React.useState('all');

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Comments</h1>
        <div className="flex gap-4">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="all">All Comments</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="spam">Spam</option>
          </select>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search comments..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-500" />
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>Latest First</option>
                <option>Oldest First</option>
                <option>Most Liked</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900">{comment.author}</h3>
                    <p className="text-sm text-gray-500">
                      on <span className="text-blue-600">{comment.post}</span>
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{comment.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                      <ThumbsUp size={18} />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                      <MessageSquare size={18} />
                      <span>Reply</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      comment.status === 'approved'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {comment.status}
                    </span>
                    <button className="p-1 text-gray-600 hover:text-red-600">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-600">
          Showing 1 to 10 of 45 comments
        </p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;