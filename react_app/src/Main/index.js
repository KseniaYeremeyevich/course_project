import '../index.css';
import MedicationsList from '../components/MedicationsList';

const Main = () => {
  return (
    <div className='App'>
      <div className='time'>
        <p className='text_time'> 
          УТРО
        </p>
        <div className='container'>
          <MedicationsList />
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

