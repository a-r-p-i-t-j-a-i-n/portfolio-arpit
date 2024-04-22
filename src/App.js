import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import ExampleComponent from './components/context/ExampleComponent.js';
import { MyContextProvider } from './components/context/MyContextProvider.js';
import About from './components/About.js';
import Skill from './components/Skill.js';
import Project from './components/Project.js';
import ContactForm from './components/Contactform.js';
import Contact from './components/Contact.js';

import './App.css'
function App() {
  return (
    <>
      <Router>
        <MyContextProvider>
          <div className="portfolio-background"> 
            <Navbar/>
            <Routes > 
             
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skill />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/contactform' element={<ContactForm/>}/>
            </Routes>
            <ExampleComponent/>
          </div>
        </MyContextProvider>
      </Router>
    </>
  );
}

export default App;
