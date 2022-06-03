import { Scroll } from '@/pages/Home/components';
import React from 'react';

import { Container } from './styles';

export default function Section6() {
  return (
    <Container>
      <Scroll id="section6" />

      <h2>Confira as últimas do nosso blog</h2>
      <h4>Confira todos os conteúdos que preparamos para você</h4>

      <div>
        <div>
          Conheça os melhores canais de atendimento online para o home office da
          sua empresa
        </div>
      </div>
    </Container>
  );
}
