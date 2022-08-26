import React, { useState } from "react";
import "./App.scss";
import { Popup } from "./components/popup/Popup";
import deleteIcon from "./assets/svg/delete-icon.svg";
import editIcon from "./assets/svg/edit-icon.svg";
import { itemsList } from "./components/itemsList/ItemsList.module.scss";
// import { ItemsList } from "./components/itemsList/ItemsList";
interface IKeys {
  key1: string;
  key2: string;
}
interface News {
  id: number;
  news_title: string;
  news_date: string;
  news_url: string;
}

const mockNews: News[] = [
  {
    id: 1,
    news_title: "1st Title",
    news_date: "August 1, 2011",
    news_url:
      "https://techcrunch.com/2022/07/26/if-it-walks-like-a-dog-and-barks-like-a-dog-perhaps-its-actually-a-non-security-crypto-digital-asset/",
  },
  {
    id: 2,
    news_title: "2nd Title",
    news_date: "August 2, 2022",
    news_url:
      "https://techcrunch.com/2022/07/26/if-it-walks-like-a-dog-and-barks-like-a-dog-perhaps-its-actually-a-non-security-crypto-digital-asset/",
  },
  {
    id: 3,
    news_title: "3rd Title",
    news_date: "August 3, 2033",
    news_url:
      "https://techcrunch.com/2022/07/26/if-it-walks-like-a-dog-and-barks-like-a-dog-perhaps-its-actually-a-non-security-crypto-digital-asset/",
  },
];

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [newsList, setNewList] = useState(mockNews);

 

  return (
    // <NewsProvider>
      <div className="App">
        <h1>ADD NEWS COMPONENT</h1>
        {/* <ItemsList newsList={newsList} /> */}
        <div className="news-list">
          <ul style={{ textAlign: "left" }}>
            {newsList.map((item, index) => (
              <li key={index}>
                <a href={item.news_url} className="news-wrap">
                  <div className="news-title"><span>{item.news_title}</span> - <span>{item.news_date}</span></div>                  
                  <p>{item.news_url}</p>
                </a>
                <div className="btns-wrap">
                  <button className="delete-btn" onClick={()=>{alert("Delete")}}><img src={deleteIcon}/></button>
                  <button className="edit-btn" onClick={()=> {alert("Edit")}}><img src={editIcon}/></button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="add-news-btn">
          <button onClick={() => setIsPopupOpen(true)}>Add news</button>
        </div>
        {isPopupOpen && (
          <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
        )}
      </div>
    // </NewsProvider>
  );
}
export default App;
