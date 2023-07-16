import { createSlice } from "@reduxjs/toolkit"; 

const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            username: "test"
        }
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    } 
})

export default userSlice.reducer