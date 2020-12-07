import React, { Component } from 'react'

const axios = require('axios');

export default class Driver extends Component {

    componentDidMount() {
        const config = {
            method: "GET",
            url: `http://ergast.com/api/f1/2020/drivers/${this.props.driverID}/results.json`,
            headers: {}
        }

        axios(config)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <h2>Races Won:</h2>
                <p></p>
            </div>
        )
    }
}
