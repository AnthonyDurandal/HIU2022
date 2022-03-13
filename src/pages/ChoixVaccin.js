import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import DashboardHeader from '../components/header/DashboardHeader';
import './../styles/ChoixVaccin.css'

import clientsidebar from './../data/clientSidebar.json'
import CardVaccin from '../components/listeVaccin/CardVaccin';
const ChoixVaccin = () => {
    const liste = [{ name: "AstraZeneca" }, { name: "AstraZeneca" }, { name: "AstraZeneca" }, { name: "AstraZeneca" }, { name: "AstraZeneca" }]
    return (
        <div className='mainContainer'>
            <Sidebar data={clientsidebar} />
            <DashboardHeader /> {/* top bar */}
               
            <div className='vaccinContent'>
            <div className='titre'>Liste des vaccin disponible</div>
              <div className="liste">
                    {liste.map(function (item, index) {
                        return (
                            <CardVaccin data={item} />
                            )
                        })}
              </div>
            </div>
        </div>
    );
};

export default ChoixVaccin;