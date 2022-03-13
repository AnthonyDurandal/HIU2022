import { useState } from "react";
import { Questionaire } from "../components/questionaire/questionaire";

export const TestAptitude = () => {
  const questionTestPcr =
    "Avez-vous eu un test (PCR ou antigénique) positif au cours des trois derniers mois";
  const [testPcr, setTestPcr] = useState();

  const questionVaccinRencent =
    "Avez-vous reçu un vaccin au cours des deux dernières semaines ?";
    const listeChoix = ['vaccin1', 'vaccin2', 'vaccin3'];
  const [vaccinRecent, setVaccinRecent] = useState();

  const questionAllergie =
    "Avez-vois des actécédents d'allergie ou d'hypersensibitlité à centaines substances ou avec d' autres vaccins";
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
    <div>
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
  );
};
