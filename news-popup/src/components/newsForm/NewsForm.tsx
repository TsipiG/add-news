import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  State,
  store,
  updateArticleUrl,
  updateDate,
  updateTitle,
} from "../../store";
import styles from "./NewsForm.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../shared/button/button";
import { ruTranslations } from "stream-chat-react";

interface Props {
  setIsPopupOpen: any;
}

export const NewsForm = ({ setIsPopupOpen }: Props) => {
  // const urlValidator (url:string) =>{
  //     const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
  //     return regex.test(url);
  // }

  const dispatch = useDispatch();

  //helps to get the data from the state - accepts selector function
  const articleUrl = useSelector((state: State) => state.newsForm.articleUrl);
  const title = useSelector((state: State) => state.newsForm.title);
  const date = useSelector((state: State) => state.newsForm.date);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    alert(
      JSON.stringify({
        articleUrl,
        date,
        title,
      })
    );

    setIsPopupOpen(false);
  };

  const handleArticleUrlChange = (articleUrl: string) => {
    dispatch(updateArticleUrl({ articleUrl }));
  };
  const handleDateChange = (date: Date) => {
    dispatch(updateDate({ date }));
  };
  const handleTitleChange = (title: string) => {
    dispatch(updateTitle({ title }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <div className={styles.inputLabel}>News Item URL *</div>
        <input
          id="articleUrl"
          type="input"
          placeholder="Pase Link"
          onChange={(event) => handleArticleUrlChange(event.target.value)}
        />
        <div className={styles.errorLabel}>Please enter valid values</div>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputLabel}>Date *</div>
        <DatePicker
          selected={date}
          onChange={(date: Date) => handleDateChange(date)}
          dateFormat="MMMM d, yyyy"
          className="news-date"
        />
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputLabel}>Article Title *</div>
        <textarea
          id="articleSummary"
          placeholder="Type article summary here..."
          onChange={(event) => handleTitleChange(event.target.value)}
        />
        <div className={styles.errorLabel}>
          Please enter the title of the article
        </div>
      </div>
      <div className={styles.inputContainer}></div>
      <div className={styles.btnsContainer}>
        <button type="submit" className={styles.saveBtn}>
          Save
        </button>
        {/* <Button text="SAVE" type="submit" onClick={handleSubmit}  /> */}
      </div>
    </form>
  );
};
