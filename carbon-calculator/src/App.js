import logo from './logo.svg';
import StateList from './components/stateemissionsmwh';
import './App.css';
import FootprintCalculator from './components/footprint-calculator';
function App() {
  return (
    <div className="App">
      <FootprintCalculator/>
      <StateList/>
    </div>
  );
}

export default App;
