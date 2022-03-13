import React from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
// import Signalement from './Signalement';
// import FicheSignalement from './FicheSignalement';
import './../../styles/Carte.css';

const Carte = () => {
    return (
        <div className="Carte">
            <MapContainer
                center={[-18.986025, 47.533453]}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={false}
                onClick={(e) => {
                    console.log(e);
                    document.getElementsByClassName("FicheSignalement")[0].style.display = 'none';
                    e.target.closePopup();
                }}
            >
                <TileLayer
                    attribution=''
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                />
                <ZoomControl position="bottomright" />
                {/* <Signalement /> */}
            </MapContainer>
            {/* <FicheSignalement /> */}
        </div>
    );
};

export default Carte;