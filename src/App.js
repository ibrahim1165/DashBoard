import './App.css';
import Nabvar from './pages/Shared/Nabvar';
import DashBoard from './DashBoard';
import { Routes, Route,Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Config from './pages/Config/Config';
import Department from './pages/Department/Department';
import { useContext, useState } from 'react';
function App() {
  const [dark, setDark] = useState(false);
  return (
    <div >
    <Nabvar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/config" element={<Config />}>
      <Route path="/config/department" element={<Department />}></Route> 
        </Route>
    </Routes>
    </div>
  );
}

export default App;
