import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './../../styles/CardVaccin.css'
const CardVaccin = (props) => {
    const [modalOption, setModalOption] = useState({ show: false, idCentre: "" })
    const closeModal = () => {
        setModalOption({ ...modalOption, show: false })
    }
    return (
        <div className='cardVaccin'>
            <div className="meta">
                <div className="title">
                    <img src="./img/vaccination.png" alt="" width="60" height="60"></img>
                    <div className="nom">{props.data.name}</div>
                </div>
                <div className="others">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam.</p>
                    <Button variant="outline-info">Voir info</Button><br></br><br></br>
                    <Button variant="success">Choisir</Button>
                </div>
            </div>
        </div>
    );
};

export default CardVaccin;