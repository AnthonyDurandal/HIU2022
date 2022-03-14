import React, { useState } from 'react';
import './../../styles/CentreElement.css'
import Notification from '../notification/Notification';
import PlanningModal from './PlanningModal';
const CentreElement = ({centre:{id, nom}}) => {
    const [modalOption , setModalOption] = useState({show: false , idCentre :""})
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const closeModal = ()=>{
        setModalOption({...modalOption, show: false })
    }
    const valideFunction= ()=>{
        setModalOption({ ...modalOption, show: false })
        setNotify({
            isOpen: true,
            message: 'demande de vaccination envoyée',
            type: 'success'
        })
        setTimeout(() => {
            window.location.replace("/Sensibilisation")
        }, 1000);
    }
    return (  
        <div className='centreElement'>
            <div className="centreMeta">
               <div className="centreTitle">
                    <img src="http://localhost:3000/img/hopital.png" alt="" width="50" height="50"></img>
                    <div className="centreNom">{nom}</div>
               </div>
                <div className="centreOthers">
                   <p>horraire d'ouverture: 8:00 - 17:00</p>
                   <div className="button" onClick= {e =>{setModalOption({...modalOption , show : true})}}>Reserver</div>
               </div>
            </div>       
            <PlanningModal option={modalOption}  closeFunction= {closeModal} valideFunction = {valideFunction} />
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
        </div>
    );
};

export default CentreElement;