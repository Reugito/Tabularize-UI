import React from 'react';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftMenu;
