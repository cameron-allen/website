import React from 'react';
import "../index.css";

export class Home extends React.Component {
    
    render() {
        return <>
            <div className="container d-flex">
                <img className="img-fluid max-size-img" 
                src="https://drive.google.com/uc?export=view&id=1nqp3yT5G95jCEhivW4cOMvwwqfmZ9gw_" alt="" />    
                <div className='col text-white mt-5'>
                    <h1>About Me</h1>
                    <p>I like cheese.</p>
                </div>
            </div>
        </>;
    }
}