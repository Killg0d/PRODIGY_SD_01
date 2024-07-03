import logo from './logo.svg';
import './App.css';
import { TemperatureConverter } from './Temperature.js';
function App() {
  
    const centerDivStyle = {
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh'
    };
    return <div class="App" style={centerDivStyle}><TemperatureConverter /></div>;
  
}

export default App;
