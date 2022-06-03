import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  width: 100%;

  padding: 4rem 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(http://brandexponents.com/exponent-lite/it-company/wp-content/uploads/sites/30/2019/06/intro-bg.svg);
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top right;
  background-position-x: right;
  background-position-y: top;
  background-size: contain;
  background-color: #11807f;

  z-index: 3;

  & p {
    color: #ffffff;

    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
  }

  & button {
    margin-left: 4rem;
    padding: 0.8rem 3rem;

    border-radius: 2rem;
    border-color: #ffffff;

    background-color: #ffffff;

    color: #11807f;

    font-family: 'Baloo 2', cursive;
    font-size: 1.1rem;
    font-weight: 400;

    white-space: nowrap;

    transition: background-color 0.2s ease-out;
  }

  & button:hover {
    background-color: #e5e5e5;
  }
`;
