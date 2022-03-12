import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Table from "./pages/Table";
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Accueil" exact="true" element={<Accueil />} />
          <Route path="/Table" exact="true" element={<Table />} />
          <Route path="/" exact="true" element={<Accueil />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
