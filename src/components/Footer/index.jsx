import React, { useContext } from 'react';
import { GoFileDirectory } from 'react-icons/go';
import { BsCheck } from 'react-icons/bs';
import StatusContext from '../../context/StatusContext';

import { Container } from './style';

const Footer = () => {
  const status = useContext(StatusContext);

  return (
    <Container active={status.status}>
      <footer>
        <button type="button" className="status Aprovado" onClick={() => status.setStatus('Aprovado')}>
          <BsCheck />
          <p>Aprovado</p>
        </button>
        <button type="button" className="status Arquivado" onClick={() => status.setStatus('Arquivado')}>
          <GoFileDirectory />
          <p>Arquivado</p>
        </button>
      </footer>
    </Container>
  );
};

export default Footer;
