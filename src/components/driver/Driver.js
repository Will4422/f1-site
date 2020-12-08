import React, { Component } from 'react'

import aitken from '../driverList/headshots/aitken.png';
import albon from '../driverList/headshots/albon.png';
import bottas from '../driverList/headshots/bottas.png';
import gasly from '../driverList/headshots/gasly.png';
import giovinazzi from '../driverList/headshots/giovinazzi.png';
import grosjean from '../driverList/headshots/grosjean.png';
import hamilton from '../driverList/headshots/hamilton.png';
import hulkenberg from '../driverList/headshots/hulkenberg.png';
import kevin_magnussen from '../driverList/headshots/kevin_magnussen.png';
import kvyat from '../driverList/headshots/kvyat.png';
import latifi from '../driverList/headshots/latifi.png';
import leclerc from '../driverList/headshots/leclerc.png';
import max_verstappen from '../driverList/headshots/max_verstappen.png';
import norris from '../driverList/headshots/norris.png';
import ocon from '../driverList/headshots/ocon.png';
import perez from '../driverList/headshots/perez.png';
import pietro_fittipaldi from '../driverList/headshots/pietro_fittipaldi.png';
import raikkonen from '../driverList/headshots/raikkonen.png';
import ricciardo from '../driverList/headshots/ricciardo.png';
import russell from '../driverList/headshots/russell.png';
import sainz from '../driverList/headshots/sainz.png';
import stroll from '../driverList/headshots/stroll.png';
import vettel from '../driverList/headshots/vettel.png';

const images = {
    aitken: aitken,
    albon: albon,
    bottas: bottas,
    gasly: gasly,
    giovinazzi: giovinazzi,
    grosjean: grosjean,
    hamilton: hamilton,
    hulkenberg: hulkenberg,
    kevin_magnussen: kevin_magnussen,
    kvyat: kvyat,
    latifi: latifi,
    leclerc: leclerc,
    max_verstappen: max_verstappen,
    norris: norris,
    ocon: ocon,
    perez: perez,
    pietro_fittipaldi: pietro_fittipaldi,
    raikkonen: raikkonen,
    ricciardo: ricciardo,
    russell: russell,
    sainz: sainz,
    stroll: stroll,
    vettel: vettel
}

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
                <img src={images[this.props.driverId]} alt="Driver Headshot" />
            </div>
        )
    }
}
