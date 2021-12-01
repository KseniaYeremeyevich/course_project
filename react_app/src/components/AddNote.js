import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const [noteHour, setNoteHour] = useState('');
    const [noteMinute, setNoteMinute] = useState('');

    const characterLimit = 100;
    const timeLimit = 2;

    const handleChange = (event) => {
        console.log(event.target.value);
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }           
    };

    const handleChangeHour = (event) => {      
        if ((timeLimit - event.target.value.length >= 0)) {
            setNoteHour(event.target.value);
        }           
    };

    const handleChangeMinute = (event) => {
        console.log(event.target.value);
        if ((timeLimit - event.target.value.length >= 0)) {
            setNoteMinute(event.target.value);
        }           
    };

    const handleSaveClick = () => {
        if ((noteText.trim().length > 0) && (noteHour.trim().length > 0) 
                                         && (noteMinute.trim().length > 0)) {
            handleAddNote(noteText, noteHour, noteMinute);
            setNoteText('');
            setNoteHour('');
            setNoteMinute('');
        }
    };


    return (
        <div className='med new'>
            <textarea className='add_text_area' 
                rows='8'
                cols='10'
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className='add_time'> 
                <input 
                    type="number" 
                    className='add_time_area'   
                    min="0" 
                    max="23" 
                    placeholder='00'
                    value={noteHour}
                    onChange={handleChangeHour}
                />
                
                <input 
                    type="number" 
                    className='add_time_area'   
                    min="0" 
                    max="60" 
                    placeholder='00'
                    value={noteMinute}
                    onChange={handleChangeMinute}
                />
            </div>
            
            <div className='note_footer'>
                <small className='footer_text'>
                    {characterLimit - noteText.length} Remaining
                </small>
                <button className='save_button' onClick={handleSaveClick}>Save</button>  
            </div>
        </div>
    );
};

export default AddNote;


