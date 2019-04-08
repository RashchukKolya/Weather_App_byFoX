import React from 'react';
import style from './Card.css';
import imgObj from '../ImageObj/ImageObj';
import PropTypes from 'prop-types';

const Card = ({date, morningTemp, morningPressure, morningHumidity, morningWind, morningWeather, afterTemp, afterPressure, afterHumidity, afterWind, afterWeather, eveningTemp, eveningPressure, eveningHumidity, eveningWind, eveningWeather}) => {
  return (
    <div className={style.main}>
      <h2 className={style.date}>{date}</h2>
      <div className={style.morning}>
        <h3 className={style.title}>Morning</h3>
        <div className={style.leftDiv}>
          <h4 className={style.weather} >{morningWeather.description}</h4>
          <img className={style.img} src={imgObj[morningWeather.icon]} alt=""/>
          <p className={style.temp}>Temp: {Math.round(morningTemp)}°C</p>
        </div>
        <div className={style.rightDiv}>
          <p>P: {(morningPressure/1.33).toFixed(2)} mm Hg</p>
          <p>Humidity: {morningHumidity}%</p>
          <p>Wind: {morningWind}m/s</p>
        </div>
      </div>
      <div className={style.after}>
        <h3 className={style.title}>Noon</h3>
        <div className={style.leftDiv}>
          <h4 className={style.weather} >{afterWeather.description}</h4>
          <img className={style.img} src={imgObj[morningWeather.icon]} alt=""/>
          <p className={style.temp}>Temp: {Math.round(afterTemp)}°C</p>
        </div>
        <div className={style.rightDiv}>
          <p>P: {(afterPressure/1.33).toFixed(2)} mm Hg</p>
          <p>Humidity: {afterHumidity}%</p>
          <p>Wind: {afterWind}m/s</p>
        </div>
      </div>
      <div className={style.evening}>
        <h3 className={style.title}>Evening</h3>
        <div className={style.leftDiv}>
          <h4 className={style.weather} >{eveningWeather.description}</h4>
          <img className={style.img} src={imgObj[morningWeather.icon]} alt=""/>
          <p className={style.temp}>Temp: {Math.round(eveningTemp)}°C</p>
        </div>
        <div className={style.rightDiv}>
          <p>P: {(eveningPressure/1.33).toFixed(2)} mm Hg</p>
          <p>Humidity: {eveningHumidity}%</p>
          <p>Wind: {eveningWind}m/s</p>
        </div>
      </div>
      
    </div>
  );
};

Card.propTypes = {
  date: PropTypes.string.isRequired,
  morningTemp: PropTypes.number.isRequired,
  morningPressure: PropTypes.number.isRequired,
  morningHumidity: PropTypes.number.isRequired,
  morningWind: PropTypes.number.isRequired,
  morningWeather: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
  afterTemp: PropTypes.number.isRequired,
  afterPressure: PropTypes.number.isRequired,
  afterHumidity: PropTypes.number.isRequired,
  afterWind: PropTypes.number.isRequired,
  afterWeather: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
  eveningTemp: PropTypes.number.isRequired,
  eveningPressure: PropTypes.number.isRequired,
  eveningHumidity: PropTypes.number.isRequired,
  eveningWind: PropTypes.number.isRequired,
  eveningWeather: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
}
export default Card;