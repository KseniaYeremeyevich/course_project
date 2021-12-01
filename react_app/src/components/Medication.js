import { Delete } from "@styled-icons/material-outlined/Delete";
import { Edit } from "@styled-icons/material-outlined/Edit";
import { CheckBoxOutlineBlank } from "@styled-icons/material-outlined/CheckBoxOutlineBlank";
import {CheckBox} from "@styled-icons/material-outlined/CheckBox";

const Medication = ({ id, text, hour, minute, isDone, handleDeleteNote, markTodo }) => {
    return (
        <div className='med'>
            <div className='note_main'>
                <div className='note_text'>
                    <p className='med_text'> {text} </p>

                    <p className='med_time'> Time_{hour}:{minute} </p>
                </div>
                
                <div className='icon_box'> 
                    <CheckBoxOutlineBlank 
                        size={20} 
                        className='checkbox_icon'
                        onClick={()=>markTodo(id)}
                    />
                    <Edit 
                        size={20} 
                        className='edit_icon'
                        
                    />
                    <Delete 
                    size={20} 
                    className='delete_icon'
                    onClick={()=>handleDeleteNote(id)} 
                    />
                </div>
                
            </div>

        </div>
    );
};

export default Medication;


/*
 <small> {date} </small>

<span 
                    className='med_text' 
                    style={{ textDecoration: isDone ? "line-through" : "none" }}>{text}</span>
*/