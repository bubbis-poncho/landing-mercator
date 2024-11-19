import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">Revolutionizing business processes with AI-driven automation solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Linkedin /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Github /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 Mercator AI Automation Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;