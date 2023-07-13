import { createSlice } from '@reduxjs/toolkit'

const InitialState = {
    username: 'TestAdmin',
    email: 'admin@admin.com',
    isLoggedIn: false,
    cart: {
        'item1': 25.80,
        'item2': 99.99,
        'item3': 2.50
    }
}

const TestSlice = createSlice({
    name: 'test',
    InitialState,
    reducers: {}
})

export default TestSlice.reducer