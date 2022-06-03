import { Scroll } from '@/pages/Home/components';
import React from 'react';

import { Container, Content } from './styles';

export default function Section4() {
  return (
    <Container>
      <Scroll id="section4" />

      <h2>Planos</h2>
      <h3>
        Escolha o plano ideal para sua empresa e comece a usar agora mesmo
      </h3>

      <Content>
        <section>
          <h3>STARTER</h3>
          <h2>R$ 199</h2>
          <h4>por mês</h4>
          <h2>3 usuários</h2>
          <div>
            <p>Suporte técnico online</p>
          </div>
          <div>
            <p>Envio de mensagens de texto, áudio, imagens e vídeos</p>
          </div>
          <div>
            <p>Protocolo de atendimento</p>
          </div>
          <div>
            <p>Sem limites de atendimento</p>
          </div>
          <div>
            <p>Transferência de atendimento entre operadores</p>
          </div>
          <div>
            <p>Transferência de arquivos</p>
          </div>
          <div>
            <p>Agenda de contatos com importação</p>
          </div>
          <div>
            <p>Dashboard e relatórios</p>
          </div>
          <div>
            <p>ChatBot *</p>
          </div>
          <button type="button">CONTRATE JÁ</button>
        </section>

        <section>
          <h3>PROFESSIONAL</h3>
          <h2>R$ 259</h2>
          <h4>por mês</h4>
          <h2>5 usuários</h2>
          <div>
            <p>Suporte técnico online</p>
          </div>
          <div>
            <p>Envio de mensagens de texto, áudio, imagens e vídeos</p>
          </div>
          <div>
            <p>Protocolo de atendimento</p>
          </div>
          <div>
            <p>Sem limites de atendimento</p>
          </div>
          <div>
            <p>Transferência de atendimento entre operadores</p>
          </div>
          <div>
            <p>Transferência de arquivos</p>
          </div>
          <div>
            <p>Agenda de contatos com importação</p>
          </div>
          <div>
            <p>Dashboard e relatórios</p>
          </div>
          <div>
            <p>ChatBot *</p>
          </div>
          <button type="button">CONTRATE JÁ</button>
        </section>

        <section>
          <h3>GROWTH</h3>
          <h2>R$ 369</h2>
          <h4>por mês</h4>
          <h2>9 usuários</h2>
          <div>
            <p>Suporte técnico online</p>
          </div>
          <div>
            <p>Envio de mensagens de texto, áudio, imagens e vídeos</p>
          </div>
          <div>
            <p>Protocolo de atendimento</p>
          </div>
          <div>
            <p>Sem limites de atendimento</p>
          </div>
          <div>
            <p>Transferência de atendimento entre operadores</p>
          </div>
          <div>
            <p>Transferência de arquivos</p>
          </div>
          <div>
            <p>Agenda de contatos com importação</p>
          </div>
          <div>
            <p>Dashboard e relatórios</p>
          </div>
          <div>
            <p>ChatBot *</p>
          </div>
          <button type="button">CONTRATE JÁ</button>
        </section>
      </Content>
      <p>
        * Caso o cliente queria utilizar a ChatBot, um consultor irá identificar
        qual o nível de integração é necessário e o custos de implantação serão
        informados.
      </p>
    </Container>
  );
}
