import { createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../client'

export const getCompanyNews = createAsyncThunk(
    "addNewsForm/getCompany",
    async ({ companyId }: { companyId: string }, thunk) => {
      try {
        const response = await client.get(
          `http://localhost/_profile/${companyId}`,
        );
        return response.data.profile.news.map((item:any) => ({
          id: item.id,
          title: item.news_summary,
          url: item.link,
          date: item.date,
        }));
      } catch (e) {
        return thunk.rejectWithValue(e);
      }
    }
  );

  // export const deleteNews = createAsyncThunk(
  //   "addNewsForm/deleteNews",
  //   async ({ companyId, newsId }: { companyId: string, newsId:string }, thunk) => {
  //     try {
  //         const response = await client.delete(
  //             `/startups/${companyId}/news/${newsId}`,             
  //         )
  //         //state.items.filter((item) => item.id !== action.payload.id);
  //         return response.data.profile.news.filter((item) => item.id !== action.payload.id);
  //     } catch(e) {
  //       return thunk.rejectWithValue(e)
  //     }
  //   }
  // );
