import React from 'react';
import { BarChart2, TrendingUp, Users, Eye, Clock, Globe } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics Overview</h1>

      {/* Traffic Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Eye className="text-blue-600" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+12.5%</span>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Page Views</h3>
          <p className="text-2xl font-bold">48,592</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <Users className="text-green-600" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+8.2%</span>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Active Users</h3>
          <p className="text-2xl font-bold">2,854</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Clock className="text-purple-600" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+3.1%</span>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Avg. Session</h3>
          <p className="text-2xl font-bold">4m 32s</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <Globe className="text-orange-600" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+15.8%</span>
          </div>
          <h3 className="text-sm text-gray-600 mb-1">Bounce Rate</h3>
          <p className="text-2xl font-bold">42.2%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Traffic Sources</h2>
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-80 flex items-center justify-center text-gray-500">
            <BarChart2 size={32} />
            <span className="ml-2">Chart will be integrated here</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Conversion Rate</h2>
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-80 flex items-center justify-center text-gray-500">
            <TrendingUp size={32} />
            <span className="ml-2">Chart will be integrated here</span>
          </div>
        </div>
      </div>

      {/* Top Content */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold">Top Performing Content</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Page</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Views</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Unique Views</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Bounce Rate</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Avg. Time</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm">
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      /blog/top-web-development-trends-2024
                    </a>
                  </td>
                  <td className="py-4 px-6 text-sm">12,543</td>
                  <td className="py-4 px-6 text-sm">8,234</td>
                  <td className="py-4 px-6 text-sm">42%</td>
                  <td className="py-4 px-6 text-sm">3m 12s</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;