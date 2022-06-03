import { backgroundHome } from '@/assets';
import styled from 'styled-components';

export const Container = styled.div`
  & main {
    margin-top: 7rem;

    background-image: url(${backgroundHome});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;

    z-index: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: #11807f;
  mix-blend-mode: multiply;

  z-index: 2;
`;
