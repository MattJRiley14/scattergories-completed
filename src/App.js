import './App.css';
import Letter from './letter/Letter';
import Timer from './timer/Timer';
import Categories from './categories/Categories';
import {useState} from 'react'

function App() {
  const [hide, setHide] = useState(true);

  return (
    <div className='App'>
      <div className='App-Section-One'>
        <Letter />
        <Timer hide={hide} setHide={setHide} />
      </div>
      <div className='App-Section-Two'>
        <Categories hide={hide} />
      </div>
    </div>
  );
}

export default App;
