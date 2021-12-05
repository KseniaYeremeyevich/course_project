const EditNote = ({ currentNote, onEditInputChange, onEditFormSubmit }) => {

    return (
        <div className='med new'>
            <textarea className='add_text_area' 
                rows='8'
                cols='10'
                placeholder='Type to add a note...'
                value={currentNote.text}
                onChange={onEditInputChange}
            ></textarea>

            
            <div className='note_footer'>
                <button className='save_button' onClick={onEditFormSubmit}>Edit</button>  
            </div>
        </div>
    );
};

export default EditNote;