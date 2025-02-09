import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserAlt, FaPlus, FaHome } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link 
          to="/" 
          className="text-2xl font-bold tracking-widest text-cyan-400 hover:text-cyan-300 transition duration-300"
        >
          REDUX-CRUD
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <NavLink 
                to="/" 
                className="flex items-center space-x-2 text-lg text-gray-300 hover:text-cyan-300 transition duration-300"
              >
                <FaHome className="text-xl" />
                <span>Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/users" 
                className="flex items-center space-x-2 text-lg text-gray-300 hover:text-cyan-300 transition duration-300"
              >
                <FaUserAlt className="text-xl" />
                <span>Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/create-user" 
                className="flex items-center space-x-2 text-lg text-gray-300 hover:text-cyan-300 transition duration-300"
              >
                <FaPlus className="text-xl" />
                <span>Create User</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
