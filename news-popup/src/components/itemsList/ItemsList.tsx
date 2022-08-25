import React, { useState } from "react";
import styles from "./ItemsList.module.scss";

interface Props {
  newsList: [];
}
export const ItemsList = ({ newsList }: Props) => {
  return (
    <div className={styles.itemsList}>
      {/* <ul style={{ textAlign: "left" }}>
        {newsList.map((item) => (
          <li>
            <h2>{item.news_title}</h2>
            <p>{item.news_date}</p>
            <p>{item.news_url}</p>
            <button onClick={() => {alert("Delete"); }} >
              Delete Item
            </button>
            <button onClick={() => {alert("Edit"); }} >
              Edit Item
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
