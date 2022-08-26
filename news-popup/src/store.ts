import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

//define the state type for our state
interface NewsFormState {
    title: string | null;
    date: Date | null;
    articleUrl: string | null;
} 

//assign State type to initial State 
const intialState:NewsFormState = { articleUrl: null, title: null, date: null }

const newsFormSlice = createSlice({
    name: "newsForm",
    initialState: intialState,    
    reducers: { 
        updateArticleUrl(state, action:PayloadAction<{articleUrl:string}>) { 
            state.articleUrl = action.payload.articleUrl
        },
        updateTitle(state, action:PayloadAction<{title:string}>) { 
            state.title = action.payload.title
        },
        updateDate(state, action:PayloadAction<{date:Date}>) { 
            state.date = action.payload.date
        }
    }
});

//extract the actions which are the outputs of create slice the functions = reducers 
//Action Creators
export const {updateArticleUrl, updateTitle, updateDate} = newsFormSlice.actions;

//Connect/configure by connecting the slices reduces to the root reducer
export const store = configureStore({
    reducer: {newsForm: newsFormSlice.reducer}
});

export type State = ReturnType<typeof store.getState> 

