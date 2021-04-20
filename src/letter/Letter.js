import { useState } from 'react'
import './Letter.css';

function Letter() {
  const [index, setIndex] = useState(0);

  const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

  const changeLetter = () => {
    const randomIndex = Math.floor(Math.random() * letters.length);
    setIndex(randomIndex);
  }

  return (
    <div className='Letter'>
      <div className='Letter-Top'>
        <p>LETTER</p>
        <button className='Letter-Top-Btn' onClick={changeLetter}>Roll Again</button>
      </div>
      <div className='Letter-Display'>
        <h1 className='Letter-Display-H1'>{letters[index]}</h1>
      </div>
    </div>
  );
}

export default Letter;