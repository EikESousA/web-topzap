import styled, { keyframes } from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;

  padding: 0.5rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--primary-color-1);

  z-index: 6;

  & img {
    height: 6rem;
    width: 6rem;
  }
`;

export const NavigatorDesktop = styled.nav`
  @media only screen and (max-width: 767px) {
    display: none;
  }

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & ul li a.link {
    position: relative;

    padding: 0.5rem;

    color: var(--white-color-2);

    font-family: 'Baloo 2', cursive;
    font-size: 1.1rem;
    font-weight: 700;
  }

  & ul li a.login {
    margin-left: 1rem;
    padding: 0.8rem 3rem;

    border-radius: 2rem;
    border-color: var(--white-color-1);

    background-color: var(--white-color-1);

    color: var(--primary-color-1);

    font-family: 'Baloo 2', cursive;
    font-size: 1.1rem;
    font-weight: 400;

    transition: background-color 0.2s ease-out;
  }

  & ul li a.login:hover {
    background-color: var(--white-color-2);
  }

  & ul li a.link::after {
    content: '';

    position: absolute;
    left: 0;
    bottom: 0;

    height: 2px;
    width: 100%;

    background-color: var(--white-color-1);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  & ul li a.link:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  & ul li a + a {
    margin-left: 0.5rem;
  }
`;

export const NavigatorMobile = styled.nav`
  @media only screen and (min-width: 768px) {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    margin-right: 1.5rem;

    transition: all 0.4s ease-in-out;
  }

  & button span {
    display: block;
    width: 28px;
    height: 2px;
    border-radius: 9999px;
    background-color: var(--white-color-1);

    transition: all 0.4s ease-in-out;
  }

  & button span:not(:last-child) {
    margin-bottom: 7px;
  }

  & button.active {
    transition-delay: 0.8s;
    transform: rotate(45deg);
  }

  & button.active span:nth-child(2) {
    width: 0;
  }

  & button.active span:nth-child(1),
  & button.active span:nth-child(3) {
    transition-delay: 0.4s;
  }

  & button.active span:nth-child(1) {
    transform: translateY(9px);
  }

  & button.active span:nth-child(3) {
    transform: translateY(-9px) rotate(90deg);
  }

  & a {
    padding: 0.8rem 3rem;

    border-radius: 2rem;
    border-color: var(--white-color-1);

    background-color: var(--white-color-1);

    color: var(--primary-color-1);

    font-family: 'Baloo 2', cursive;
    font-size: 1.1rem;
    font-weight: 400;
  }
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NavigatorOpen = styled.nav`
  @media only screen and (min-width: 768px) {
    display: none;
  }

  position: fixed;
  top: 7.25rem;
  left: 0;

  height: 3rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--white-color-1);

  animation: ${appearFromTop} 1s;

  z-index: 5;

  & ul {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & ul li a {
    position: relative;

    padding: 0.5rem;

    color: var(--primary-color-1);

    font-family: 'Baloo 2', cursive;
    font-size: 1.1rem;
    font-weight: 700;
  }

  & ul li a::after {
    content: '';

    position: absolute;
    left: 0;
    bottom: 0;

    height: 2px;
    width: 100%;

    background-color: var(--primary-color-1);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  & ul li a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
