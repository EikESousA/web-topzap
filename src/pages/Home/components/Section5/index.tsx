import { client1Home, client2Home, client3Home, client4Home } from '@/assets';
import { Scroll } from '@/pages/Home/components';
import React from 'react';

import { Container } from './styles';

export default function Section5() {
  return (
    <Container>
      <Scroll id="section5" />

      <p>Quem já usa o TopZap</p>

      <section>
        <div>
          <img src={client1Home} alt="Logo Sivirino" />
        </div>
        <div>
          <img src={client2Home} alt="Logo Zellos" />
        </div>
        <div>
          <img src={client3Home} alt="Logo Renovação" />
        </div>
        <div>
          <img src={client4Home} alt="Logo Inforeis" />
        </div>
      </section>
    </Container>
  );
}
