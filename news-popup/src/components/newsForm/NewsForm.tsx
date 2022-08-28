import "react-datepicker/dist/react-datepicker.css";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../store";
import { updateArticleUrl, updateDate, updateTitle } from "./newsFormSlice";
import styles from "./NewsForm.module.scss";
import DatePicker from "react-datepicker";
import { Button } from "../shared/button/button";
// import { ruTranslations } from "stream-chat-react";
import { addNewsItem } from "../itemsList/itemsListSlice";

// TODO:
// to be able to edit article you need to create 3 components
// 1. NewsForm (base component that hols html and accepts props)
// 2. AddNewsForm (handles all logic needed to add news and passes needed propties to NewsForm)
//    AddNewsForm will render NewsForm
// 3. EditNewsForm (handles all logic needed to edit news and passes neede propties to NewsForm)
//    EditNewsForm will render NewsForm

//Tsipi
//1. Input Validation
//2. Datepicker only 5 last years.
//3. API call to embedly - iframly
//4. API call to our endpoint

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

  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();
  //   if (articleUrl && date && title) {
  //     dispatch(
  //       addNewsItem({
  //         articleUrl,
  //         date,
  //         title,
  //       })
  //     );
  //   }
  //   setIsPopupOpen(false);
  // };

  const handleSubmit = () => {
    if (articleUrl && date && title) {
      dispatch(
        addNewsItem({
          articleUrl,
          date,
          title,
        })
      );
    }
    setIsPopupOpen(false);
  };

  const handleArticleUrlChange = (articleUrl: string) => {
    dispatch(updateArticleUrl({ articleUrl }));
  };

  const handleDateChange = (date: string) => {
    dispatch(updateDate({ date }));
  };

  const handleTitleChange = (title: string) => {
    dispatch(updateTitle({ title }));
  };

  return (
    // <form
    //   onSubmit={handleSubmit}
    // >
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
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
          selected={date ? new Date(date) : new Date()}
          onChange={(date: Date) => handleDateChange(date.toISOString())}
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
        <Button
          text={"Save"}
          onClick={() => {
            handleSubmit();
          }}
        />
        {/* <Button text="SAVE" type="submit" onClick={handleSubmit}  /> */}
      </div>
    </form>
  );
};
