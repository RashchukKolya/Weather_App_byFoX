import React from 'react';
import Star from '../star.png';
import Star2 from '../star2.png';
import style from './Header.css';
import Geo from '../geo.png';
import PropTypes from 'prop-types'



const Header = ({changeInput, getData, errorStatus, date, location, city, favorListCity, time, favorList, input}) => {
  
  return (
    <header className={style.header}>
      <div className={style.geo}>
        <img src={Geo} alt=""/>
        <div>
          <p className={style.city}>{city},{location}</p>
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </div>
      <form className={style.form} onSubmit={getData}>
        <input className={style.input} onChange={changeInput} placeholder='Enter city name:' type="text" name='input'/>
        <img className={style.star} src={favorList.includes(city.toLowerCase()) || favorList.includes(input.toLowerCase()) ? Star2 : Star} alt="" onClick={favorListCity} title={favorList.includes(city.toLowerCase()) || favorList.includes(input.toLowerCase())?'Added to favorite list':'Add to favorite list'}/>
      {errorStatus && <p className={style.error}>oppps...please check the city</p>}
      </form>
    </header>
  );
};

Header.propTypes = {
  changeInput: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  favorListCity: PropTypes.func.isRequired,
  errorStatus: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  favorList: PropTypes.arrayOf(PropTypes.string).isRequired,
  input: PropTypes.string.isRequired,
}
export default Header;