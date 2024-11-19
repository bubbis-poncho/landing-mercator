import React from 'react';
import { Database, Cpu, Zap, BarChart } from 'lucide-react';

const steps = [
  { icon: Database, title: 'Data Input', description: 'Collect and organize your business data' },
  { icon: Cpu, title: 'AI Processing', description: 'Our AI analyzes and learns from your data' },
  { icon: Zap, title: 'Automation', description: 'Implement intelligent automation workflows' },
  { icon: BarChart, title: 'Results', description: 'Gain insights and improve efficiency' },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
              <div className="bg-blue-500 rounded-full p-4 mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-center">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-24 h-1 bg-blue-500 mt-4 transform rotate-90 origin-left"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;