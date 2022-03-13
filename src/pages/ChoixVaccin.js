import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import DashboardHeader from '../components/header/DashboardHeader';
import Carte from '../components/carte/Carte';
import './../styles/ChoixCentre.css'

import items from './../data/sidebar.json'
import clientsidebar from './../data/clientSidebar.json'
import CentreElement from '../components/choixCentre/CentreElement';
const ChoixVaccin = () => {
    const liste = [{ name: "nom" }, { name: "nom" }]
    return (
        <div className='admin-dashboard'>
            <Sidebar data={clientsidebar} />
            <DashboardHeader /> {/* top bar */}
            <div className='content'>
               { liste.map(function (item , index) {
                   return(<></>)
               })}
            </div>
        </div>
    );
};

export default ChoixVaccin;