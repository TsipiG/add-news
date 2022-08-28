import { configureStore } from "@reduxjs/toolkit";
import { newsFormSlice } from "./components/newsForm/newsFormSlice";
import { itemsListSlice } from "./components/itemsList/itemsListSlice";

//Connect/configure by connecting the slices reduces to the root reducer
export const store = configureStore({
  reducer: {
    newsForm: newsFormSlice.reducer,
    itemsList: itemsListSlice.reducer,
  },
});

export type State = ReturnType<typeof store.getState>;
