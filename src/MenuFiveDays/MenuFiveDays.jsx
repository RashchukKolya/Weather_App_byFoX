import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './MenuFiveDays.css'

const MenuFiveDays = () => {
  return (
       <ul className={style.list}>
        <li>
          <NavLink className={style.item} to='/Weather_App_byFoX/MoreDays/Chart'>Chart</NavLink> 
        </li>
        <li >
          <NavLink to='Weather_App_byFoX/MoreDays'></NavLink> 
        </li>
      </ul>
  );
};

export default MenuFiveDays;