import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Folder,
  ShoppingBag,
  Settings,
  ChevronDown,
  Users,
  BarChart2,
  MessageSquare,
  Bell,
  X,
} from 'lucide-react';

const menuItems = [
  {
    title: 'Dashboard',
    icon: <LayoutDashboard size={20} />,
    path: '/admin/dashboard',
  },
  {
    title: 'Blogs',
    icon: <FileText size={20} />,
    submenu: [
      { title: 'All Blogs', path: '/admin/blogs' },
      { title: 'Draft Blogs', path: '/admin/blogs/drafts' },
      { title: 'Add Blog', path: '/admin/blogs/new' },
    ],
  },
  {
    title: 'Projects',
    icon: <Folder size={20} />,
    submenu: [
      { title: 'All Projects', path: '/admin/projects' },
      { title: 'Draft Projects', path: '/admin/projects/drafts' },
      { title: 'Add Project', path: '/admin/projects/new' },
    ],
  },
  {
    title: 'Products',
    icon: <ShoppingBag size={20} />,
    submenu: [
      { title: 'All Products', path: '/admin/products' },
      { title: 'Draft Products', path: '/admin/products/drafts' },
      { title: 'Add Product', path: '/admin/products/new' },
    ],
  },
  {
    title: 'Analytics',
    icon: <BarChart2 size={20} />,
    path: '/admin/analytics',
  },
  {
    title: 'Comments',
    icon: <MessageSquare size={20} />,
    path: '/admin/comments',
  },
  {
    title: 'Users',
    icon: <Users size={20} />,
    path: '/admin/users',
  },
  {
    title: 'Notifications',
    icon: <Bell size={20} />,
    path: '/admin/notifications',
  },
  {
    title: 'Settings',
    icon: <Settings size={20} />,
    path: '/admin/settings',
  },
];

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleSubmenu = (title) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (path) => location.pathname === path;

  const isSubmenuActive = (submenu) =>
    submenu.some((item) => location.pathname === item.path);

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200">
      <div className="p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto">
        <div className="px-3 py-2">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isSubmenuActive(item.submenu)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        expandedItems.includes(item.title) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedItems.includes(item.title) && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={onClose}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            isActive(subItem.path)
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
