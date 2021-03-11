import React from 'react';
import { GoFileDirectory } from 'react-icons/go';
import { BsCheck } from 'react-icons/bs';

import { Container } from './style';

const Footer = () => (
  <Container>
    <footer>
      <button type="button" className="Status">
        <BsCheck />
        <p>Aprovados</p>
      </button>
      <button type="button" className="Status">
        <GoFileDirectory />
        <p>Arquivados</p>
      </button>
    </footer>
  </Container>
);

export default Footer;
