import React, { useState } from 'react';
import './../../styles/CentreElement.css'
import PlanningModal from './PlanningModal';
const CentreElement = (props) => {
    const [modalOption , setModalOption] = useState({show: false , idCentre :""})
    const closeModal = ()=>{
        setModalOption({...modalOption, show: false })
    }
    return (  
        <div className='centreElement'>
            <div className="centreMeta">
               <div className="centreTitle">
                    <img src="./img/hopital.png" alt="" width="50" height="50"></img>
                    <div className="centreNom">CHJU Befelatanana</div>
               </div>
                <div className="centreOthers">
                   <p>horraire d'ouverture: 8:00 - 17:00</p>
                   <div className="button" onClick= {e =>{setModalOption({...modalOption , show : true})}}>Reserver</div>
               </div>
            </div>       
            <PlanningModal option={modalOption}  closeFunction= {closeModal} />
        </div>
    );
};

export default CentreElement;