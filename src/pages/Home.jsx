import React from 'react';
import "../index.css";

export class Home extends React.Component {
    
    render() {
        return <>
            <div className="container mt-5 d-flex 
            justify-content-center">
                <img className="col max-size-img" 
                src="https://drive.google.com/uc?export=view&id=1rBv5CNRnZR2MHsY8DDmCOuMWwyRUbdS8" alt="" />
                <div className='col text-white responsive-text'>
                    <h1 style={{fontWeight: 'bold'}}>About Me</h1>
                    <p className='bio'>My name is Cameron Allen; an SMU graduate who likes 
                    to code, draw and play the piano. I want to pursue a career in software development.
                    Check out my socials and GitHub to see what I'm up to.</p>
                </div>
            </div>
        </>;
    }
}