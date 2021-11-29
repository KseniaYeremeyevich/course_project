import Medication from "./Medication";
import AddNote from "./AddNote";

const MedicationsList = ({ meds, handleAddNote, handleDeleteNote /*, handleEditNote*/ }) => {
    return (
        <div className='med_list'>
            <AddNote handleAddNote={handleAddNote/*, handleEditNote*/} />
            {meds.map((med) => (
				<Medication
					id={med.id} 
					text={med.text} 
					date={med.date}
                    handleDeleteNote={handleDeleteNote}
                    /*handleEditNote={handleEditNote}*/
				/>
            ))}
        </div> 
    );
};

export default MedicationsList;