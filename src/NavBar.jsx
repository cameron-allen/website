import React, { useState } from "react";
import { Navbar, Nav, Toast} from "react-bootstrap";
import "./index.css";

import { IconContext } from 'react-icons';
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { AiFillGithub } from 'react-icons/ai';
import { FaItchIo } from 'react-icons/fa';

function App() {

  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    handleCopy();
    setShowToast(true);

    setTimeout(() => setShowToast(false), 1000);
  };

  const handleCopy = async () => {
    const email = "cameronallen86@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      console.log('Email copied: ', email);
    }catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <Navbar className="top-bar px-2" variant="dark">
      <IconContext.Provider value={{ color: "white" }}>
          <Nav>
            <a href="https://www.linkedin.com/in/cameron-allen-54a02b207/"
            target="_blank" rel="noopener noreferrer" style={{marginLeft: '.25rem'}}>
              <CiLinkedin size={50} />
            </a>
            <a href="https://github.com/cameron-allen"
            target="_blank" rel="noopener noreferrer" id="social">
              <AiFillGithub size={50} />
            </a>
            <a href="https://gamedev-noob.itch.io/"
            target="_blank" rel="noopener noreferrer" id="social">
              <FaItchIo size={50} />
            </a>
            <CiMail size={50} onClick={handleClick} 
            style={{cursor: "pointer"}}
            id="social" title="copy email"/>
            <Toast show={showToast} onClose={() => setShowToast(false)} 
            className="d-block w-auto h-auto ms-3">
              <Toast.Body className="toast-body">copied</Toast.Body>
            </Toast>
          </Nav>
        </IconContext.Provider>
    </Navbar>
  );
}

export default App;