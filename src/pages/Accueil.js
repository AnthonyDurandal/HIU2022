import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import './../styles/Accueil.css'

const Accueil = () => {
    return (
        <div className='accueil'>
            <Sidebar/>
            <div className='content'>
                content
            </div>
        </div>
    );
};

export default Accueil;