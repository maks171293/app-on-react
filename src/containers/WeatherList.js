import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);
    const humiditys = cityData.list.map((weather) => weather.main.humidity);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const {lon, lat} = cityData.city.coord;
    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color='red' units="C" /></td>
        <td><Chart data={pressures} color='green' units="hPa" /></td>
        <td><Chart data={humiditys} color='blue' units="%" /></td>
      </tr>
    );
  }
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Город</th>
            <th>Температура (C)</th>
            <th>Давление (hPa)</th>
            <th>Облачность (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
};

function mapStateToProps({weather}){
  return {weather}
};

export default connect(mapStateToProps)(WeatherList);
