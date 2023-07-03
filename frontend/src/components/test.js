import React from "react";

class Test extends React.Component {

    state = {
        currentOffer: 'all',
        currentApiLink: 'http://127.0.0.1:8000/api/',
        details: []
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/')
        .then(res => res.json()) // Parse the response as JSON
        .then(data => {
            this.setState({
                details: data // Update the component state with the data
            });
        }).catch(err => {
            console.error(err); // Handle any errors that occurred during the request
        });
    }

    fetchData = () => {
        fetch(this.state.currentApiLink)
        .then(res => res.json()) // Parse the response as JSON
        .then(data => {
            this.setState({
                details: data // Update the component state with the data
            });
        }).catch(err => {
            console.error(err); // Handle any errors that occurred during the request
        });
    }

    handleOnlyHardware = () => {
        this.setState({
            currentOffer: 'hardware',
            currentApiLink: 'http://127.0.0.1:8000/api/hardware/'
        })
        this.fetchData()
    }

    handleOnlySoftware = () => {
        this.setState({
            currentOffer: 'software',
            currentApiLink: 'http://127.0.0.1:8000/api/software/'
        })
        this.fetchData()
    }

    handleOnlyInstrument = () => {
        this.setState({
            currentOffer: 'instrument',
            currentApiLink: 'http://127.0.0.1:8000/api/instrument/'
        })
        this.fetchData()
    }

    handleAll = () => {
        this.setState({
            currentOffer: 'all',
            currentApiLink: 'http://127.0.0.1:8000/api/'
        })
        this.fetchData()
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
                <button onClick={this.handleOnlyHardware}>
                    hardware
                </button>
                <br></br>
                <button onClick={this.handleOnlySoftware}>
                    software
                </button>
                <br></br>
                <button onClick={this.handleOnlyInstrument}>
                    instrument
                </button>
                <br></br>
                <button onClick={this.handleAll}>
                    all
                </button>
            </div>
        </div>
        )
    }

}

export default Test;