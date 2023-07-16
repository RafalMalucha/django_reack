import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./features/user"
import cartReducer from "./features/cart"

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>   
        <App />
      </Provider>
    </BrowserRouter>
);

