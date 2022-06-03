import React from 'react';
import {
  Header,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Footer,
  Whatsapp,
} from './components';
import { Container, Overlay } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <Footer />
      <Whatsapp />
      <Overlay />
    </Container>
  );
}
