import React from "react";
import ButtonTemplate from "../ui_elements/ButtonTemplate";
import ProductCard from "../ui_elements/ProductCard";
//import ProductCard from "../components/ui_elements/ProductCard";

class Shop extends React.Component {

    state = {
        currentOffer: 'all',
        currentApiLink: 'http://127.0.0.1:8000/api/',
        details: [],
        loadedProducts: {}
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/')
        .then(res => res.json()) // Parse the response as JSON
        .then(data => {
            console.log(data)
            this.getAmountOfLoadedProducts()
            this.setState({
                details: data, // Update the component state with the data
                loadedProducts: data
            });
        }).catch(err => {
            console.error(err); // Handle any errors that occurred during the request
        });
    }

    getAmountOfLoadedProducts() {
        console.log(this.state.details.length)
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
        this.getAmountOfLoadedProducts()
    }

    handleOnlyHardware = () => {
        this.setState({
            currentOffer: 'hardware',
            currentApiLink: 'http://127.0.0.1:8000/api/hardware/'
        })
        this.fetchData()
        this.getAmountOfLoadedProducts()
    }

    handleOnlySoftware = () => {
        this.setState({
            currentOffer: 'software',
            currentApiLink: 'http://127.0.0.1:8000/api/software/'
        })
        this.fetchData()
        this.getAmountOfLoadedProducts()
    }

    handleOnlyInstrument = () => {
        this.setState({
            currentOffer: 'instrument',
            currentApiLink: 'http://127.0.0.1:8000/api/instrument/'
        })
        this.fetchData()
        this.getAmountOfLoadedProducts()
    }

    handleAll = () => {
        this.setState({
            currentOffer: 'all',
            currentApiLink: 'http://127.0.0.1:8000/api/'
        })
        this.fetchData()
        this.getAmountOfLoadedProducts()
    }

    render() {
        return(
            <div>
                <div class="flex flex-col">
                    {this.state.details.map((output, id) => ( 
                        <ProductCard key={id} ProductData={output}/>
                    ))}
                </div>
                <div>
                    {this.state.details.length}
                </div>
            </div>
        )
    }

}

export default Shop;