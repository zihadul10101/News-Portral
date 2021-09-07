import React from 'react';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddNews from '../AdminDeshbord/AddNews/AddNews';
import AdminDeshbord from '../AdminDeshbord/AdminDeshbord';
import UserDeshbord from '../UserDeshbord/UserDeshbord';

const Deshbord = () => {
    return (
        <div>
            <AdminDeshbord></AdminDeshbord>
            <UserDeshbord></UserDeshbord>
            <AddNews />
            <AddAdmin></AddAdmin>
        </div>
    );
};

export default Deshbord;