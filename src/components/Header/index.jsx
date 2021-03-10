import React from 'react';

import { Container } from './style';

const Header = () => (
  <Container>
    <header>
      <div className="title">Gerenciar Unidades Curriculares</div>

      <ul className="menu">
        <li>
          LISTA
        </li>
        <li>
          CRIAR NOVO
        </li>
      </ul>
    </header>

  </Container>
);

export default Header;
