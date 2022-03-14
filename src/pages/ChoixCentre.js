import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import DashboardHeader from '../components/header/DashboardHeader';
import Carte from '../components/carte/Carte';
import './../styles/ChoixCentre.css'

import clientsidebar from './../data/clientSidebar.json'
import CentreElement from '../components/choixCentre/CentreElement';
import { useParams } from 'react-router-dom';
import { listeCentreParVaccin } from '../mockupData/dataMed';
const ChoixCentre = () => {
    const liste = [{ name: "nom" }, { name: "nom"}]
    const {id} = useParams('id');
    console.log(id);
    const listeCentre = listeCentreParVaccin(id);
    return (
        <div className='mainContainer'>
            <Sidebar data={clientsidebar} />
            <DashboardHeader /> {/* top bar */}
            <div className='centreContent'>
               <div className='listeCentre'>
                   {
                       listeCentre.map(function(item, index){
                           return(
                               <CentreElement centre={item} key={index} />
                            )
                       })
                   }
               </div>
               <div className='map'>
                   <Carte listeCentre={listeCentre}/>
               </div>
            </div>
        </div>
    );
};

export default ChoixCentre;