import './App.css';
import Nabvar from './pages/Shared/Nabvar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Config from './pages/Config/Config';
import Department from './pages/Department/Department';
function App() {
  return (
    <div>
    <Nabvar>
    </Nabvar>
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
