import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import DashboardHeader from "../components/header/DashboardHeader";
import { Button, Table, Modal } from "react-bootstrap";
import "./../styles/AdminDashboard.css";
import "./HistoriqueVaccin.css";
import { etatStockVaccin } from "../mockupData/historique";

export const EtatStockVaccin = () => {
  const [modalShow, setModalShow] = useState(false);
  const [moyenne, setMoyenne] = useState();
  const [vaccin, setVaccin]  =  useState();
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <DashboardHeader />
      <div className="content">
        <div className="content-child">
          <div className="historique-container">
            <div className="dataContainer">
              <div className="actionBar">
                <h1 className="title">Etat de stock des vaccins</h1>
                <Button
                  variant="primary"
                  className="actionButton"
                  onClick={() => setModalShow(true)}
                >
                  Etat prévisionel
                </Button>
              </div>
              <Modal
                show={modalShow}
                onHide={()=> setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    <div className="statForm">
                    <div className="inputGroup">
                        <label htmlFor="moyenne">Utilisation par semaine</label>
                        <input type={'text'} id="moyenne" value={moyenne} onChange={(event)=>setMoyenne(event.target.value)}/>
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="listeVaccin">Vaccin</label>
                        <select id="listeVaccin" onChange={(event)=> setVaccin(event.target.value)}>
                            <option>{'Vaccin 1'}</option>
                            <option>{'Vaccin 2'}</option>
                            <option>{'Vaccin 3'}</option>
                        </select>
                    </div>
                    </div>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="stat">

                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setModalShow(false)} variant="danger">Close</Button>
                </Modal.Footer>
              </Modal>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th scope="col">Vaccin</th>
                    <th scope="col">Date de peremption</th>
                    <th scope="col">Quantité</th>
                  </tr>
                </thead>
                <tbody>
                  {etatStockVaccin.map((etat) => {
                    return (
                      <tr>
                        <td>{etat.vaccin}</td>
                        <td>{etat.dateDePeremption}</td>
                        <td>{etat.quantite}</td>
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
