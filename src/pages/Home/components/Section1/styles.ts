import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  padding: 4rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 3;

  & p {
    width: 70%;

    margin-bottom: 1.5rem;

    font-size: 4rem;
    font-weight: 900;
    line-height: 6rem;
    letter-spacing: 0.1rem;
    color: #ffffff;

    text-align: center;
  }

  & span {
    width: 70%;

    font-size: 1.2rem;
    font-weight: 700;
    line-height: 2rem;

    color: #ffffff;

    text-align: center;
  }

  & div {
    margin-top: 2rem;
  }

  & div button {
    margin-left: 1rem;
    padding: 0.8rem 3rem;

    border-radius: 2rem;
    border-color: #ffffff;

    background-color: #ffffff;

    color: #11807f;

    font-family: 'Baloo 2', cursive;
    font-size: 1.1rem;
    font-weight: 400;

    transition: background-color 0.2s ease-out;
  }

  & div button:hover {
    background-color: #e5e5e5;
  }
`;
