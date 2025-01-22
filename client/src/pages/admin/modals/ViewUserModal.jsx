import { X, Mail, Shield, Clock } from 'lucide-react';

const ViewUserModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">View User</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
              <div className="flex items-center gap-2 text-gray-500">
                <Mail size={16} />
                <span>{user.email}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-500">Role</span>
              <div className="flex items-center gap-2 mt-1">
                <Shield size={16} className="text-blue-600" />
                <span className="font-medium">{user.role}</span>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Status</span>
              <p className="mt-1">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    user.status === 'Active'
                      ? 'bg-green-100 text-green-600'
                      : user.status === 'Inactive'
                      ? 'bg-gray-100 text-gray-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {user.status}
                </span>
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm text-gray-500">Last Login</span>
            <div className="flex items-center gap-2 mt-1">
              <Clock size={16} className="text-gray-500" />
              <span>{user.lastLogin}</span>
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

export default ViewUserModal;
