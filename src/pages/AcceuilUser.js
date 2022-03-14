import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import DashboardHeader from "../components/header/DashboardHeader";
import "./../styles/AdminDashboard.css";
import clientsidebar from "./../data/clientSidebar.json";
import "./HistoriqueVaccin.css";
export const AccueilUser = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar data={clientsidebar} />
      <DashboardHeader />
      <div className="content">
        <div className="content-child">
          <div>
            <h1 className="title">Bonjour, merci de vous être connecter sur ce site</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
