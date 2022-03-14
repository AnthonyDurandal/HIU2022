import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import './App.css'
import Test from "./testing/Test";
import Table from "./pages/Table";
import ChoixCentre from "./pages/ChoixCentre";
import ChoixVaccin from "./pages/ChoixVaccin";
import Planning from "./pages/Planning";
import Sensibilisation from "./pages/Sensibilisation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TestAptitude } from "./pages/TestAptitude";
import {herokuLink , localLink, fakeDataLink} from './config/Config';
import AjoutStock from "./pages/AjoutStock";
import HistoriqueVaccin from "./pages/HistoriqueVaccin";
/* config */
const onlineLink = herokuLink;
const lienLocal = localLink;
// const akeDataLink = fakeDataLink

export const chartCssDefaultPath = '../../styles/chart/ChartCssDefault.css'
/* config ends */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/HistoriqueVaccin" exact="true" element={<HistoriqueVaccin />}/>
          <Route path="/AjoutStock" exact="true" element={<AjoutStock />}/>
          <Route path="/TestAptitude" exact="true" element={<TestAptitude />} />
          <Route path="/Accueil" exact="true" element={<Accueil />} />
          <Route path="/about" exact="true" element={<Accueil />} />
          <Route path="/login" exact="true" element={<Login />} />
          <Route path="/inscription" exact="true" element={<Inscription />} />
         
          <Route path="/centre/accueil" exact="true" element={<Accueil />} />
          <Route path="/centre/ajoutStock" exact="true" element={<Accueil />} />
          <Route path="/centre/reportVaccination" exact="true" element={<Accueil />} />
          
          <Route path="/logout" exact="true" element={<Accueil />} />
          <Route path="/TestAptitude" exact="true" element={<TestAptitude />} />
          <Route path="/Historique" exact="true" element={<HistoriqueVaccin />} />
        
          <Route path="/" exact="true" element={<Accueil />} />
          <Route path="/choixCentre" exact="true" element={<ChoixCentre />} />
          <Route path="/ChoixVaccin" exact="true" element={<ChoixVaccin />} />
          <Route path="/Planning" exact="true" element={<Planning />} />
          <Route path="/Table" exact="true" element={<Table />} />
          <Route path="/Sensibilisation" exact="true" element={<Sensibilisation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
