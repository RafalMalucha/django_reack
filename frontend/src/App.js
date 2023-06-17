import React from 'react';
import Navbar from "./components/Navbar.js";
import StoreMain from "./components/StoreMain.js";

class App extends React.Component {

render() {
    return(
        <div>
            <Navbar />
            <StoreMain />
        </div>
    )
}

}

export default App;
