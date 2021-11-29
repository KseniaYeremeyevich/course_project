import { Delete } from "@styled-icons/material-outlined/Delete";
import { Edit } from "@styled-icons/material-outlined/Edit";

const Medication = ({ id, text, date, handleDeleteNote, /*handleEditNote*/ }) => {
    return (
        <div className='med'>
            <div className='note_main'>
                <span className='med_text'> {text} </span>
                <Edit 
                    size={20} 
                    className='edit_icon'
                    /*onClick={() => handleEditNote(id)}*/
                />
            </div>
            <div className='note_footer'>
                <small> {date} </small>
                <Delete 
                    size={20} 
                    className='delete_icon'
                    onClick={()=>handleDeleteNote(id)} 
                />
            </div>
        </div>
    );
};

export default Medication;


