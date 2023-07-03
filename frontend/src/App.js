import React from 'react';
import Test from './components/test';
import AddProductForm from './components/AddProductForm';

class App extends React.Component {

render() {
    return(
        <div>
            <Test /> 
            <AddProductForm />
        </div>
    )
}

}

export default App;
