import "./App.scss";

import React, { useState } from "react";
import { Popup } from "./components/popup/Popup";
import { ItemsList } from "./components/itemsList/ItemsList";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="App">
      <h1>ADD NEWS COMPONENT</h1>
      <ItemsList />
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
