import React,{ useState } from 'react';
import './App.scss';
import { Popup } from './components/popup/Popup'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [inputs, setInputs] = useState({});

  return (
    <div className="App">
      <h1>ADD NEWS COMPONENT</h1>
      <div className='News list'></div>
      <div className='add-news-btn'><button onClick={() => setIsPopupOpen(true)}>Add news</button></div>
      {isPopupOpen && (
        <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
      )}
    </div>
  );
}
export default App;
