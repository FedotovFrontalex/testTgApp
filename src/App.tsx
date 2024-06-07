
import './App.css';
import {useTelegram} from "./useTelegram.ts";
import {useEffect, useState} from "react";

function App() {
  const {tg} = useTelegram();
  const [count, setCount] = useState<number>(0)
  
  useEffect(() => {
    tg.ready();
  }, [])
  
  const clickHandler = () => {
    setCount((prev) => prev + 1);
  }
  
  return (
    <div className='wrapper'>
      <span className='count'>{count}</span>
      <button className='button' onClick={clickHandler}>click</button>
    </div>
  )
}

export default App
