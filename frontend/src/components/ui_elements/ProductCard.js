import React from "react";

class ProductCard extends React.Component {

    render() {

        const ProductID = this.props.id
        const ProductName = this.props.ProductData.product_name
        const ProductPrice = this.props.ProductData.product_price.toFixed(2)
        //const ProductImage = "src/images/placeholder.png"

        return(
            <div key={ProductID} class="card card-compact w-64 bg-neutral shadow-xl m-5 content-center justify-center">
                <figure><img src="../images/placeholder.png" alt="placeholder" /></figure>
                <div class="card-body">
                    <h2 class="font-xxl">Shoes!</h2>
                    <p class="text-l">{ProductName}</p>
                    <h4>{ProductPrice}</h4>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductCard;