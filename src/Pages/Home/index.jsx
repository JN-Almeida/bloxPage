import React, { useContext } from 'react';
import Card from '../../components/Card';

import data from '../../services/apiStatic.json';
import StatusContext from '../../context/StatusContext';
import { Container } from './style';

const Home = () => {
  // const [materias, setMateris] = useState([]);

  const status = useContext(StatusContext);
  const cardStatus = status.status;

  return (
    <Container>
      <div className="wrapper">
        <div className="header">
          <h3 className="title">{cardStatus}</h3>
          <div className="filters">
            <input type="text" placeholder="Título ou ID" />
          </div>
        </div>
        <div className="card-list">
          {data && data.map((item) => {
            if (item.status !== cardStatus) return '';
            return (
              <Card itemCard={item} key={item.id} />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Home;
