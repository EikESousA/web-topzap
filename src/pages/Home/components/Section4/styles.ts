import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  padding: 4rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ecfffd;

  z-index: 3;

  & > h2 {
    color: #11757a;

    font-family: 'Baloo 2', cursive;
    font-size: 2.5rem;
    font-weight: 700;
  }

  & > h3 {
    width: 70%;

    color: #848991;

    font-weight: 600;
    font-style: normal;
    font-size: 1.2rem;

    line-height: 2rem;
    text-align: center;
  }
`;

export const Content = styled.div`
  margin: 4rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  & section {
    width: 33%;

    padding: 50px 50px 50px 50px;

    background: linear-gradient(0deg, #020024 0%, #11807f 50%, #11807f 100%);

    border-radius: 12px;

    color: #ffffff;
    word-wrap: break-word;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }

  & section h3 {
    font-size: 14px;

    letter-spacing: 2px;
    font-weight: 600;
    line-height: 26px;
  }

  & section h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 56px;
  }
`;
