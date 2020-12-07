import React, { Component } from 'react';
import Driver from '../driver/Driver';

const axios = require('axios');


const config = {
    method: 'get',
    url: 'http://ergast.com/api/f1/2020/drivers.json',
    headers: {}
};

export default class DriverList extends Component {

    state = {
        drivers: []
    }

    componentDidMount() {
        axios(config)
            .then(res => {
                console.log(res.data.MRData.DriverTable.Drivers)
                this.setState({
                    drivers: res.data.MRData.DriverTable.Drivers
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            <div>
                {this.state.drivers.map(driver =>
                    <Driver
                        firstName={driver.giveName}
                        lastName={driver.familyName}
                        driverID={driver.driverId}
                    />)}
            </div>
        )
    }
}
