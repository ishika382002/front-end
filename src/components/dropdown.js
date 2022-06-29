import React, { useState } from 'react';
import { MenuItems } from './pages/MenuItems';
import { Link } from 'react-router-dom';
import './dropdown.css';
import {MenuItems1} from './pages/MenuItems';


export function Dropdown() {
    const[click,setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
      <>
        <ul 
          onClick={handleClick} 
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
          >
          {MenuItems.map((item,index) => {
              return (
                  <li key={index}>
                  <Link 
                  className={item.cName}
                  to={item.path}
                  onClick={()=>setClick(false)}
                  >
                  {item.title}
                  </Link>
                  </li>
              );
          })}
        </ul>
        </>  
    );
}

export function Dropdown1() {
  const[click,setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul 
        onClick={handleClick} 
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
        {MenuItems1.map((item,index) => {
            return (
                <li key={index}>
                <Link 
                className={item.cName}
                to={item.path}
                onClick={()=>setClick(false)}
                >
                {item.title}
                </Link>
                </li>
            );
        })}
      </ul>
      </>  
  );
}


