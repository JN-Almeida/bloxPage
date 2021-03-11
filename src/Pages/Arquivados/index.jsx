import React, { useEffect } from 'react';
import Card from '../../components/Card';
import api from '../../services/api';

import { Container } from './style';

import data from '../../services/apiStatic.json';

const Arquivados = () => {
  // const [materias, setMateris] = useState([]);

  useEffect(async () => {
    try {
      const result = await api.get('/bloxes?per=1&page=1');
      console.log('result', result);
    } catch (err) {
      console.log(err.message);
    }
  });

  return (
    <Container>
      <div className="wrapper">
        <div className="header">
          <h3 className="title">Arquivados</h3>
          <div className="filters">
            <input type="text" placeholder="Título ou ID" />
          </div>
        </div>
        <div className="card-list">
          {data && data.map((item) => <Card itemCard={item} key={item.id} />)}
        </div>
      </div>
    </Container>
  );
};

export default Arquivados;
