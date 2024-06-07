
import './App.css';
import {TodoList} from "./todoList.tsx";
import {Route} from "react-router-dom";

function App() {
  
  return (
    <>
      <Route index element={<TodoList />}/>
    </>
  )
}

export default App
