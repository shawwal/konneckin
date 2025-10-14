import React from 'react';
const FeatureCard: React.FC<{ icon: React.ElementType, title: string, text: string }> = ({ icon: Icon, title, text }) => (
  <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mr-4">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300">{text}</p>
  </div>
);

export default FeatureCard;