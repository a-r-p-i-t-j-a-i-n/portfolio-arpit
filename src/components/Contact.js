import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'; // Import Google Mail real icon

const Contact = () => {
  return (
    <section id="contact" className="section py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-white font-bold mb-8 ">Contact Me</h2> {/* Increased space above heading */}
        <div className="flex justify-center flex-wrap items-center mt-16 space-x-10">
          <div className="flex items-center space-x-4 mb-8"> {/* Increased space between heading and icons */}
            <AiOutlineMail className="text-5xl text-red-500 animate-bounce" /> {/* Google Mail real icon */}
            <a href="mailto:arpitjain25032001@gmail.com" className="text-red-500 hover:underline text-lg">arpitjain25032001@gmail.com</a>
          </div>
          <div className="flex items-center space-x-4 mb-8"> {/* Increased space between heading and icons */}
            <FaLinkedin className="text-5xl text-blue-500 animate-bounce" />
            <a href="https://www.linkedin.com/in/arpit-jain-16246a286/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">LinkedIn</a>
          </div>
          <div className="flex items-center space-x-4 mb-8"> {/* Increased space between heading and icons */}
            <FaInstagram className="text-5xl text-pink-500 animate-bounce" />
            <a href="https://www.instagram.com/__arpit_jain_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline text-lg">Instagram</a>
          </div>
          <div className="flex items-center space-x-4 mb-8"> {/* Increased space between heading and icons */}
            <FaGithub className="text-5xl text-gray-600 animate-bounce" />
            <a href="https://github.com/a-r-p-i-t-j-a-i-n" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline text-lg">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
