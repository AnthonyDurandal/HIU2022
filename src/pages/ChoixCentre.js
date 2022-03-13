import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import DashboardHeader from '../components/header/DashboardHeader';
import Carte from '../components/carte/Carte';
import './../styles/ChoixCentre.css'

import items from './../data/sidebar.json'
import clientsidebar from './../data/clientSidebar.json'
import CentreElement from '../components/choixCentre/CentreElement';
const ChoixCentre = () => {
    const liste = [{ name: "nom" }, { name: "nom"}]
    return (
        <div className='admin-dashboard'>
            <Sidebar data={clientsidebar} />
            <DashboardHeader /> {/* top bar */}
            <div className='content'>
               <div className='liste'>
                   {
                       liste.map(function(item, index){
                           return(
                               <CentreElement data={item} key={index} />
                            )
                       })
                   }
               </div>
               <div className='map'>
                   <Carte />
               </div>
            </div>
        </div>
    );
};

export default ChoixCentre;