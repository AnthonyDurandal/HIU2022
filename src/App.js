import logo from './logo.svg';
import './App.css';
import Test from './testing/Test';
import { Store } from "state-pool";

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
      <Test />
    </div>
  );
}

export default App;
