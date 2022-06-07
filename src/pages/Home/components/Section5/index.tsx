import { client1Home, client2Home, client3Home, client4Home } from '@/assets';
import { Scroll } from '@/pages/Home/components';
import React from 'react';

import { Container } from './styles';

export default function Section5() {
  return (
    <Container>
      <Scroll id="section5" />

      <p>Quem já usa o TopZap</p>

      <div>
        <img src={client1Home} alt="" />
        <img src={client2Home} alt="" />
        <img src={client3Home} alt="" />
        <img src={client4Home} alt="" />
      </div>
    </Container>
  );
}
