import React, { useState } from 'react';
import { Bell, Trash2, Check, X, Filter } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: "New Comment",
    message: "John Doe commented on your blog post",
    type: "comment",
    status: "unread",
    timestamp: "2024-03-15T10:30:00Z"
  },
  {
    id: 2,
    title: "New User Registration",
    message: "Sarah Smith created a new account",
    type: "user",
    status: "read",
    timestamp: "2024-03-15T09:15:00Z"
  },
  {
    id: 3,
    title: "Product Purchase",
    message: "New purchase: Complete Web Development Course",
    type: "purchase",
    status: "unread",
    timestamp: "2024-03-15T08:45:00Z"
  }
];

const NotificationsPage = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredNotifications = notifications.filter(notification => {
    const typeMatch = selectedType === 'all' || notification.type === selectedType;
    const statusMatch = selectedStatus === 'all' || notification.status === selectedStatus;
    return typeMatch && statusMatch;
  });

  const handleMarkAsRead = (id: number) => {
    console.log('Mark as read:', id);
  };

  const handleDelete = (id: number) => {
    console.log('Delete notification:', id);
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          Mark all as read
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-500" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              <option value="all">All Types</option>
              <option value="comment">Comments</option>
              <option value="user">Users</option>
              <option value="purchase">Purchases</option>
            </select>
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="all">All Status</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
          </select>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white p-6 rounded-xl shadow-sm ${
              notification.status === 'unread' ? 'border-l-4 border-blue-600' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${
                  notification.type === 'comment' ? 'bg-blue-50 text-blue-600' :
                  notification.type === 'user' ? 'bg-green-50 text-green-600' :
                  'bg-purple-50 text-purple-600'
                }`}>
                  <Bell size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{notification.title}</h3>
                  <p className="text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(notification.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {notification.status === 'unread' && (
                  <button
                    onClick={() => handleMarkAsRead(notification.id)}
                    className="p-1 text-gray-600 hover:text-blue-600"
                  >
                    <Check size={18} />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(notification.id)}
                  className="p-1 text-gray-600 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredNotifications.length === 0 && (
        <div className="text-center py-12">
          <Bell size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
          <p className="text-gray-600">You're all caught up!</p>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;