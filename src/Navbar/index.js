import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './styles';

import Gulf from '../assets/icons/Gulf.png'

const Navbar = () => {
  return (
    <>
      <Nav>
      <Bars />
      <NavLink to='/' activeStyle>
      <img src={Gulf} style={{width: 60, height: 60,}} />
      </NavLink>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/' activeStyle>
            Packages
          </NavLink>
          <NavLink to='/register' activeStyle>
            Join as a Supplier
          </NavLink>
          <NavLink to='/about' activeStyle>
            About us
          </NavLink>
          <NavLink to='/register' activeStyle>
            Register
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;