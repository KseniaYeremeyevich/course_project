import Medication from "./Medication";
import AddNote from "./AddNote";

const MedicationsList = ({ meds, handleAddNote }) => {
    return (
        <div className='med_list'>
			{meds.map((med) => (
				<Medication
					id={med.id} 
					text={med.text} 
					date={med.date}
				/>
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div> 
    );
};

export default MedicationsList;