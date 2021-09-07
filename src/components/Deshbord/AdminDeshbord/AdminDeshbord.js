import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDeshbord.css';

const AdminDeshbord = () => {
  return (    <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 pt-10 px-4" style={{ height: "100vh" }}>
<ul>
 <Link to="/profile"><li>Profile</li></Link>
 <Link to="/deshbord/addNews"><li>Add news</li></Link>
 <Link to="/deshbord/manageNesw"><li>Manage news</li></Link>
 <Link to="/deshbord/addAdmin"><li>Add Admin</li></Link>
</ul>
  
    </div>
  );
};

export default AdminDeshbord;