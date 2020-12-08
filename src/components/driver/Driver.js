import React, { Component } from 'react'

const axios = require('axios');

export default class Driver extends Component {

    state = {
        races: [],
        racesWon: 0
    }

    componentDidMount() {
        this.setRacesAndRacesWon();
    }

    setRacesAndRacesWon = async () => {
        try {
            const res = await axios({
                method: "GET",
                url: `http://ergast.com/api/f1/2020/drivers/${this.props.driverId}/results.json`,
                headers: {}
            });
            const races = res.data.MRData.RaceTable.Races;
            this.setState({
                races
            });
        } catch (err) {
            console.log(err);
        }
        this.setRacesWon();
    };

    setRacesWon = () => {
        let won = 0;
        this.state.races.forEach(element => {
            if (element.Results[0].position === "1") {
                won = won + 1;
            }
        })
        this.setState({
            racesWon: won
        })
    };


    render() {
        return (
            <div>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <h2>Races Won: {this.state.racesWon}</h2>
            </div>
        )
    }
}
