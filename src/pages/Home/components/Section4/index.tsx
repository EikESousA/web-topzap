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
          <span className="name">STARTER</span>
          <span className="value">R$ 199</span>
          <span className="info">por mês</span>
          <span className="user">3 usuários</span>
          <div>
            <p>Suporte técnico online</p>
            <p>Envio de mensagens de texto, áudio, imagens e vídeos</p>
            <p>Protocolo de atendimento</p>
            <p>Sem limites de atendimento</p>
            <p>Transferência de atendimento entre operadores</p>
            <p>Transferência de arquivos</p>
            <p>Agenda de contatos com importação</p>
            <p>Dashboard e relatórios</p>
            <p>ChatBot *</p>
          </div>
          <button type="button">CONTRATE JÁ</button>
        </section>

        <section>
          <span className="name">PROFESSIONAL</span>
          <span className="value">R$ 259</span>
          <span className="info">por mês</span>
          <span className="user">5 usuários</span>
          <div>
            <p>Suporte técnico online</p>
            <p>Envio de mensagens de texto, áudio, imagens e vídeos</p>
            <p>Protocolo de atendimento</p>
            <p>Sem limites de atendimento</p>
            <p>Transferência de atendimento entre operadores</p>
            <p>Transferência de arquivos</p>
            <p>Agenda de contatos com importação</p>
            <p>Dashboard e relatórios</p>
            <p>ChatBot *</p>
          </div>
          <button type="button">CONTRATE JÁ</button>
        </section>

        <section>
          <span className="name">GROWTH</span>
          <span className="value">R$ 369</span>
          <span className="info">por mês</span>
          <span className="user">9 usuários</span>
          <div>
            <p>Suporte técnico online</p>
            <p>Envio de mensagens de texto, áudio, imagens e vídeos</p>
            <p>Protocolo de atendimento</p>
            <p>Sem limites de atendimento</p>
            <p>Transferência de atendimento entre operadores</p>
            <p>Transferência de arquivos</p>
            <p>Agenda de contatos com importação</p>
            <p>Dashboard e relatórios</p>
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
