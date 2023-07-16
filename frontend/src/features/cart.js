import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: {
            content: {
                "1": {
                    name: "item1",
                    price: 2.50
                },
                "2": {
                    name: "item2",
                    price: 99.99
                }
            }
        }
    },
    reducers: {
        addToCart: (state, action) => {
            state.value += action.payload
        }
    } 
})

export default cartSlice.reducer