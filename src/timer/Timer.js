import { useState, useEffect } from 'react'
import './Timer.css'

function Timer({hide, setHide}) {
  const startingTime = 6;
  const [time, setTime] = useState(startingTime);

  useEffect(() => {
    if (time !== startingTime) {
      const countdown = setTimeout(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          clearInterval(countdown);
          setTime(startingTime);
          setHide(!hide);
          setTimeout(() => {
            alert(`TIME IS UP!!!`);
          }, 100);
        }
      }, 1000);
    }
  }, [time]);

  
  const playGame = () => {
    setTime(time - 1);
    setHide(!hide);
  }

  return (
    <div className='Timer'>
      <div className='Timer-Top'>
        <p>TIMER</p>
        <button className='Timer-Top-Btn' onClick={playGame}>PLAY</button>
      </div>
      <div className='Timer-Display'>
        <h1 className='Timer-Display-H1'>{time}</h1>
      </div>
    </div>
  );
}

export default Timer;