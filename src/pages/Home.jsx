import React from 'react';
import "../index.css";
import { Image } from 'react-bootstrap';

export class Home extends React.Component {

    
    render() {
        const googleDriveURL = 'https://drive.google.com/uc?export=view&id=1AVNSGiYX25sagdCV9pUxgOCwkbaAXOEU';

        return <>
            <div className="container mt-5 d-flex 
            justify-content-center">
                <Image className="col max-size-img" src={googleDriveURL} alt="SVG Image" />
                <div className='col text-white responsive-text'>
                    <h1 style={{fontWeight: 'bold'}}>About Me</h1>
                    <p className='bio'>My name is Cameron Allen—an SMU alumnus and current MS in Computer Science student
                    at DigiPen Institute of Technology. I like to code, draw, write and play the piano. I want to pursue a career in video game or software development.
                    Check out my socials and GitHub to see what I'm up to.</p>
                </div>
            </div>
        </>;
    }
}