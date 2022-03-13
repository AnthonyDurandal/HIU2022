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

export const chartCssDefaultPath = '../../styles/chart/ChartCssDefault.css'
/* config ends */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Accueil" exact="true" element={<Accueil />} />
          <Route path="/login" exact="true" element={<Login />} />
          <Route path="/inscription" exact="true" element={<Inscription />} />
         
          <Route path="/logout" exact="true" element={<Accueil />} />
        
          <Route path="/" exact="true" element={<Accueil />} />
          <Route path="/choixCentre" exact="true" element={<ChoixCentre />} />
          <Route path="/ChoixVaccin" exact="true" element={<ChoixVaccin />} />
          <Route path="/Planning" exact="true" element={<Planning />} />
          <Route path="/Sensibilisation" exact="true" element={<Sensibilisation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
