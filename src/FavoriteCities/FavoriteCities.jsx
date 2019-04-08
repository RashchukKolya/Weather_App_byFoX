import React from 'react';
import Trash from '../trash.png';
import style from './FavoriteCities.css';
import PropTypes from 'prop-types';

const FavoriteCities = ({favorList, favListWeather, deletLi}) => {
  return (
      <ul className={style.list} style={favorList.length ===0 ?{height: `0px`}: favorList.length*31>217 ? null:{height: `${favorList.length * 31}px`}}>
        {favorList.map(el => 
        <li className={style.item} id={el} key={el} onClick={favListWeather}>{el}
        <img className={style.trash} onClick={deletLi} data-id={el} src={Trash} alt=''/>
        </li>
        )}
      </ul>
  );
};

FavoriteCities.propTypes = {
  favorList: PropTypes.arrayOf(PropTypes.string).isRequired,
  favListWeather: PropTypes.func.isRequired,
  deletLi: PropTypes.func.isRequired,
}
export default FavoriteCities;