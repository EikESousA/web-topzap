import { blog1Home, blog2Home, blog3Home } from '@/assets';
import { Scroll } from '@/pages/Home/components';
import React from 'react';

import { Container, Card, Background, Overlay } from './styles';

export default function Section6() {
  function handleLink(url: string) {
    window.open(url, '_blank');
  }

  return (
    <Container>
      <Scroll id="section6" />

      <h2>Confira as últimas do nosso blog</h2>
      <h4>Confira todos os conteúdos que preparamos para você</h4>

      <div>
        <Card
          type="button"
          onClick={() =>
            handleLink(
              'https://www.topzap.com.br/2021/03/14/conheca-agora-os-melhores-canais-de-atendimento-online-para-o-home-office-da-sua-empresa/',
            )
          }
        >
          <Background url={blog1Home} className="background" />
          <Overlay>
            <p>
              Conheça os melhores canais de atendimento online para o home
              office da sua empresa
            </p>
          </Overlay>
        </Card>

        <Card
          type="button"
          onClick={() =>
            handleLink(
              'https://www.topzap.com.br/2020/12/08/como-o-whatsapp-pode-ajudar-sua-empresa/',
            )
          }
        >
          <Background url={blog2Home} className="background" />
          <Overlay>
            <p>Como o WhatsApp pode ajudar sua empresa</p>
          </Overlay>
        </Card>

        <Card
          type="button"
          onClick={() =>
            handleLink(
              'https://www.topzap.com.br/2020/12/08/o-mundo-das-chatbots/',
            )
          }
        >
          <Background url={blog3Home} className="background" />
          <Overlay>
            <p>O mundo das chatbots</p>
          </Overlay>
        </Card>
      </div>
    </Container>
  );
}
