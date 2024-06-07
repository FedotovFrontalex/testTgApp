
import './App.css';
import {useTelegram} from "./useTelegram.ts";
import {useEffect} from "react";
import {TodoList} from "./todoList.tsx";
import {Route} from "react-router-dom";

function App() {
  const {tg} = useTelegram();
  
  useEffect(() => {
    tg.ready();
  }, [])
  
  return (
    <>
      <Route path={'/'} element={<TodoList />}/>
    </>
  )
}

export default App
