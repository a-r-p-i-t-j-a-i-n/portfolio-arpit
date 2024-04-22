import React, { useState } from 'react';
import APNAKIRANA from './APNAKIRANA.png';
import news from './news.png';
import INOTEBOOK from './INOTEBOOK.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import './Project.css'

const Project = () => {
  const [showFullImage, setShowFullImage] = useState(false);
  const [fullImageSrc, setFullImageSrc] = useState('');

  const handleImageClick = (imageSrc) => {
    setShowFullImage(true);
    setFullImageSrc(imageSrc);
  };

  const isSmallScreen = window.innerWidth < 768; // Assuming 768px is the breakpoint for small screens

  return (
    <>
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-8 animate__animated animate__heartBeat">My Projects</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className={`bg-white shadow-lg card-1 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl relative ${isSmallScreen ? '' : 'lg:col-span-3'}`}>
              <div className="group">
                <img
                  className={`w-full object-cover object-center cursor-pointer ${isSmallScreen ? 'h-40' : 'h-56'}`}
                  src={APNAKIRANA}
                  alt="APNAKIRANA"
                  onClick={() => handleImageClick(APNAKIRANA)}
                />
                <div className="px-6 py-4">
                  <h2 className="font-bold text-xl mb-2">APNAKIRANA</h2>
                  <p className="text-gray-700 text-base">E-commerce Website</p>
                  <a href="https://apnakiranacom.netlify.app" className="absolute top-2 left-4 text-gray-600 hover:text-gray-900">
                    <FaGithub />
                  </a>
                  <a href="https://apnakiranacom.netlify.app" className="absolute top-2 right-4 text-gray-600 hover:text-gray-900">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className={`bg-white shadow-lg card-2 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl relative ${isSmallScreen ? 'mt-5' : 'lg:mt-0'}`}>
              <div className="group">
                <img
                  className="w-full h-40 object-cover object-center cursor-pointer"
                  src={news}
                  alt="news"
                  onClick={() => handleImageClick(news)}
                />
                <div className="px-6 py-4">
                  <h2 className="font-bold text-xl mb-2">News</h2>
                  <p className="text-gray-700 text-base">News Website</p>
                  <a href="https://github.com/a-r-p-i-t-j-a-i-n/news" className="absolute top-2 left-4 text-gray-600 hover:text-gray-900">
                    <FaGithub />
                  </a>
                  <a href="https://helpful-macaron-98cab0.netlify.app/" className="absolute top-2 right-4 text-gray-600 hover:text-gray-900">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className={`bg-white shadow-lg card-3 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl relative ${isSmallScreen ? 'mt-5' : 'lg:mt-0'}`}>
              <div className="group">
                <img
                  className="w-full h-40 object-cover object-center cursor-pointer"
                  src={INOTEBOOK}
                  alt="INOTEBOOK"
                  onClick={() => handleImageClick(INOTEBOOK)}
                />
                <div className="px-6 py-4">
                  <h2 className="font-bold text-xl mb-2">INOTEBOOK</h2>
                  <p className="text-gray-700 text-base">Notebook Application</p>
                  <a href="https://github.com/a-r-p-i-t-j-a-i-n/inotebook" className="absolute top-2 left-4 text-gray-600 hover:text-gray-900">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showFullImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
          onClick={() => setShowFullImage(false)}
        >
          <img src={fullImageSrc} alt="Full Project" className="max-w-full max-h-full" />
        </div>
      )}
    

    </>
  );
}

export default Project;
