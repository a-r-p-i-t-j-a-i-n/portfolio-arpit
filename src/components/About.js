import React, { useState, useEffect, useMemo } from 'react';
import './About.css';

import maleImage from '../components/pcboi2.webp';
import resumePdf from './resume/ArpitResume2024.pdf';

const About = () => {
  const textSequence = useMemo(() => ["Hi", " I", " Am ", "Arpit", " Jain"], []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textSequence.length);
    }, 1000); // Change the duration as needed

    return () => clearInterval(interval);
  }, [textSequence]);

  return (
    <>
      <div className='about-container'>
        <div className='about-image'>
          <img src={maleImage} alt='Male' />
        </div>
        <div className='about-text'>
          <h1 className='about-header text-center'>
            {textSequence.map((item, index) => (
              <span
                key={index}
                className={index === currentIndex ? "highlight-text" : ""}
              >
                {item}
              </span>
            ))}
          </h1>
          <p className='about1'>
            I'm a Full Stack Developer with a passion for crafting clean and user-friendly web experiences. My expertise lies in React.js, Node.js, JavaScript, and the MERN stack. With a knack for problem-solving and a drive for innovation, I enjoy turning ideas into reality through code. Whether it's building dynamic web applications or collaborating on exciting projects, I'm always ready to take on new challenges!
          </p>
          <div className="mt-10">
            <a href={resumePdf} download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download Resume
            </a>
            <a href={resumePdf} target="_blank" rel="noreferrer" className="ml-2 text-blue-500 hover:text-blue-700 font-bold">
              View Resume
            </a>
          </div>
        </div>
      </div>
 
    </>
  );
};

export default About;
