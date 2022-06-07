import { background3Home } from '@/assets';
import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  width: 100%;

  padding: 4rem 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${background3Home});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  background-color: var(--primary-color-1);

  z-index: 3;

  & p {
    color: var(--white-color-1);

    font-family: 'Baloo 2', cursive;

    font-size: 2.5rem;
    line-height: 36px;
    font-weight: 700;
  }

  & div {
    margin-top: 2.5rem;
  }

  & div img {
    height: 10rem;
    width: 15rem;

    padding: 2rem;

    background-color: var(--white-color-1);

    border-radius: 0.5rem;
  }

  & div img + img {
    margin-left: 1rem;
  }
`;
