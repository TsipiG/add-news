import "./App.scss";

import React, { useEffect, useState } from "react";
import { Popup } from "./components/Popup/Popup";
import { closePopup, openPopup, State } from "./store";
import { AddNewsForm } from "./features/AddNewsForm/AddNewsForm";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const popup = useSelector((state: State) => state.popup);
  const openAddNewsForm = () => dispatch(openPopup({ popup: "new" }));
  const [isIframeVisible, setIsIframeVisible] = useState<Boolean | null>(false); //TODO setIsIframeVisible true or false from App

  const closeAddNewsFormInner = () => dispatch(closePopup());
  const closeAddNewsForm = () => {
    //closeAddNewsFormInner();
    if (window && window.parent) {
      console.log("we have message sending here", window.parent);
      window.parent.postMessage("close-add-news", "*");
    }
  };
  useEffect(() => {
    openAddNewsForm();
  });

  return (
    <div className="App">
      {/* Add new article feature */}
      {!isIframeVisible && (
        <Popup isOpen={popup.type === "new"} onClose={closeAddNewsForm}>
          <AddNewsForm />
        </Popup>
      )}
    </div>
  );
}
export default App;
