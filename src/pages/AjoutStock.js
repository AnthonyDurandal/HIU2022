import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import DashboardHeader from '../components/header/DashboardHeader';
import './../styles/AdminDashboard.css'
import './AjoutStock.css';
import { Button } from "react-bootstrap"
import fetchData from '../publicFunctions/publicFunctions';

const AjoutStock = () => { 
    const [listeVaccin, setListeVaccin] = useState(['Vaccin 1', 'Vaccin 2', 'Vaccin 3'])
    const [quantite, setQuantite] = useState(0);
    const [vaccin, setVaccin] = useState(-1);
    const [datePeremption, setDatePeremption] = useState();
    const handleSelectValueChange = (event)=>{
        setVaccin(event.target.value);
    }

    const ajoutStock= () =>{
        fetchData({
            restUrl: '/api/vaccins',
            method: 'POST',
            tokenName: '',
            requestBody: {
                quantite: quantite,
                vaccin: vaccin,
                datePeremption: datePeremption
            },
        });
    }
    return (
        <div className='admin-dashboard'>
            <Sidebar />
            <DashboardHeader />
            <div className='content'>
                <div className='content-child'>
                    <div className='formulaire-ajout-stock'>
                        <div className='form'>
                            <div className='inputGroup'>
                                <h1>Ajout stock vaccin</h1>
                            </div>
                            <div className='inputGroup'>
                                <label className="inputLabel" htmlFor="quantite">Quantite</label>
                                <input value={quantite} type={'number'} id={"quantite"}  onChange={(event) => setQuantite(event.target.value)}></input>
                            </div>
                            <div className='inputGroup'>
                                <label className="inputLabel" htmlFor="vaccin">Nom du vaccin</label>
                                <select defaultValue="" id={"vaccin"}  onChange={(evt) =>handleSelectValueChange(evt)}>
                                    <option value={-1}></option>
                                    {listeVaccin.map((vaccin, index)=> <option key={index} value={index}>{vaccin}</option>)}
                                </select>
                            </div>
                            <div className='inputGroup'>
                                <label className="inputLabel" htmlFor="datePeremption">Date de peremption</label>
                                <input value={datePeremption} type='date' id={"datePeremption"}  onChange={(event) => setDatePeremption(event.target.value)}></input>
                            </div>
                            
                                <Button className='button' variant="primary" onClick={()=> console.log("this button is clicked")}>Enregistrer</Button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AjoutStock;