import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import DashboardHeader from '../components/header/DashboardHeader';
import './../styles/ChoixVaccin.css'
import './../styles/AdminDashboard.css'
import { listeVaccin } from '../mockupData/dataMed';

import clientsidebar from './../data/clientSidebar.json'
import CardVaccin from '../components/listeVaccin/CardVaccin';
const ChoixVaccin = () => {
    const liste = [{ name: "AstraZeneca" }, { name: "AstraZeneca" }, { name: "AstraZeneca" }, { name: "AstraZeneca" }, { name: "AstraZeneca" }]
    return (
        <div className='admin-dashboard'>
            <Sidebar data={clientsidebar} />
            <DashboardHeader /> {/* top bar */}
               
            <div className='content'>
                <div className='content-child'>
                    <div className="titre">Liste des vaccins disponibles</div>
                    <div className="liste">
                        {listeVaccin.map((vaccin)=>{
                            return (
                                <CardVaccin data={vaccin} />
                            );
                        })}
                    </div>
                </div>
            {/* <div className='titre'>Liste des vaccin disponible</div>
              <div className="liste">
                    {liste.map(function (item, index) {
                        return (
                            <CardVaccin data={item} />
                            )
                        })}
              </div> */}
            </div>
        </div>
    );
};

export default ChoixVaccin;