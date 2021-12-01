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
    const date = new Date();
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
    const note = meds.filter((med)=> med.id === id);
    note.isDone = !(note.isDone);//true;
    console.log(note);
    /*
    const newNotes = meds.map(
      (med)=> (med.id === id ? note : med));
    console.log(newNotes);
    setMeds(newNotes);
*/
    

    /*
    const newNotes = [...meds];
    newNotes[id].isDone = true;
    */
   /*
    const newNotes = meds.filter((med)=> (med.id === id ? med.isDone=true : med.isDone));
    console.log(newNotes);
    setMeds(newNotes);
    */
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
                med.text.toLowerCase().includes(searchText) & (med.text.length > 5)
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
                med.text.toLowerCase().includes(searchText) & (med.text.length === 5)
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
                med.text.toLowerCase().includes(searchText) & (med.text.length < 5)
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

/*
 <Header meds={meds} setMeds={setMeds}/>

*/