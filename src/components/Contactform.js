import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_qr2rzwv', // Replace with your EmailJS service ID
        'template_1g5v8wd', // Replace with your EmailJS template ID
        formData,
        'DHFe2JA2CCUB7B1p2' // Replace with your EmailJS user ID
      );
      alert('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending your message. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-300">
        <h2 className="text-xl font-bold text-white mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="shadow appearance-none border rounded-full w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-y"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
