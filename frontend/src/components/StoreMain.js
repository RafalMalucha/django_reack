import React from "react";
import Products from "./Products";
import Popular from "./Popular";

class StoreMain extends React.Component {
    render() {
        return(
            <div>
                <div class="flex flex-row">
                    <div class="basis-1/4 bg-neutral">
                        <div class="flex flex-col">
                            <a class="normal-case text-xl normal-case text-primary mb-1 ml-10">Categories</a>
                            <a class="btn btn-ghost w-24 normal-case text-l text-primary mb-1 ml-01">Instrument</a>
                            <a class="btn btn-ghost w-24 normal-case text-l text-primary mb-1 ml-10">Software</a>
                            <a class="btn btn-ghost w-24 normal-case text-l text-primary mb-1 ml-10">Hardware</a>
                        </div>
                    </div>
                    <div class="basis-3/4">
                        <Popular />
                        <Products />
                    </div>
                </div>
            </div>
        )
    }
}

export default StoreMain;