import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import DashboardHeader from '../components/header/DashboardHeader';
import './../styles/AdminDashboard.css'

const AjoutStock = () => { 
    return (
        <div className='admin-dashboard'>
            <Sidebar />
            <DashboardHeader />
            <div className='content'>
                <div className='content-child'>
                    <div className='formulaire-ajout-stock'>
                        <div className='form'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AjoutStock;