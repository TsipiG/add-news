import React, { useState } from "react";
import styles from "./NewsForm.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  setIsPopupOpen: any;
};

export const NewsForm = ({setIsPopupOpen}:Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [articleUrl, setArticleUrl] = useState('');
  const [articleDate, setArticleDate] = useState('');
  const [articleSummary, setArticleSummary] = useState('');

  // const urlValidator (url:string) =>{    
  //     const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
  //     return regex.test(url);
  // }


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    alert( "submited");
    console.log("article url: " + articleUrl);
    console.log("article url: " + articleSummary);
    console.log("article url: " + startDate);
    setIsPopupOpen(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <div className={styles.inputLabel}>News Item URL *</div>
        <input id="articleUrl" type="input" placeholder="Pase Link" onChange={event => setArticleUrl(event.target.value)} />
        <div className={styles.errorLabel}>Please enter valid values</div>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputLabel}>Date *</div>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          dateFormat="MMMM d, yyyy"
          className="news-date"
        />
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputLabel}>Article Title *</div>
        <textarea id="articleSummary" placeholder="Type article summary here..." onChange={event => setArticleSummary(event.target.value)} />
        <div className={styles.errorLabel}>
          Please enter the title of the article
        </div>
      </div>
      <div className={styles.inputContainer}></div>
      <div className={styles.btnsContainer}>
        <button type="submit" className={styles.saveBtn}>
          Save
        </button>
      </div>
    </form>
  );
};
