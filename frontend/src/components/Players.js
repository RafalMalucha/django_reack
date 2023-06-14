import axios from 'axios';
import React from 'react';

class Players extends React.Component {

    state = { details: [], }

    componentDidMount() {
        let data;
        axios.get('http://localhost:8000').then(response => {
            data = response.data;
            this.setState({
                details: data
            });
        })
        .catch(err => {"error"})
    }

    render() {
        return(
            <div>
                <header> got yarr data </header>
                {this.state.details.map((output, id) => (
                    <div key={id}>
                        <div class="container bg-neutral">
                            <h2 class="text-xl font-bold text-primary">Player: {output.player}</h2>
                            <h3 class="font-bold text-primary">Role:  {output.role}</h3>
                            <h4 class="font-bold text-primary">Team: {output.team}</h4>
                        </div>
                        <br></br>
                    </div>
                ))}
            </div>
        )
    }
}

export default Players;