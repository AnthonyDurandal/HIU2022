import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Login from "./pages/Login";
import './App.css'
import Table from "./pages/Table";
import 'bootstrap/dist/css/bootstrap.min.css';

/* config */
const herokuLink = "https://tatitra-rest-api.herokuapp.com";
const localLink = "http://localhost:8087";
const fakeDataLink = "https://datausa.io"

// const store = Store()
// store.setState("apiLink", fakeDataLink);
export const apiLink = fakeDataLink
export const chartCssDefaultPath = '../../styles/chart/ChartCssDefault.css'
/* config ends */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Accueil" exact="true" element={<Accueil />} />
          <Route path="/about" exact="true" element={<Accueil />} />
          <Route path="/login" exact="true" element={<Login />} />
          <Route path="/register" exact="true" element={<Accueil />} />
          <Route path="/forgot-password" exact="true" element={<Accueil />} />
          <Route path="/reset-password" exact="true" element={<Accueil />} />
          <Route path="/profile" exact="true" element={<Accueil />} />
          <Route path="/settings/account" exact="true" element={<Accueil />} />
          <Route path="/settings/billing/payment" exact="true" element={<Accueil />} />
          <Route path="/settings/billing/subscription" exact="true" element={<Accueil />} />
          <Route path="/settings/notifications" exact="true" element={<Accueil />} />
          <Route path="/logout" exact="true" element={<Accueil />} />
          <Route path="/search" exact="true" element={<Accueil />} />
          <Route path="/history" exact="true" element={<Accueil />} />
          <Route path="/support" exact="true" element={<Accueil />} />
          <Route path="/report-bug" exact="true" element={<Accueil />} />
          <Route path="/Table" exact="true" element={<Table />} />
          <Route path="/" exact="true" element={<Accueil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
