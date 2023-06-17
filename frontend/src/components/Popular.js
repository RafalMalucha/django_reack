import React from "react";
import ProductCard from "./ProductCard";

class Popular extends React.Component {
    render() {
        return(
            <div>
                <div class="flex flex-row justify-center items-center mb-2">
                    <a class="normal-case text-xl text-primary">Recommended Now</a>
                </div>
                <div class="flex flex-row justify-center items-center mb-5">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        )
    }
}

export default Popular;