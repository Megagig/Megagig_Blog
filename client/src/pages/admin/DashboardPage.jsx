import React from 'react';
import {
  BarChart2,
  TrendingUp,
  FileText,
  Folder,
  ShoppingBag,
  DollarSign
} from 'lucide-react';

// Mock data for demonstration
const stats = [
  { title: 'Total Blogs', value: '124', icon: FileText, change: '+12%' },
  { title: 'Total Projects', value: '45', icon: Folder, change: '+5%' },
  { title: 'Total Products', value: '89', icon: ShoppingBag, change: '+8%' },
  { title: 'Revenue', value: '$12,450', icon: DollarSign, change: '+15%' }
];

const DashboardPage = () => {
  return (
    <div className="p-6 bg-gray-50 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <stat.icon className="text-blue-600" size={24} />
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Overview */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Year to Date Activity</h2>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500">
            <BarChart2 size={32} />
            <span className="ml-2">Chart will be integrated here</span>
          </div>
        </div>

        {/* Revenue Overview */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Revenue Overview</h2>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500">
            <TrendingUp size={32} />
            <span className="ml-2">Chart will be integrated here</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <FileText className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    New blog post published
                  </p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;