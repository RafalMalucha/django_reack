import React from 'react';
import Products from './components/Products.js'
import Navbar from "./components/Navbar.js"
import Popular from './components/Popular.js';

class App extends React.Component {

render() {
    return(
        <div>
            <Navbar />
            <Popular />
            <Products />
        </div>
    )
}

}

export default App;
