import { createSlice } from "@reduxjs/toolkit"; 

const productLoaderSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            apiLink: "http://127.0.0.1:8000/api/"
        }
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    } 
})

export default productLoaderSlice.reducer