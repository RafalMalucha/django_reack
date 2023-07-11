import React from "react";
import ButtonTemplate from "../ui_elements/ButtonTemplate";
import ProductCard from "../ui_elements/ProductCard";
//import ProductCard from "../components/ui_elements/ProductCard";

class Shop extends React.Component {

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
                <h1>aaa</h1>
                <div class="flex flex-row">
                    {this.state.details.map((output, id) => (
                        <ProductCard id={id} ProductData={output}/>
                    ))}
                </div>
            
            </div>
        )
    }

}

export default Shop;