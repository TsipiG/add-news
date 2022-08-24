import React, { useState }  from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import closeBtn from "../../assets/svg/close.svg";
import styles from "./Popup.module.scss";

interface Props {
  isPopupOpen: boolean;
  setIsPopupOpen: any;
};

export const Popup = ({isPopupOpen,setIsPopupOpen}:Props) => {

  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    alert("tsipi");
   // console.log(inputs);
  } 
  return (
    <div className={styles.overlay}>
       <div className={styles.popup}>
        <div className={styles.titlesWrap}><div>Add Article</div><button className={styles.closeBtn} onClick={() => setIsPopupOpen(false)}><img src={closeBtn} alt="close popup"/></button></div>
          <div className={styles.popupBody}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputContainer}>
                <div className={styles.inputLabel}>News Item URL *</div>
                <input type='input' placeholder='Pase Link'/>
                <div className={styles.errorLabel}>Please enter valid values</div>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputLabel}>Date *</div>
                <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />               
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputLabel}>Article Title *</div>
                <textarea placeholder='Type article summary here...' />
                <div className={styles.errorLabel}>Please enter the title of the article</div>
              </div>
              <div className={styles.inputContainer}></div>
              <div className={styles.btnsContainer}>
                <button type="submit" className={styles.saveBtn}>Save</button>
              </div>
            </form>
          </div>             
        </div>
        <div className={styles.overlayBackground} onClick={() => setIsPopupOpen(false)}/>
    </div>
  )
}



