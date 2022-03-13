import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import DashboardHeader from "../components/header/DashboardHeader";
import { Button, Table } from "react-bootstrap";
import { listeHitorique, listeRappel } from "../mockupData/historique";

import "./../styles/AdminDashboard.css";
import "./HistoriqueVaccin.css";
const HistoriqueVaccin = () => {
  const [historique, setHistorique] = useState([]);
  const [rappels, setRappels] = useState([]);
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <DashboardHeader />
      <div className="content">
        <div className="content-child">
          <div className="historique-container">
            <div className="dataContainer">
              <h1 className="title">Historique de vos vaccins</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Centre</th>
                    <th scope="col">Vaccin</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {listeHitorique.map((histo) => {
                    return (
                      <tr>
                        <td>{histo.date}</td>
                        <td>{histo.centre}</td>
                        <td>{histo.vaccin}</td>
                        <td>{histo.description}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
          <div className="historique-container">
            <div className="dataContainer">
              <h1 className="title">Fiche de rappel</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th scope="col">Date de disponibilité</th>
                    <th scope="col">Vaccin</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {listeRappel.map((rappel) => {
                    return (
                      <tr>
                        <td className="textCenter">{rappel.dateDisponible}</td>
                        <td className="textCenter">{rappel.vaccin}</td>
                        <td className="actionCol">
                          <Button variant="info">Faire une demande</Button>
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
};

export default HistoriqueVaccin;
