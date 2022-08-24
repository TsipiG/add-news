import React, { useState }  from "react";
import { NewsForm } from "../newsForm/NewsForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import closeBtn from "../../assets/svg/close.svg";
import styles from "./Popup.module.scss";

interface Props {
  isPopupOpen: boolean;
  setIsPopupOpen: any;
};

export const Popup = ({isPopupOpen,setIsPopupOpen}:Props) => {

  return (
    <div className={styles.overlay}>
       <div className={styles.popup}>
        <div className={styles.titlesWrap}><div>Add Article</div><button className={styles.closeBtn} onClick={() => setIsPopupOpen(false)}><img src={closeBtn} alt="close popup"/></button></div>
          <div className={styles.popupBody}>
            <NewsForm setIsPopupOpen={setIsPopupOpen} />
          </div>             
        </div>
        <div className={styles.overlayBackground} onClick={() => setIsPopupOpen(false)}/>
    </div>
  )
}



