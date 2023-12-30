import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    postsArray: []
}

// API REQUEST
export const getAllPosts = createAsyncThunk('myposts/getAllPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
});

export const postSlice = createSlice({
    name:"myposts",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getAllPosts.fulfilled, (state, action) =>  {
            state.postsArray = action.payload  // postsArray setlenmesi.
        })
    }
})

export default postSlice.reducer // BURAYI UNUTMAYIN, store.js'taki postReducer kısmı.