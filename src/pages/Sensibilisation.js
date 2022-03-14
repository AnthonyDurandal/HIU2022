import React from "react";
import DashboardHeader from '../components/header/DashboardHeader';
import clientsidebar from './../data/clientSidebar.json'
import Sidebar from './../components/sidebar/Sidebar'
import "../styles/ChoixCentre.css";

const Sensibilisation = () =>{
    return(
        <div className='mainContainer'>
        <Sidebar data={clientsidebar} />
        <DashboardHeader />
    <div className='contentCalendar'>
      
    </div>
</div>
    )
}

export default Sensibilisation;