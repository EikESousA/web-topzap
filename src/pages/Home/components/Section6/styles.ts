import styled from 'styled-components';

interface IBackgroundProps {
  url: string;
}

export const Container = styled.section`
  position: relative;

  padding: 4rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--white-color-2);

  z-index: 3;

  & > h2 {
    color: var(--primary-color-1);

    font-family: 'Baloo 2', cursive;
    font-size: 2.5rem;
    font-weight: 700;
  }

  & > h4 {
    width: 70%;

    color: var(--gray-color-1);

    font-weight: 600;
    font-style: normal;
    font-size: 1.2rem;

    line-height: 2rem;
    text-align: center;
  }

  & div {
    margin: 1rem 0;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 2.5rem;
  }
`;

export const Card = styled.button`
  min-height: 25rem;
  max-height: 25rem;
  min-width: 20vw;
  max-width: 20vw;

  position: relative;

  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover .background {
    -ms-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    height: 30rem;
    width: 60vw;
  }
`;

export const Background = styled.div<IBackgroundProps>`
  min-height: 25rem;
  max-height: 25rem;
  min-width: 20vw;
  max-width: 20vw;

  position: absolute;
  top: -1rem;
  left: 0;

  background: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  transition: transform 0.5s ease-out;
`;

export const Overlay = styled.div`
  min-height: 25rem;
  max-height: 25rem;
  min-width: 20vw;
  max-width: 20vw;

  position: absolute;
  top: -1rem;
  left: 0;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #62626260;

  font-weight: 700;
  font-size: 1.5rem;
  font-family: Roboto, sans-serif;

  color: var(--white-color-1);

  & p {
    margin-top: 2rem;
    padding: 1rem;

    border: 3px solid var(--white-400);

    border-radius: 3rem;

    font-weight: 700;
    font-size: 1.5rem;
    font-family: Roboto, sans-serif;

    color: var(--white-400);
  }
`;
