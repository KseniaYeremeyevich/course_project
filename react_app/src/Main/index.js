import '../index.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import MedicationsList from '../components/MedicationsList';

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

  return (
  <div className='App'>
      <div className='time'>

        <p className='text_time'> 
          УТРО
        </p>

        <div className='container'>
          <MedicationsList meds={meds} handleAddNote={addNote} />
        </div>
        
      </div>
    
      <div className='time'>
        <p className='text_time'> 
          ДЕНЬ
        </p>  

      </div>
    
      <div className='time'>
        <p className='text_time'> 
          ВЕЧЕР
        </p>
      </div>
    </div>
  );
};

export default Main;

