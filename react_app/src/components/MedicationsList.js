import Medication from "./Medication";
import AddNote from "./AddNote";

const MedicationsList = ({ meds, handleAddNote, handleDeleteNote }) => {
    return (
        <div className='med_list'>
            <AddNote handleAddNote={handleAddNote} />
            {meds.map((med) => (
				<Medication
					id={med.id} 
					text={med.text} 
					date={med.date}
                    handleDeleteNote={handleDeleteNote}
				/>
            ))}
        </div> 
    );
};

export default MedicationsList;