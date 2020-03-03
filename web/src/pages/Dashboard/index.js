import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const responce = await api.get('/dashboard', {
        headers: { user_id },
      });

      setSpots(responce.data);
    }

    loadSpots();
  }, []);
  return (
    <>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}></header>
            <strong>{spot.nome}</strong>
            <span>{spot.company ? spot.company : 'SEM DONO'}</span>
          </li>
        ))}
      </ul>
      
      <Link to="/spotnew">
        <button className="btn">Cadastrar novo spot</button>
      </Link>
    </>
  );
}