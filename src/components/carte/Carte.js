import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
// import Signalement from './Signalement';
// import FicheSignalement from './FicheSignalement';
import "./../../styles/Carte.css";
import "./../../styles/CentreElement.css";

const Carte = ({ listeCentre }) => {
  return (
    <div className="Carte">
      <MapContainer
        center={[-18.986025, 47.533453]}
        zoom={12}
        scrollWheelZoom={true}
        zoomControl={false}
        onClick={(e) => {
          console.log(e);
          document.getElementsByClassName("FicheSignalement")[0].style.display =
            "none";
          e.target.closePopup();
        }}
      >
        <TileLayer
          attribution=""
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        {listeCentre.map((centre, id) => {
          return (
            <Marker key={id} position={[centre.lat, centre.long]}>
              <Popup>
                <div className="centreSomething">
                  <div className="divCenter">
                    <div className="centeredImage">
                      <img
                        src="http://localhost:3000/img/hopital.png"
                        alt=""
                        width="50"
                        height="50"
                      ></img>
                    </div>
                    <div className="centredNom">
                      <h5>{centre.nom}</h5>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
        {/* <Signalement /> */}
      </MapContainer>
      {/* <FicheSignalement /> */}
    </div>
  );
};

export default Carte;
