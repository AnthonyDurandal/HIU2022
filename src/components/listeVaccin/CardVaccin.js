import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./../../styles/CardVaccin.css";
const CardVaccin = ({ data: { id, nom, description } }) => {
  return (
    <div className="cardVaccin">
      <div className="meta">
        <div className="title">
          <img src="./../img/vaccination.png" alt="" width="60" height="60"></img>
          <div className="nom">{nom}</div>
        </div>
        <div className="others">
          <p>{description}</p>
          <Button
            variant="success"
            onClick={(e) => {
              window.location.replace(`/ChoixCentre/${id}`);
            }}
          >
            Choisir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardVaccin;
