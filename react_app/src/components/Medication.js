import { Delete } from "@styled-icons/material-outlined/Delete";
import { Edit } from "@styled-icons/material-outlined/Edit";
import { CheckBoxOutlineBlank } from "@styled-icons/material-outlined/CheckBoxOutlineBlank";
import { CheckBox } from "@styled-icons/material-outlined/CheckBox";

const Medication = ({ med, handleDeleteNote, handleEditClick, markTodo }) => {

    return (
        <div className='med'>
            <div className='note_main'>
                
                <div className='note_text'>
                    <p className='med_text'> {med.text} </p>

                    <p className='med_time'> Time_{med.hour}:{med.minute} </p>
                </div>
                
                <div className='icon_box'> 

                    {med.isDone ? (
                        <CheckBox 
                            size={20} 
                            className='checkbox_icon' 
                            title="Checked" 
                            onClick={()=>markTodo(med.id)}
                        />
                    ) : (
                        <CheckBoxOutlineBlank 
                            size={20} 
                            className='checkbox_icon' 
                            title="Unchecked" 
                            onClick={()=>markTodo(med.id)}
                        />
                    )}
                    <Edit 
                        size={20} 
                        className='edit_icon'
                        onClick={()=>handleEditClick(med)}                        
                    />
                    <Delete 
                        size={20} 
                        className='delete_icon'
                        onClick={()=>handleDeleteNote(med.id)} 
                    />
                </div>
                
            </div>

        </div>
    );
};

export default Medication;