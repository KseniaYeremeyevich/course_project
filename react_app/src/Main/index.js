import '../index.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import MedicationsList from '../components/MedicationsList';
import SearchNote from '../components/SearchNote';
import Header from '../components/Header';
import AddNote from "../components/AddNote";

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
  }

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

        <AddNote handleAddNote={addNote} />

          <div className='container'>
            <MedicationsList 
              meds={meds.filter((med) => 
                med.text.toLowerCase().includes(searchText) & (med.hour >= 4) & (med.hour <= 11)
              )} 
              handleDeleteNote={deleteNote}
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