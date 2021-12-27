import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { FaBars } from 'react-icons/fa';
import profile_pic from '../../assets/profile_pic.jpeg';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={profile_pic} alt="" />
      <FaBars className="fabars" />
      <div className="navbar_menu">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/about" activeClassName="active">
          About me
        </NavLink>
        <NavLink exact to="/experience" activeClassName="active">
          Work experience
        </NavLink>
      </div>
      <div className="navbar_btn">
        <div className="navbar_btn_link">
          <NavLink exact to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
