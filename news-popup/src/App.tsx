import React, { useState } from "react";
import "./App.scss";
import { Popup } from "./components/popup/Popup";

interface IKeys { key1: string; key2: string }

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [newsList, setNewList] = useState([]);

  return (
    <div className="App">
      <h1>ADD NEWS COMPONENT</h1>
      <div className="News list">
        {/* {newList.length > 0 && ( */}
          {/* <ul>
            {newList?.map((item: string, b: string) => <Ikeys>(
              <li key={b}>{item}</li>
            ))}
          </ul> */}
        {/* } */}
      </div>
      <div className="add-news-btn">
        <button onClick={() => setIsPopupOpen(true)}>Add news</button>
      </div>
      {isPopupOpen && (
        <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
      )}
    </div>
  );
}
export default App;
