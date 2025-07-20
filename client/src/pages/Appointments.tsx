import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Appointments() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/Appointments');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        <li>2025-07-25 - Dr. Green - Cannabis consult</li>
      </ul>
    </div>
  );
}

export default Appointments;
