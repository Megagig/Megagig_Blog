import { useState } from 'react';
import { Bell, X } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'info',
    message: 'New comment on your blog post',
    time: '5 minutes ago',
  },
  {
    id: 2,
    type: 'success',
    message: 'Product successfully published',
    time: '1 hour ago',
  },
  {
    id: 3,
    type: 'warning',
    message: 'Storage space running low',
    time: '2 hours ago',
  },
];

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Bell size={20} />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      {isOpen && (
        <>
          {/* Mobile Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Notification Panel */}
          <div
            className={`
            fixed right-0 mt-2 w-full sm:w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50
            ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            transition-all duration-200
            sm:absolute sm:right-0 sm:mt-2
          `}
          >
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Notifications</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="max-h-[calc(100vh-200px)] sm:max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-4 border-b border-gray-100 hover:bg-gray-50"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 text-center border-t border-gray-100">
              <button className="text-sm text-blue-600 hover:text-blue-700">
                View all notifications
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationCenter;
