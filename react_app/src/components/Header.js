import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return(
        <div className='header'> 
            <h1 className='header_text'>Medications 
                <Link className='header_link' to="/">home</Link>
            </h1>
        </div>
    );
};

export default Header;