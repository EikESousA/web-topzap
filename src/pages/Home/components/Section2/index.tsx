import { exampleHome } from '@/assets';
import { Scroll } from '@/pages/Home/components';
import React from 'react';
import { BiLike } from 'react-icons/bi';
import { BsChat } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineMusicNote, HiOutlineRefresh } from 'react-icons/hi';
import { RiDashboard2Line } from 'react-icons/ri';

import { Container, Content, Card } from './styles';

export default function Section2() {
  return (
    <Container>
      <Scroll id="section2" />

      <p>Como funciona?</p>
      <span>
        Com o TopZap, sua empresa contará com uma plataforma que permitirá um
        atendimento mais dinâmico, ágil e seguro 24 horas por dia. São dezenas
        de funcionalidades disponíveis para que você possa ser mais eficaz no
        atendimento ao seu cliente
      </span>

      <Content>
        <section>
          <Card left>
            <div className="info">
              <p>Chatbot personalizada</p>
              <span>
                Atenda seu cliente 24 horas por dia e tenha um menor custo por
                atendimento.
              </span>
            </div>
            <div className="img">
              <BsChat />
            </div>
          </Card>
          <Card left>
            <div className="info">
              <p>Vários atendentes e um único número WhatsApp</p>
              <span>
                Com seu login administrativo, você poderá conectar o número de
                WhatsApp da sua empresa e criar várias contas de usuário.
              </span>
            </div>
            <div className="img">
              <FiUsers />
            </div>
          </Card>
          <Card left>
            <div className="info">
              <p>Todos os tipos de mídia</p>
              <span>
                Envie mensagens de texto e áudio, arquivos em diversos formatos
                como pdf, doc, xls, vídeos, imagens, e muito mais.
              </span>
            </div>
            <div className="img">
              <HiOutlineMusicNote />
            </div>
          </Card>
        </section>

        <img src={exampleHome} alt="Exemplo do TopZap" />

        <section>
          <Card left={false}>
            <div className="info">
              <p>Transferência de atendimento</p>
              <span>
                Os atendentes poderão transferir os atendimentos entre si para
                que o cliente possa ser atendido por outro quando necessário.
              </span>
            </div>
            <div className="img">
              <HiOutlineRefresh />
            </div>
          </Card>
          <Card left={false}>
            <div className="info">
              <p>Protocolo de atendimento</p>
              <span>
                Todos os atendimentos possuem um protocolo de atendimento. Seu
                cliente recebe de forma automática, facilitando a comunicação e
                as tratativas.
              </span>
            </div>
            <div className="img">
              <BiLike />
            </div>
          </Card>
          <Card left={false}>
            <div className="info">
              <p>Dashboard e relatórios</p>
              <span>
                A gestão tem acesso a relatórios de atendimento e acompanha sua
                equipe em tempo real todos os dias e de qualquer lugar ou
                dispositivo.
              </span>
            </div>
            <div className="img">
              <RiDashboard2Line />
            </div>
          </Card>
        </section>
      </Content>
    </Container>
  );
}
