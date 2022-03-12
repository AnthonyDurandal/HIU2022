import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import DashboardHeader from '../components/header/DashboardHeader';
import './../styles/AdminDashboard.css'

const Accueil = () => {
    return (
        <div className='admin-dashboard'>
            <Sidebar />
            <DashboardHeader />
            <div className='content'>
                <div className='stat-content'>
                    <div className='stat-1'>
                        
                    </div>
                    <div className='stat-2'>
                        
                    </div>
                    <div className='stat-3'>
                         
                    </div>
                    <div className='stat-4'>
                        
                    </div>
                    <div className='stat-5'>
                        
                    </div>
                    <div className='stat-6'>
                        
                    </div>
                    <div className='stat-7'>
                        
                    </div>
                    <div className='stat-8'>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;