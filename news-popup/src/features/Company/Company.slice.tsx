import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCompanyNews } from './Company.thunks'

interface NewsItem {
  url: string;
  title: string;
  date: string;
  id: number;
}

interface ItemsListState {
  items: NewsItem[];
}

const intialState: ItemsListState = {
  items: []
};

export const companyNewsSlice = createSlice({
  name: "companyNews",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompanyNews.fulfilled, (state, action: PayloadAction<NewsItem[]>) => {
      state.items = action.payload
    })
  }
});
