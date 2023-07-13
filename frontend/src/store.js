import TestReducer from './redux/TestReducer';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: TestReducer,
})

export default store
