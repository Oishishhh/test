import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Top from './components/Top';
import End from './components/End';
import { CiDesktopMouse2 } from "react-icons/ci";

function App() {
  return (
    <div className="App">
      <div className='All'>
      <Top/>
      <Header/>
      <Navbar/>
      <div className='circle'>
      <CiDesktopMouse2 className='fon'/>
      </div>
      <End/>
      </div>
    </div>
  );
}

export default App;
