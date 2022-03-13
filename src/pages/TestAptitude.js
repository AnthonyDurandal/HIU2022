import { useState } from "react";
import { Questionaire } from "../components/questionaire/questionaire";
import Sidebar from "../components/sidebar/Sidebar";
import DashboardHeader from "../components/header/DashboardHeader";
import { Button } from "react-bootstrap";
import clientsidebar from './../data/clientSidebar.json'
// import './../styles/AdminDashboard.css'
import "./../styles/TestAptitude.css";
export const TestAptitude = () => {
  const questionTestPcr =
    "Avez-vous eu un test (PCR ou antigénique) positif au cours des 3 derniers mois ?";
  const [testPcr, setTestPcr] = useState();

  const questionVaccinRencent =
    "Avez-vous reçu un vaccin au cours des 2 dernières semaines ?";
  const listeChoix = ["vaccin1", "vaccin2", "vaccin3"];
  const [vaccinRecent, setVaccinRecent] = useState();

  const questionAllergie =
    "Avez-vous des actécédents d'allergie ou d'hypersensibitlité à centaines substances ou avec d' autres vaccins ?";
  const [allergie, setAllergie] = useState();
  const questionMedicament =
    "Avez-vous été traité par un medicament anticoagulant ?";
  const [medicament, setMedicament] = useState();
  const questionHemostase = "Présentez-vous des troubles de l'hémostase ?";
  const [hemostase, setHemostase] = useState();
  const questionEnceinte = "Êtes-vous enceinte ?";
  const [enceinte, setEnceinte] = useState();
  const questionAllaitement = "Allaitez-vous ?";
  const [allaitement, setAllaitement] = useState();
  return (
    <div className="admin-dashboard">
      <Sidebar data={clientsidebar}/>
      <DashboardHeader />
      <div className="content">
        <div className="formContainer">
          <div className="listeQuestionaire">
            <div className="titre">Test d'aptitude au vaccin</div>
            <Questionaire
              question={questionTestPcr}
              setState={setTestPcr}
              checked={testPcr}
            ></Questionaire>
            <Questionaire
              question={questionVaccinRencent}
              setState={setVaccinRecent}
              checked={vaccinRecent}
              choix={listeChoix}
            ></Questionaire>
            <Questionaire
              question={questionAllergie}
              setState={setAllergie}
              checked={allergie}
              choix={listeChoix}
            ></Questionaire>
            <Questionaire
              question={questionMedicament}
              setState={setMedicament}
              checked={medicament}
            ></Questionaire>
            <Questionaire
              question={questionHemostase}
              setState={setHemostase}
              checked={hemostase}
            ></Questionaire>
            <Questionaire
              question={questionEnceinte}
              setState={setEnceinte}
              checked={enceinte}
            ></Questionaire>
            <Questionaire
              question={questionAllaitement}
              setState={setAllaitement}
              checked={allaitement}
            ></Questionaire>
          </div>
          <div className="actionContainer">
            <Button variant="success" className="validationBut">Valider</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
