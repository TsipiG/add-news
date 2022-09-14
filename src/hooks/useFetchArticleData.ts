import { useState } from "react";
import axios from "axios";
const { REACT_APP_EMBEDLY_KEY } = process.env;

interface TData {
  title: string;
}
//With Embedly
// export const useFetchArticleData = (url: string | null | undefined) => {
//   const [data, setData] = useState<TData | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const fetchArticle = async (url: string) => {
//     setData(null);
//     return await axios
//       .get(url)
//       .then(async (response) => {
//         setIsLoading(false);
//         const title = await parseTitleFromEmbedly(url);
//         if (title) {
//           setData({ title });
//         }
//       })
//       .catch((error) => {
//         console.log("Can not fetch Title from given URL");
//       });
//   };

//   return { data, isLoading, fetchArticle };
// };

// function parseTitleFromEmbedly(url: string) {
//   const baseURL = "https://api.embedly.com/1/extract";
//   return axios
//     .get(`${baseURL}?key=${REACT_APP_EMBEDLY_KEY}&url=${url}`)
//     .then((res: any) => {
//       console.log(res.data.title);
//       return res.data.title;
//     });
// }

//Without Embedly
export const useFetchArticleData = (url: string | null | undefined) => {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchArticle = async (url: string) => {
    setData(null);
    return axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        const title = parseTitleFromHTML(response.data);
        if (title) {
          setData({ title });
        }
      })
      .catch((error) => {
        console.log("Can not fetch Title from given URL");
      });
  };

  return { data, isLoading, fetchArticle };
};

function parseTitleFromHTML(html: string) {
  const el = document.createElement("html");
  el.innerHTML = html;
  document.querySelector(".className");
  return el.querySelector("title")?.innerText;
}
