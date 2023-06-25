import React from "react";

async function fetchData() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

class Test extends React.Component {

    state = {details: []}

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/')
        .then(res => res.json()) // Parse the response as JSON
        .then(data => {
            console.log(data); // Log the JSON data
            this.setState({
                details: data // Update the component state with the data
            });
        }).catch(err => {
            console.error(err); // Handle any errors that occurred during the request
        });
    }

    render() {
        return(
        <div>
            <div>
                <h1>test test</h1>
                <h3>
                    {this.state.details.map((output, id) => (
                        <div key={id}>
                            <h1>{output.product_name}</h1>
                        </div>
                    ))}
                </h3>
            </div>
        </div>
        )
    }

}

export default Test;