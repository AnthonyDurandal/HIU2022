import React, { useState } from 'react';
import './../../styles/CentreElement.css'
import PlanningModal from './PlanningModal';
const CardVaccin = (props) => {
    const [modalOption, setModalOption] = useState({ show: false, idCentre: "" })
    const closeModal = () => {
        setModalOption({ ...modalOption, show: false })
    }
    return (
        <div className='element'>
            <div className="meta">
                <div className="title">
                    <img src="./img/vaccination.png" alt="" width="50" height="50"></img>
                    <div className="nom">Vaccin Nom</div>
                </div>
                <div className="others">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
                    <div className="button" onClick={e => { setModalOption({ ...modalOption, show: true }) }}>Reserver</div>
                </div>
            </div>
            <PlanningModal option={modalOption} closeFunction={closeModal} />
        </div>
    );
};

export default CardVaccin;