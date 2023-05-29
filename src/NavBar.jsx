import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import "./index.css";

import { IconContext } from 'react-icons';
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { AiFillGithub } from 'react-icons/ai';

function App() {

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
            <CiMail size={50} onClick={handleCopy} 
            style={{cursor: "pointer"}}
            id="social" title="copy email"/>
          </Nav>
        </IconContext.Provider>
    </Navbar>
  );
}

export default App;