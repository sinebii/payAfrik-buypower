import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import BuyElectricity from './pages/buyelectricity/BuyElectricity';
import BuyAirtimeData from './pages/buyairtimedata/BuyAirtimeData';
import Buyreg from './pages/buyreg/Buyreg';
import CableTvSubscription from './pages/cabletv/CableTvSubscription';
import Registration from './pages/registration/Registration';

function App() {
  return (
    <div className="App">
      {/* <Dashboard/> */}
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/dashboard/buyelectricity' element={<BuyElectricity/>}/>
        <Route path='/buyairtimedata' element={<BuyAirtimeData/>}/>
        <Route path='/cablesubcription' element={<CableTvSubscription/>}/>
        <Route path='/rwandaelectricity' element={<Buyreg/>}/>
      </Routes>
    </div>
  );
}

export default App;
