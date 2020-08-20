import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css'
import {fetchData, fetchDate} from './api/index.js';




class App extends React.Component {

  state = {
    data: {},
    country:'',
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

   
    this.setState({ data:fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData)

    this.setState({data:fetchedData, country:country})

    
  }

  render() {

    const { data, country} = this.state;

    return (
      <div className="App">
        <Cards data={data}></Cards>
        <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
        <Chart data={data} country={country}></Chart>
      </div>
    );
  }
}

export default App;
