import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className="navbar shadow-sm bg-gray-800 text-white p-4 flex justify-between items-center w-full"
      onMouseLeave={() => setShowMenu(false)}
    >
      <div className="navbar bg-base-100 shadow-sm w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              onClick={() => setShowMenu(true)}
              className="btn btn-ghost btn-circle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>

            {showMenu && (
              <ul
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            )}
          </div>
        </div>

        <div className="navbar-center">
          <span className="btn btn-ghost text-xl">Remind-Me Diary</span>
        </div>

        <div className="navbar-end flex gap-2">
          <Link to="/search" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </Link>

          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118
                  14.158V11a6.002 6.002 0 00-4-5.659V5a2
                  2 0 10-4 0v.341C7.67 6.165 6 8.388 6
                  11v3.159c0 .538-.214 1.055-.595
                  1.436L4 17h5m6 0v1a3 3 0
                  11-6 0v-1m6 0H9" />
              </svg>
              <span id="badge" className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
