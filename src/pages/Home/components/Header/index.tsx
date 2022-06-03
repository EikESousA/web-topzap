import React, { useState } from 'react';

import { logoWhite } from '@/assets/index';

import {
  Container,
  NavigatorDesktop,
  NavigatorMobile,
  NavigatorOpen,
} from './styles';

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Container>
        <a href="/">
          <img src={logoWhite} alt="Logo da TopZap" />
        </a>

        <NavigatorDesktop>
          <ul>
            <li>
              <a className="link" href="/#section2">
                Como funciona
              </a>
            </li>
            <li>
              <a className="link" href="/#section3">
                Planos
              </a>
            </li>
            <li>
              <a className="link" href="/#section4">
                Clientes
              </a>
            </li>
            <li>
              <a className="link" href="/#section5">
                Blog
              </a>
            </li>
            <li>
              <a className="login" href="https://web.topzap.com.br/">
                LOGIN
              </a>
            </li>
          </ul>
        </NavigatorDesktop>

        <NavigatorMobile>
          <button
            className={isOpened ? 'active' : ''}
            type="button"
            onClick={() => setIsOpened(!isOpened)}
          >
            <span />
            <span />
            <span />
          </button>
          <a href="teste">LOGIN</a>
        </NavigatorMobile>
      </Container>

      {isOpened && (
        <NavigatorOpen>
          <ul>
            <li>
              <a href="/#section2">Como funciona</a>
            </li>
            <li>
              <a href="/#section3">Planos</a>
            </li>
            <li>
              <a href="/#section4">Clientes</a>
            </li>
            <li>
              <a href="/#section5">Blog</a>
            </li>
          </ul>
        </NavigatorOpen>
      )}
    </>
  );
}
