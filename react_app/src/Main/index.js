import '../index.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import MedicationsList from '../components/MedicationsList';
import SearchNote from '../components/SearchNote';
import Header from '../components/Header';

const Main = () => {
  const [meds, setMeds] = useState([
    {
      id: nanoid(),
      text: "first hello",
      date: "16/11/2021"
    },
    {
      id: nanoid(),
      text: "hello",
      date: "16/11/2021"
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

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...meds, newNote];
    setMeds(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = meds.filter((med)=> med.id !== id);
    setMeds(newNotes);
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

  <div className='container'>
    <MedicationsList 
      meds={meds.filter((med) => 
        med.text.toLowerCase().includes(searchText)
      )} 
      handleAddNote={addNote} 
      handleDeleteNote={deleteNote}
    />
  </div>
    
</div>

  <div className='time'>
    <p className='text_time'> 
      Day
    </p>  

  </div>

  <div className='time'>
    <p className='text_time'> 
      Evening
    </p>

  </div>
</div>
  </div>
  
  );
};

export default Main;

