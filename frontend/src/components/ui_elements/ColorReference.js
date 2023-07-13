import React from "react"

class ColorReference extends React.Component {

    render() {
        return(
        <div class="flex flex-col">
            <div class="flex flex-row">
                <div class="box-border h-32 w-32 p-4 bg-primary"></div>
                <div class="box-border h-32 w-32 p-4 bg-secondary"></div>
                <div class="box-border h-32 w-32 p-4 bg-accent"></div>
            </div>
            <div class="flex flex-row">
                <div class="box-border h-32 w-32 p-4 bg-neutral"></div>
                <div class="box-border h-32 w-32 p-4 bg-base-100"></div>
                <div class="box-border h-32 w-32 p-4 bg-info"></div>
            </div>
            <div class="flex flex-row">
                <div class="box-border h-32 w-32 p-4 bg-success"></div>
                <div class="box-border h-32 w-32 p-4 bg-warning"></div>
                <div class="box-border h-32 w-32 p-4 bg-error"></div>
            </div>
        </div>
    )}
}

export default ColorReference