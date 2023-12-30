import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    payloadObject: {},
    genres: {}
}

export const homeSlice = createSlice({
    name:'home',
    initialState,
    reducers:{
        getApiConfiguration:(state, action) => {
            state.payloadObject = action.payload
        },

        getGenres: (state, action) => {
            state.genres = action.payload
        }
    }
})

export const { getApiConfiguration, getGenres} = homeSlice.actions
export default homeSlice.reducer

