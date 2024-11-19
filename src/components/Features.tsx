import React from 'react';
import { Brain, Scale, BarChart3, Layers } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Automation',
    description: 'Leverage cutting-edge AI to optimize your business processes.',
  },
  {
    icon: Scale,
    title: 'Scalable Solutions',
    description: 'Our platform grows with your business, from startups to enterprises.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description: 'Turn your data into actionable insights for smarter decision-making.',
  },
  {
    icon: Layers,
    title: 'Seamless Integration',
    description: 'Easily connect with your existing systems and workflows.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 transition duration-300 hover:shadow-lg hover:bg-gray-600">
              <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;