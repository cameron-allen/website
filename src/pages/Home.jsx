import React from 'react';
import "../index.css";

export class Home extends React.Component {
    
    render() {
        return <>
            <div className="container d-flex justify-content-center pt-4 px-3">
                <img className="img-fluid rounded-5 mx-auto max-size-img" 
                src="https://drive.google.com/uc?export=view&id=1XJ1R5_Klg0zFSPLnZz-AVgLQkvRX7Xgl" alt="" />    
                {/*https://drive.google.com/file/d/1XJ1R5_Klg0zFSPLnZz-AVgLQkvRX7Xgl/view?usp=sharing */}   
            </div>
            {/* <div className='container'>
                <header style ={{fontWeight: "bold"}} className='bg-secondary'>Hello</header>
                <p>Yeet</p>
            </div> */}
        </>;
    }
}