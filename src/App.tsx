
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  };
  
  return (
    <>
      <button onClick={onClose}>Закрыть</button>
    </>
  )
}

export default App
