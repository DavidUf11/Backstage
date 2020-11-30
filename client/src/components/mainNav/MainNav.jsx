import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './../Logout';

const MainNav = () => {
  return (
    <nav className="main-nav-1">
      <div className="main-nav-2">
        <div className="main-nav-3">
          <Link to="/" className="main-nav-pro">
            BackStage
          </Link>
          <button className="main-nav-button-1" type="button"></button>
        </div>
        <div className="main-nav-4">
          <ul className="main-nav-ul"></ul>
        </div>
        <div>
          <div className="dropdown inline-block relative">
            <button className="group-hover:bg-gray-dark">
              <img
                className="profile-icon"
                src="../profileIcons/dj-icon.png"
                alt="dj icon"
                style={{ height: '100%' }}
              />
              {/* 
              <svg
                className="main-nav-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
              </svg> */}
            </button>

            <ul className="dropdown-menu absolute hidden text-white bg-gray-dark p-2 rounded">
              <Link to="/login" className="group-hover:bg-gray-dark p-2">
                Login
              </Link>

              <li className="group-hover:bg-gray-dark p-2">
                <Logout>Logout</Logout>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
