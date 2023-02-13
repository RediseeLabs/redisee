import React from "react";
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <div>
    
      <a>MenuBar</a>
      <li><Link to="/BasicActivities">Activities</Link></li>
      <li><Link to="/Errors">Errors</Link></li>
      <li><Link to="/Memory">Memory</Link></li>
      <li><Link to="/Performance">Performance</Link></li>
      <li><Link to="/Persistence">Persistence</Link></li>
    </div>
  );
};

export default MenuBar;