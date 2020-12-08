import React, { Component } from 'react';
import Driver from '../driver/Driver.js';


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
        this.getDrivers();
    }

    getDrivers = async () => {
        try {
            const res = await axios(config);
            const drivers = res.data.MRData.DriverTable.Drivers;
            this.setState({
                drivers
            });
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <div>
                {this.state.drivers.map(driver =>
                    <Driver
                        firstName={driver.givenName}
                        lastName={driver.familyName}
                        driverId={driver.driverId}
                    />)
                }
            </div>
        )
    }
}