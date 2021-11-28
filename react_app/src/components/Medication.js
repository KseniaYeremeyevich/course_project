/*import { MdDeleteForever } from 'react-icons/md';*/
import { Close } from "@styled-icons/material-outlined/Close";
import { Delete } from "@styled-icons/material-outlined/Delete";

const Medication = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className='med'>
            <span> {text} </span>
            <div className='note_footer'>
                <small> {date} </small>
                <Delete 
                    size={20} 
                    title='Remove'
                    className='delete_icon'
                    onClick={()=>handleDeleteNote(id)} />
            </div>
        </div>
    );
};

export default Medication;

//<MdDeleteForever className='delete-icon' size='1.3em' />
// <button onClick={()=>handleDeleteNote(id)}> Delete </button> 

