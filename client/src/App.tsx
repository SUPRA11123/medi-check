import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Appointments from './pages/Appointments';
import Prescriptions from './pages/Prescriptions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
