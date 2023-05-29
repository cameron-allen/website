import React from 'react';
import "../index.css";

export class Home extends React.Component {
    
    render() {
        return <>
            <div className="container mt-5 d-flex 
            justify-content-center">
                <img className="col max-size-img" 
                src="https://drive.google.com/uc?export=view&id=1CPimAyPh2O8XtY9iScvQosii5FKHlEBv" alt="" />
                <div className='col text-white' style={{paddingLeft: '4rem'}}>
                    <h1>About Me</h1>
                    <p>I like cheese.</p>
                </div>
            </div>
        </>;
    }
}