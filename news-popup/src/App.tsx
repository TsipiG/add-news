import "./App.scss";

import React, { useState } from "react";
import { Popup } from "./components/Popup/Popup";
import { closePopup, openPopup, State } from "./store";
import { ItemsList } from "./components/ItemsList/ItemsList";
import {AddNewsForm } from './features/AddNewsForm/AddNewsForm'
import { useDispatch, useSelector } from "react-redux";

function App() {

  //1. get a value from the state - useSelectro 
  //2. by calling action creator

  //ToDo
  //Talk the code...
  //build the Edit feature

  const dispatch = useDispatch();
  const popup = useSelector((state:State)=> state.popup)
  const openAddNewsForm = () => dispatch(openPopup({ popup:'new' }))
  const closeAddNewsForm = () => dispatch(closePopup())

  return (
    <div className="App">
      {/* Article list feature */}
      <h1>ADD NEWS COMPONENT</h1>
      <ItemsList />
      {/* Add article button feature */}
      <div className="add-news-btn">
        <button onClick={openAddNewsForm}>Add news</button>
      </div>
      {/* Article form feature */}
      <Popup isOpen={popup.type === 'new'} onClose={closeAddNewsForm}>
        <AddNewsForm />
      </Popup>
    </div>
  );
}
export default App;
