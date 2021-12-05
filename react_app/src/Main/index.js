import '../index.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import MedicationsList from '../components/MedicationsList';
import SearchNote from '../components/SearchNote';
import Header from '../components/Header';
import AddNote from "../components/AddNote";
import EditNote from "../components/EditNote";

const Main = () => {
  const [meds, setMeds] = useState([
    {
      id: nanoid(),
      text: "first hello",
      hour: "15",
      minute: "30",
      isDone: false
    },
    {
      id: nanoid(),
      text: "hello",
      hour: "15",
      minute: "30",
      isDone: false
    }
  ]);

  const [searchText, setSearchText] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState({})

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-meds-app-data')
    );

    if(savedNotes){
      setMeds(savedNotes);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-meds-app-data',
      JSON.stringify(meds)
    );
  }, [meds]);

  const addNote = (text, hour, minute) => {
    const newNote = {
      id: nanoid(),
      text: text,
      hour: hour,
      minute: minute,
      isDone: false
    };
    const newNotes = [...meds, newNote];
    setMeds(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = meds.filter((med)=> med.id !== id);
    setMeds(newNotes);
  };

  const markTodo = (id) => {
    const newNotes = meds.map(
      (med)=> (med.id === id ? 
        {
          id: med.id,
          text: med.text,
          hour: med.hour,
          minute: med.minute,
          isDone: !med.isDone
        } : {
          id: med.id,
          text: med.text,
          hour: med.hour,
          minute: med.minute,
          isDone: med.isDone
        } 
      ));
    //console.log(newNotes);
    setMeds(newNotes);
  };

  const handleEditInputChange = (e) => {
    setCurrentNote({ ...currentNote, text: e.target.value });
    console.log(currentNote);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    handleUpdateTodo(currentNote.id, currentNote);
  };

  const handleUpdateTodo = (id, updatedMed) => {
    const updatedItem = meds.map((med) => {
      return med.id === id ? updatedMed : med;
    });
    setIsEditing(false);
    setMeds(updatedItem);
  };

  const handleEditClick = (med) => {
    setIsEditing(true);
    setCurrentNote({ ...med });
  }

  return (
  
  <div className='app'>
    <Header />

    <SearchNote handleSearchNote={setSearchText} />
    <div className='app_main'>
      
      <div className='time'>
        <p className='text_time'> 
            Morning
        </p>
        <div className='time_container'>

        {isEditing ? 
          <EditNote 
            currentNote={currentNote}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditInputChange}
            onEditFormSubmit={handleEditFormSubmit}
          /> 
          : 
          <AddNote handleAddNote={addNote} />}
        

          <div className='container'>
            <MedicationsList 
              meds={meds.filter((med) => 
                med.text.toLowerCase().includes(searchText) & (med.hour >= 4) & (med.hour <= 11)
              )} 
              handleDeleteNote={deleteNote}
              handleEditClick={handleEditClick}
              markTodo={markTodo}
            />
          </div>
        </div>
      </div>


      <div className='time'>
        <p className='text_time'> 
            Day
        </p>
        <div className='time_container'>

          <div className='container'>
            <MedicationsList 
              meds={meds.filter((med) => 
                med.text.toLowerCase().includes(searchText) & (med.hour >= 12) & (med.hour <= 16)
              )} 
              handleAddNote={addNote} 
              handleDeleteNote={deleteNote}
              handleEditClick={handleEditClick}
              markTodo={markTodo}
            />
          </div>
        </div>
      </div>

      <div className='time'>
        <p className='text_time'> 
            Evening
        </p>
        <div className='time_container'>

          <div className='container'>
            <MedicationsList 
              meds={meds.filter((med) => 
                med.text.toLowerCase().includes(searchText) & ((med.hour >= 17) | (med.hour <= 3))
              )} 
              handleAddNote={addNote} 
              handleDeleteNote={deleteNote}
              handleEditClick={handleEditClick}
              markTodo={markTodo}
            />
          </div>
        </div>
      </div>

    </div>
  </div>
  
  );
};

export default Main;