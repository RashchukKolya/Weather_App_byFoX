import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Menu.css';
import MenuFiveDays from '../MenuFiveDays/MenuFiveDays';

const Menu = () => {
  return (
    <div>
      <ul className={style.list}>
        <li >
          <NavLink className={style.item} to='/Weather_App_byFoX/'>One Day</NavLink> 
        </li>
        <li>
          <NavLink className={style.item} to='/Weather_App_byFoX/MoreDays'>More Days</NavLink> 
        </li>
        <MenuFiveDays/>
      </ul>
    </div>
  );
};

export default Menu;