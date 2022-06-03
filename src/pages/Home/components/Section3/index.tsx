import { Scroll } from '@/pages/Home/components';
import React from 'react';

import { Container } from './styles';

export default function Section3() {
  return (
    <Container>
      <Scroll id="section3" />
      <p>
        Faça parte desta tendência! Agende uma demonstração ou contrate online
        agora mesmo.
      </p>
      <button type="button">AGENDE UMA DEMONSTRAÇÃO</button>
    </Container>
  );
}
