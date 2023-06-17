import axios from 'axios';
import React from 'react';

class Products extends React.Component {

    state = { details: [], }

    componentDidMount() {
        let data;
        axios.get('http://localhost:8000').then(response => {
            data = response.data;
            this.setState({
                details: data
            });
        })
        .catch(err => {"error"})
    }

    render() {
        return(
            <div>
                {this.state.details.map((output, id) => (
                    <div key={id}>
                        <div class="container w-96 bg-neutral mx-10 ">
                            <h2 class="text-xl font-bold text-primary">{output.product_name}</h2>
                            <h3 class="font-bold text-primary">Price:  {output.product_price}</h3>
                            <h4 class="font-bold text-primary">ID: {output.product_id}</h4>
                        </div>
                        <br></br>
                    </div>
                ))}
            </div>
        )
    }
}

export default Products;