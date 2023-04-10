import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const FTDashboard = () => {
    return (
        <div className='App'>
            <div className='AppGlass'>
                <Sidebar />
                <Outlet /> 
            </div>

        </div>
    );
};

export default FTDashboard;