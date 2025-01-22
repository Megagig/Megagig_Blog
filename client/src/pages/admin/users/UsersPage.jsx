import { useState } from 'react';
import {
  Search,
  Filter,
  Edit,
  Trash2,
  Mail,
  Shield,
  UserPlus,
} from 'lucide-react';
import CreateUserModal from './CreateUserModal';
import EditUserModal from '../modals/EditUserModal';
import ViewUserModal from '../modals/ViewUserModal';
import DeleteUserModal from '../modals/DeleteUserModal';
import ChangeUserStatusModal from '../modals/ChangeUserStatusModal';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2024-03-15',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Editor',
    status: 'Active',
    lastLogin: '2024-03-14',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
];

const UsersPage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isChangeStatusModalOpen, setIsChangeStatusModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleCreateUser = (userData) => {
    console.log('Creating new user:', userData);
    // Implement user creation logic here
  };

  const handleEditUser = (userData) => {
    console.log('Updating user:', userData);
    // Implement user update logic here
    setIsEditModalOpen(false);
  };

  const handleDeleteUser = (id) => {
    console.log('Deleting user:', id);
    // Implement user deletion logic here
    setIsDeleteModalOpen(false);
  };

  const handleChangeUserStatus = (status) => {
    console.log('Changing user status to:', status);
    // Implement status change logic here
    setIsChangeStatusModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <UserPlus size={20} />
          <span>Add New User</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-500" />
              <select className="border border-gray-300 rounded-lg px-3 py-2">
                <option>All Roles</option>
                <option>Admin</option>
                <option>Editor</option>
                <option>User</option>
              </select>
            </div>
            <select className="border border-gray-300 rounded-lg px-3 py-2">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Suspended</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  User
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Role
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Last Login
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="flex items-center gap-1">
                      <Shield size={16} className="text-blue-600" />
                      <span>{user.role}</span>
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{user.lastLogin}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setIsEditModalOpen(true);
                        }}
                        className="p-1 text-gray-600 hover:text-blue-600"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setIsViewModalOpen(true);
                        }}
                        className="p-1 text-gray-600 hover:text-blue-600"
                      >
                        <Mail size={18} />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setIsDeleteModalOpen(true);
                        }}
                        className="p-1 text-gray-600 hover:text-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setIsChangeStatusModalOpen(true);
                        }}
                        className="p-1 text-gray-600 hover:text-yellow-600"
                      >
                        Change Status
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Integrations */}
      <CreateUserModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateUser}
      />
      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditUser}
        user={selectedUser}
      />
      <ViewUserModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        user={selectedUser}
      />
      <DeleteUserModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => handleDeleteUser(selectedUser?.id)}
        user={selectedUser}
      />
      <ChangeUserStatusModal
        isOpen={isChangeStatusModalOpen}
        onClose={() => setIsChangeStatusModalOpen(false)}
        onConfirm={handleChangeUserStatus}
        user={selectedUser}
      />
    </div>
  );
};

export default UsersPage;
