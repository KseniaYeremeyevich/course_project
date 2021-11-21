/*import { MdDeleteForever } from 'react-icons/md';*/

const Medication = ({ id, text, date }) => {
    return (
        <div className='med'>
            <span> {text} </span>
            <div>
                <small> {date} </small>
            </div>
        </div>
    );
};

export default Medication;

//<MdDeleteForever className='delete-icon' size='1.3em' /> 