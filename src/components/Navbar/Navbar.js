import React, { useState } from 'react';
import './navbar.css';
import { HiMenu, HiOutlineXCircle } from 'react-icons/hi';
import { useAppContext } from '../../context/context';
const Menu = () => {
  return (
    <>
      <p>
        <a href='/'>Home</a>
      </p>
      <p>
        <a href='/about'>About</a>
      </p>
      <p>
        <a href='#'>Services</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { contactOpen } = useAppContext();
  return (
    <div className='navbar'>
      <div className='content'>
        <div className='logo'>
          <a href='/'>ULSC</a>
        </div>
        <div className='navbar-link-container'>
          <Menu />
        </div>
        <div className='get-started'>
          <button onClick={contactOpen}>Get's Started</button>
        </div>
      </div>
      {toggleMenu && (
        <div className='links scale-in-center'>
          <Menu />
          <div className='lets-talk'>
            <button onClick={contactOpen}>Get's Started</button>
          </div>
        </div>
      )}

      <div className='navbar-menu'>
        {toggleMenu ? (
          <HiOutlineXCircle
            color='#12B7FE'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenu
            color='#12B7FE'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
