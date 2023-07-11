import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProductForm from './components/AddProductForm';
import Shop from './components/functional/Shop';
import Cart from './components/functional/Cart'

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" Component={Shop} />
                <Route path="cart" Component={Cart} />
                <Route path='add_product' Component={AddProductForm} />
            </Routes>
        </>
    )
}

export default App;
