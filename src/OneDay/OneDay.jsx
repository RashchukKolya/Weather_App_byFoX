import React from 'react';
import moment from'moment';
import style from './OneDay.css'
import imgObj from '../ImageObj/ImageObj'
import Map from '../Map/Map';
import PropTypes from 'prop-types';

const OneDay = ({temp, data, markerClick, pressure, humidity, temp_min, temp_max, sunrise, sunset, wind}) => {
  // console.log(data);
  return (
    <div className={style.wrapper}>
    <div className={style.main}>
      <div className={style.weather}>
        <p className={style.name}>{data.weather[0].main}</p>
        <img className={style.img} src={imgObj[data.weather[0].icon]} alt=""/>
        <p className={style.temp}>Temp: {Math.round(temp)}°</p>
      </div>
      <div className={style.weather_det}>
        <p>P: {(pressure/1.33).toFixed(2)} mm Hg</p>
        <p>Humidity: {humidity}%</p>
        <p>Min °C: {temp_min}°</p>
        <p>Max °C: {temp_max}°</p>
        <p>Sunrise: {moment.unix(sunrise).format("HH:mm")} L.t.</p>
        <p>Sunset: {moment.unix(sunset).format("HH:mm")} L.t.</p>
        <p>Wind: {wind} m/s</p>
      </div>
      
    </div>
      <div className={style.map}>
        <Map coord={data.coord} markerClick={markerClick}/>
      </div>
    </div>
  );
};

OneDay.propTypes = {
  temp: PropTypes.number.isRequired,
  data:PropTypes.shape({
    coord: PropTypes.shape({lon: PropTypes.number.isRequired, lat:PropTypes.number.isRequired}).isRequired,
    weather: PropTypes.arrayOf(PropTypes.shape({
      main: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  )}),
  markerClick: PropTypes.func.isRequired,
  pressure: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired,
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
}

export default OneDay;