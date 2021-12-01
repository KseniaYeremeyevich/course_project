import Medication from "./Medication";

const MedicationsList = ({ meds, handleDeleteNote, markTodo }) => {
    return (
        <div className='med_list'>
            
            {meds.map((med) => (
				<Medication
					id={med.id} 
					text={med.text} 
                    hour={med.hour}
                    minute={med.minute}
                    isDone={med.isDone}
                    handleDeleteNote={handleDeleteNote}
                    markTodo={markTodo}
				/>
            ))}
        </div> 
    );
};

export default MedicationsList;
