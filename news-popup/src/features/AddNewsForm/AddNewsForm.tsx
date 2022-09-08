import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closePopup, State, store } from "../../store";
import { NewsForm } from "../../components/NewsForm/NewsForm";
import { updateDate, updateTitle, updateUrl } from "./addNewsForm.slice";
import { addNewsItem } from "../../components/ItemsList/itemsListSlice";
import { isValidUrl } from "../../utils/isValidUrl";
import { useFetchArticleData } from "../../hooks/useFetchArticleData";
import { postNews } from "./addNewsForm.thunk";
import { getCompanyNews } from "../Company/Company.thunks";

export const AddNewsForm = () => {
  const dispatch = useDispatch();
  const url = useSelector((state: State) => state.addNewsForm.url);
  const title = useSelector((state: State) => state.addNewsForm.title);
  const date = useSelector((state: State) => state.addNewsForm.date);
  const [errorUrl, setErrorUrl] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);
  const { data, isLoading, fetchArticle } = useFetchArticleData(url);

  useEffect(() => {
    if (data?.title) {        
      dispatch(updateTitle({ title: data.title }));
    }
  }, [data?.title, dispatch]);

  const handleSubmit = () => {     
    if(!url){
      setErrorUrl("Please paste a valid url");
      return;
   } 
   if(!isValidUrl(url)){
      setErrorUrl("This is not a valid url");
      return;
   } 
   if(!title){
      setErrorTitle("Please type a title");
      return;
   } 
    if (date && title) {   
      store.dispatch(
        // addNewsItem({
        //   url,
        //   date, 
        //   title
        // })
        // postNews({
        //   url,
        //   date,
        //   title,
        //   companyId: "agxzfmlsbGlzdHNpdGVyGAsSC05ld19Db21wYW55GICAwP_k4J4KDA", //2Drops
        // })
        postNews({
          url,
          date,
          title,
          companyId: "agxzfmlsbGlzdHNpdGVyGAsSC05ld19Db21wYW55GICAgL6qvKcJDA",//1net.me
        })
      );     
      dispatch(updateUrl({url: ""}));  
      dispatch(updateTitle({title: ""}));    
      store.dispatch(getCompanyNews({companyId: "agxzfmlsbGlzdHNpdGVyGAsSC05ld19Db21wYW55GICAgL6qvKcJDA"})); 
      dispatch(closePopup())
    }
  };

  const handleUrlChange = (url: string) => {
    dispatch(updateUrl({ url }));
  };

  const handleDateChange = (date: string) => {
    dispatch(updateDate({ date }));
  };

  const handleTitleChange = (title: string) => {
    dispatch(updateTitle({ title }));
  };

  return (
    <NewsForm 
      url={url}
      isLoading={isLoading}
      title={title}
      formTitle={"Add an Article"} 
      errorTitle={errorTitle}
      errorUrl={errorUrl} 
      handleDateChange={handleDateChange} 
      handleTitleChange={handleTitleChange} 
      handleUrlChange={handleUrlChange} 
      handleSubmit={handleSubmit} 
      onArticleTitleFetch={() => {
        if (url) {
          fetchArticle(url)
        }
      }}
    />
  )
};
// function getCompanyNews(arg0: { companyId: string; }): any {
//   throw new Error("Function not implemented.");
// }

