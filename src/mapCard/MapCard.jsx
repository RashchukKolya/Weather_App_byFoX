import React from 'react';
import Card from '../Card/Card';
import Loader from 'react-loader-spinner';
import style from './MapChart.css'

const mapCard = ({dataFiveDays, isLoadingFivedays}) => {
  return (
    <div>
       {isLoadingFivedays ?  <div className={style.loader}><Loader type="Puff" color="#fff" height="100" width="100"/><p className={style.loaderText}>Loading...</p></div> :
      <div className={style.wrapper}>{dataFiveDays.map(el => <Card key={el.date} date={el.date} morningTemp={el.morningTemp} morningPressure={el.morningPressure} morningHumidity={el.morningHumidity} morningWind={el.morningWind} morningWeather={el.morningWeather} afterTemp={el.afterTemp} afterPressure={el.afterPressure} afterHumidity={el.afterHumidity} afterWind={el.afterWind} afterWeather={el.afterWeather} eveningTemp={el.eveningTemp} eveningPressure={el.eveningPressure} eveningHumidity={el.eveningHumidity} eveningWind={el.eveningWind} eveningWeather={el.eveningWeather}/>)}
      </div>}
    </div>
  );
};

export default mapCard;