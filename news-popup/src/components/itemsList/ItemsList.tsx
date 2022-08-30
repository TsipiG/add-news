import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ItemsList.module.scss";
import { openPopup, State } from "../../store";
import deleteIcon from "../../assets/svg/delete-icon.svg";
import editIcon from "../../assets/svg/edit-icon.svg";
import { deleteNewsItem } from "./itemsListSlice";
import { editNewsForm } from "../../features/EditNewsForm/editNewsFormSlice";

export const ItemsList = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector((state: State) => state.itemsList.items);

  const deleteArticle = (id: number) => {
    dispatch(deleteNewsItem({ id }));
  };

  const editArticle = (id: number) => {
    dispatch(openPopup({ popup: "edit" }));
    dispatch(editNewsForm({ selectedItemId: id }));
  };

  return (
    <div className={styles.itemsList}>
      <ul style={{ textAlign: "left" }}>
        {itemsList.map((item, index) => (
          <li key={index}>
            <a href={item.url} className="news-wrap">
              <div className="news-title">
                <span>{item.title}</span> - <span>{item.date}</span>
              </div>
              <p>{item.url}</p>
            </a>
            <div className="btns-wrap">
              <button
                className="delete-btn"
                onClick={() => deleteArticle(item.id)}
              >
                <img src={deleteIcon} alt="delete icon" />
              </button>
              <button className="edit-btn" onClick={() => editArticle(item.id)}>
                <img src={editIcon} alt="edit icon" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
