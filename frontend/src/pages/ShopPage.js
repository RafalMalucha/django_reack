import React from "react"
import Navbar from "../components/ui_elements/Navbar"
import Shop from "../components/functional/Shop"

class ShopPage extends React.Component {

    render() {
        return(
            <>
                <Navbar />
                <Shop />
            </>
        )
    }

}

export default ShopPage