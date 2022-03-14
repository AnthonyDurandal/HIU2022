import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import DashboardHeader from '../components/header/DashboardHeader';
import './../styles/AdminDashboard.css'
import items from './../data/centreSidebar.json'
import { Table,Button } from 'react-bootstrap';
import { listeRendezVous } from '../mockupData/historique';

export const PointageRDV = ()=>{
    const [counter, setCounter] = useState(0);
    const handleClick = (event, id) => {
        listeRendezVous.splice(listeRendezVous.indexOf(id),1);
        setCounter(counter+1);
    }
    return(
        <div className='admin-dashboard'>
            <Sidebar data={items} />
            <DashboardHeader />
            <div className='content'>
                <div className='content-child'>
                    <div className='historique-container'>
                        <div className='dataContainer'>
                            <h1 className='titre'>Rendez-vous aujourd'hui</h1>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th scope='col'>Nom patient</th>
                                        <th scope='col'>Heure</th>
                                        <th scope='col'>Vaccin</th>
                                        <th scope='col'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listeRendezVous.map((rendezVous, indexRdv)=>{
                                        return (
                                            <tr>
                                                <td>{rendezVous.patient}</td>
                                                <td>{rendezVous.heure}</td>
                                                <td>{rendezVous.vaccin}</td>
                                                <td className='actionCol'>
                                                    <Button variant='success' onClick={(event)=> handleClick(event, indexRdv)}>Valider</Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}