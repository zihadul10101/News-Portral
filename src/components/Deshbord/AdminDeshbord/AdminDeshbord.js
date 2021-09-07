import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDeshbord.css';
const AdminDeshbord = () => {
    return (
        <div>
             <div className="header"></div>
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
  <label for="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>
  <div id="sidebarMenu">
    <ul className="sidebarMenuInner">
      <li>Jelena Jovanovic <span>Web Developer</span></li>
      <li><Link>Add news</Link></li>
      <li><Link>Manage news</Link></li>
      <li><Link>Add admin</Link></li>
      
    </ul>
  </div>
  <div id='center' className="main center">
    <div className="mainInner">
      <div>PURE CSS SIDEBAR TOGGLE MENU</div>
    </div>
    <div className="mainInner">
      <div>PURE CSS SIDEBAR TOGGLE MENU</div>
    </div>
    <div className="mainInner">
      <div>PURE CSS SIDEBAR TOGGLE MENU</div>
    </div>
  </div>
        </div>
    );
};

export default AdminDeshbord;