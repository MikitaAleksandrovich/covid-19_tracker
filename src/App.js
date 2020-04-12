import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css';

class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data: fetchedData,
        })
    }

    handleCountryChange = async (country) => {
        // fetch data
        const fetchedData = await fetchData(country);

        console.log(fetchedData);
        // set the state
        

    }

    render() {

        const { data } = this.state;

        return(
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker data={data} handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} />
            </div>
        )
    }
};

export default App;