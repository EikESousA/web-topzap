import styled from 'styled-components';

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

  & > h3 {
    width: 70%;

    color: var(--gray-color-1);

    font-weight: 600;
    font-style: normal;
    font-size: 1.2rem;

    line-height: 2rem;
    text-align: center;
  }

  & > p {
    color: var(--gray-color-1);
  }
`;

export const Content = styled.div`
  margin: 4rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  & section {
    width: 100%;

    padding: 4rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: linear-gradient(
      0deg,
      var(--primary-color-2) 0%,
      var(--primary-color-1) 50%,
      var(--primary-color-1) 100%
    );

    border-radius: 0.5rem;

    color: var(--white-color-1);
    word-wrap: break-word;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1rem 2rem 0px,
      rgba(0, 0, 0, 0.1) 0px 0.5rem 0.8rem 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }

  & section span.name {
    font-size: 1.5rem;

    font-weight: 500;
    letter-spacing: 2px;
  }

  & section span.value {
    margin: 1rem 0;

    font-family: 'Baloo 2', cursive;

    font-size: 3rem;
    font-weight: 700;
  }

  & section span.info {
    margin: 1rem 0;

    font-family: 'Baloo 2', cursive;

    font-size: 1.2rem;
    font-weight: 700;
  }

  & section span.user {
    margin: 1rem 0;

    font-family: 'Baloo 2', cursive;

    font-size: 3rem;
    font-weight: 700;
  }

  & section div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & section div p {
    width: 100%;

    position: relative;

    padding: 1rem 1rem 1rem 2rem;

    border-bottom: 1px solid var(--white-color-1);
  }

  & section div p:after {
    content: '';

    position: absolute;
    top: calc(50% - 10px);
    left: 5px;

    width: 5px;
    height: 10px;

    border: solid white;
    border-width: 0 3px 3px 0;

    -webkit-tranform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  & button {
    margin: 1rem 0 0 1rem;
    padding: 0.8rem 3rem;

    border-radius: 0.2rem;
    border-color: var(--white-color-1);

    background-color: var(--white-color-1);

    color: #11807f;

    font-family: 'Baloo 2', cursive;
    font-size: 1.1rem;
    font-weight: 400;

    transition: background-color 0.2s ease-out;
  }

  & button:hover {
    background-color: var(--white-color-2);
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;

    & section {
      max-width: 33%;
    }

    & section:nth-child(2) {
      padding: 6rem 2rem;
    }
  }
`;
