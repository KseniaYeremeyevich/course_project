import React from "react";
import AddNote from "../components/AddNote";
import { nanoid } from 'nanoid';
import { Link } from "react-router-dom";
/*
const Header = ({ meds, setMeds }) => {

    const addNote = (text, hour, minute) => {
        const date = new Date();
        const newNote = {
          id: nanoid(),
          text: text,
          hour: hour,
          minute: minute,
          isDone: false
        };
        const newNotes = [...meds, newNote];
        setMeds(newNotes);
      };

    return(
        <div className='header'> 
            <h1>Medications 
                <Link to="/">home</Link>
            </h1>
            <AddNote handleAddNote={addNote} />
        </div>
    );
};

export default Header;
*/

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