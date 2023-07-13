import React from "react";
import Navbar from "../components/ui_elements/Navbar.js";
import ColorReference from "../components/ui_elements/ColorReference.js";

class LandingPage extends React.Component {

    render() {
        return(
            <>
                <Navbar />
                <ColorReference />
            </>
        )
    }

}

export default LandingPage