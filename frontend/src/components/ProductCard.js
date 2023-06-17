import React from "react";

class ProductCard extends React.Component {
    render() {
        return(
            <div>
                <div class="card w-64 bg-neutral shadow-xl mx-5">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;