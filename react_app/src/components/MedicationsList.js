import Medication from "./Medication";

const MedicationsList = ({ meds, handleDeleteNote, handleEditClick, markTodo }) => {
    return (
        <div className='med_list'>
            
            {meds.map((med) => (
				<Medication
                    key={med.id}
					med={med}
                    handleDeleteNote={handleDeleteNote}
                    handleEditClick={handleEditClick}
                    markTodo={markTodo}
				/>
            ))}
        </div> 
    );
};

export default MedicationsList;