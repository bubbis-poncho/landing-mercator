import React from 'react';
import { LineChart, BarChart, PieChart } from 'lucide-react';

const DataAnalytics: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Data Analytics and Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center">
            <LineChart className="w-16 h-16 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
            <p className="text-center text-gray-300">Forecast trends and make data-driven decisions</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center">
            <BarChart className="w-16 h-16 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
            <p className="text-center text-gray-300">Track and optimize your business performance</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center">
            <PieChart className="w-16 h-16 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Dashboards</h3>
            <p className="text-center text-gray-300">Visualize your data with interactive dashboards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalytics;