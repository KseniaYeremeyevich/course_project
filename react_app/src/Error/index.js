import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return(

        <div className='page_box'>
            <p className='page_text'>Error</p>
            <p className='page_small_text'>Something goes wrong...</p>
            <p className='page_small_text'>To return to home page press</p>
            <nav> 
                <ul>
                    <Link className='page_small_text' to="/">Home</Link>
                </ul>
            </nav>
        </div>
    );
};
  
export default Error;