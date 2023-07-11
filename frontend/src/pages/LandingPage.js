import React from "react";
import Navbar from "../components/ui_elements/Navbar.js";

class LandingPage extends React.Component {

    render() {
        return(
            <>
                <Navbar />
                <div class="box-border h-32 w-32 p-4 bg-primary"></div>
                <div class="box-border h-32 w-32 p-4 bg-secondary"></div>
                <div class="box-border h-32 w-32 p-4 bg-accent"></div>
                <div class="box-border h-32 w-32 p-4 bg-neutral"></div>
                <div class="box-border h-32 w-32 p-4 bg-base-100"></div>
                <div class="box-border h-32 w-32 p-4 bg-info"></div>
                <div class="box-border h-32 w-32 p-4 bg-success"></div>
                <div class="box-border h-32 w-32 p-4 bg-warning"></div>
                <div class="box-border h-32 w-32 p-4 bg-error"></div>
            </>
        )
    }

}

export default LandingPage