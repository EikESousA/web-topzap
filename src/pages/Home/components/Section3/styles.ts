import { background2Home } from '@/assets';
import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  width: 100%;

  padding: 4rem 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${background2Home});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top right;
  background-position-x: right;
  background-position-y: top;
  background-size: contain;
  background-color: var(--primary-color-1);

  z-index: 3;

  & p {
    color: var(--white-color-1);

    font-size: 2rem;
    font-weight: 500;
  }

  & button {
    margin-left: 4rem;
    padding: 0.8rem 3rem;

    border-radius: 2rem;
    border-color: var(--white-color-1);

    background-color: var(--white-color-1);

    color: var(--primary-color-1);

    font-family: 'Baloo 2', cursive;
    font-size: 1.1rem;
    font-weight: 400;

    white-space: nowrap;

    transition: background-color 0.2s ease-out;
  }

  & button:hover {
    background-color: var(--white-color-2);
  }
`;
