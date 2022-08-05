import './App.css';
import Nabvar from './pages/Shared/Nabvar';
import DashBoard from './DashBoard';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Config from './pages/Config/Config';

function App() {
  return (
    <div>
    <Nabvar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/config" element={<Config />}>  
        </Route>
    </Routes>
    </div>
  );
}

export default App;
