import React from 'react';
import { BsCheckCircle, BsThreeDotsVertical } from 'react-icons/bs';

import { Container } from './style';

function Card(itemCard) {
  const infos = itemCard.itemCard;
  console.log(itemCard.itemCard);

  function handleDateSpan(data) {
    if (!data) {
      return <p>Sem data limite</p>;
    }
    return (
      <div className="date-limit">
        <span>Data limite</span>
        <p>{infos.date_limit_edition}</p>
      </div>
    );
  }

  return (
    <Container color={infos.knowledge_color} color2={infos.knowledge_color2}>
      <section className="card-header">
        { handleDateSpan(infos.date_limit_edition) }
        <div>
          <span><BsCheckCircle /></span>
          <span><BsThreeDotsVertical /></span>
        </div>
      </section>
      <section className="card-infos">
        <div className="grid">
          <img src={infos.knowledge_icon} alt="icone" />
          <p className="title">{infos.title}</p>
        </div>
        <div className="grid">
          <div>
            <span>ID</span>
            <p>{infos.id}</p>
          </div>
          <div>
            <span>Modalidade</span>
            <p>{infos.modality}</p>
          </div>
        </div>
      </section>
      <section className="card-bottom">
        { infos.reponsibles && infos.reponsibles.map((item) => <div className="circle">{item}</div>)}
        { !infos.reponsibles && <div>Sem editor Responsável</div>}
      </section>
    </Container>
  );
}

export default Card;
