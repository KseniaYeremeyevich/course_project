import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className='page_box'>
            <p className='page_text'>Medication Tracking App</p>
            <p className='page_small_text'>To start using app press</p>
            <nav> 
                <ul>
                    <Link className='page_small_text' to="/main">Main</Link>
                </ul>
            </nav>
         </div>
    );
};
  
export default Home;