import React from 'react';
import { Briefcase, Factory, Users, ShoppingCart, Building2 } from 'lucide-react';

const useCases = [
  { icon: Briefcase, title: 'Finance', description: 'Automate financial processes and risk assessment' },
  { icon: Factory, title: 'Manufacturing', description: 'Optimize production lines and supply chain management' },
  { icon: Users, title: 'HR', description: 'Streamline recruitment, onboarding, and employee management' },
  { icon: ShoppingCart, title: 'Retail', description: 'Enhance inventory management and customer experiences' },
  { icon: Building2, title: 'Real Estate', description: 'Automate property management and market analysis' },
];

const UseCases: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 transition duration-300 hover:shadow-lg hover:bg-gray-600">
              <useCase.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-300">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;