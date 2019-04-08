import React, { Component } from 'react';
import Axios from 'axios';
import {Switch, Route} from 'react-router-dom'
import Chart from '../Chart/Chart'
import MapCard from '../mapCard/MapCard';
import moment from'moment';
import PropTypes from 'prop-types';
// import MenuFiveDays from '../MenuFiveDays/MenuFiveDays';




class FiveDays extends Component {

  state = {
    dataChart: {},
    dataFiveDays: {},
    isLoadingFivedays: true,
  }

componentDidMount(){
  this.dataFiveDays();
}
componentDidUpdate(prevProps){
  // console.log('prevprops', prevProps.input);
  // console.log('this props',this.props.input);
  if(prevProps.input !== this.props.input){
  this.dataFiveDays();
  }
}

  dataFiveDays = (event) => {
    if (event !== undefined) { event.preventDefault(); }
    const input = this.props.input;

   Axios.get(`https://api.openweathermap.org/data/2.5/forecast?&APPID=fb3757a2d30c94cbe235dd02fdb9710a&q=${input || 'Kiev'}&units=metric`)
      // .then(response => console.log(response.data.list))
      .then(response => response.data.list)
      .then(list => {

        let daysEnd = moment().endOf('day').unix();
        let currentList = list.filter(el => el.dt > daysEnd)
        // console.log(currentList);
        
        let morningTemp = currentList.filter(el => el.dt_txt.includes('06:00:00')).map(el => el.main.temp);
        let morningWeather = currentList.filter(el => el.dt_txt.includes('06:00:00')).map(el => el.weather[0]);
        let morningHumidity = currentList.filter(el => el.dt_txt.includes('06:00:00')).map(el => el.main.humidity);
        let morningPressure = currentList.filter(el => el.dt_txt.includes('06:00:00')).map(el => el.main.pressure);
        let morningWind = currentList.filter(el => el.dt_txt.includes('06:00:00')).map(el => el.wind.speed);

        let afterTemp = currentList.filter(el => el.dt_txt.includes('15:00:00')).map(el => el.main.temp);
        let afterWeather = currentList.filter(el => el.dt_txt.includes('15:00:00')).map(el => el.weather[0]);
        let afterHumidity = currentList.filter(el => el.dt_txt.includes('15:00:00')).map(el => el.main.humidity);
        let afterPressure = currentList.filter(el => el.dt_txt.includes('15:00:00')).map(el => el.main.pressure);
        let afterWind = currentList.filter(el => el.dt_txt.includes('15:00:00')).map(el => el.wind.speed);

        let eveningTemp = currentList.filter(el => el.dt_txt.includes('21:00:00')).map(el => el.main.temp);
        let eveningWeather = currentList.filter(el => el.dt_txt.includes('21:00:00')).map(el => el.weather[0]);
        let eveningHumidity = currentList.filter(el => el.dt_txt.includes('21:00:00')).map(el => el.main.humidity);
        let eveningPressure = currentList.filter(el => el.dt_txt.includes('21:00:00')).map(el => el.main.pressure);
        let eveningWind = currentList.filter(el => el.dt_txt.includes('21:00:00')).map(el => el.wind.speed);
        let date = currentList.filter(el => el.dt_txt.includes('21:00:00')).map(el => moment.unix(el.dt).format("MMMM Do YYYY"));
        
        let allWeatherArr = [];
        let chartData = [];
        chartData.push(date, morningTemp, afterTemp, eveningTemp)
        // console.log(chartData);
        allWeatherArr.push(morningTemp, morningWeather, morningHumidity,morningPressure, morningWind, afterTemp, afterWeather, afterHumidity, afterPressure, afterWind, eveningTemp, eveningWeather, eveningHumidity, eveningPressure, eveningWind, date);
        console.log(allWeatherArr);
      
        let cardArr = [];
        for (let i = 0; i < 4; i++) {
          let obj={}
          allWeatherArr.map((el,idx) => {
            switch (idx) {
              case 0:
                obj.morningTemp = el[i];
                break;
                case 1:
                obj.morningWeather = el[i];
                break;
                case 2:
                obj.morningHumidity = el[i];
                break;
                case 3:
                obj.morningPressure = el[i];
                break;
                case 4:
                obj.morningWind = el[i];
                break;
                case 5:
                obj.afterTemp = el[i];
                break;
                case 6:
                obj.afterWeather = el[i];
                break;
                case 7:
                obj.afterHumidity = el[i];
                break;
                case 8:
                obj.afterPressure = el[i];
                break;
                case 9:
                obj.afterWind = el[i];
                break;
                case 10:
                obj.eveningTemp = el[i];
                break;
                case 11:
                obj.eveningWeather = el[i];
                break;
                case 12:
                obj.eveningHumidity = el[i];
                break;
                case 13:
                obj.eveningPressure = el[i];
                break;
                case 14:
                obj.eveningWind = el[i];
                break;
                case 15:
                obj.date = el[i];
                cardArr.push(obj);
                break;
                default: break;
            }
          })
        }
        // console.log(cardArr);
        this.setState({
          dataFiveDays: cardArr,
          isLoadingFivedays: false,
          dataChart: chartData,
        })
      })
      .catch(function (error) {
        console.log(error);
      }
      )
    }
  render() {

    const {dataFiveDays, isLoadingFivedays, dataChart} = this.state;
    // console.log(dataFiveDays);
    return (
      <div>
      {/* <MenuFiveDays/> */}
      <Switch>  
        <Route exact path="/Weather_App_byFoX/MoreDays" render={() =><MapCard dataFiveDays={dataFiveDays} isLoadingFivedays={isLoadingFivedays}/>}/>
        <Route path="/Weather_App_byFoX/MoreDays/Chart" render={() =><Chart dataChart={dataChart}/>}/>
        
      </Switch>
      </div>
      );
  }
}

FiveDays.propTypes = {
  input: PropTypes.string.isRequired,
}
export default FiveDays;