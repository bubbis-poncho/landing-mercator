import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 rounded bg-gray-700 text-white" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 rounded bg-gray-700 text-white" required />
            </div>
            <div>
              <label htmlFor="company" className="block mb-2">Company</label>
              <input type="text" id="company" className="w-full px-4 py-2 rounded bg-gray-700 text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 rounded bg-gray-700 text-white" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;