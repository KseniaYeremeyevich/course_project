import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        handleAddNote(noteText);
    }

    return (
        <div className='med new'>
            <textarea 
                rows='8'
                cols='10'
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div>
                <small>200 Remaining</small>
                <button className='save_button' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;