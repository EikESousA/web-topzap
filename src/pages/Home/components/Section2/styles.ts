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

  & > p {
    margin-bottom: 2rem;

    color: #11757a;

    font-family: 'Baloo 2', cursive;
    font-size: 2.5rem;
    font-weight: 700;
  }

  & > span {
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
  margin-top: 4rem;

  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;

  & section {
    flex: 1;
  }

  & section div.info + div.info {
    margin-top: 1rem;
  }

  & > img {
    height: 30rem;
    width: 15rem;

    margin: 0 4rem;
  }

  @media only screen and (max-width: 960px) {
    width: 70%;

    flex-direction: column;

    & > img {
      height: 30rem;
      width: 15rem;

      margin: 3rem 4rem;
    }
  }
`;

interface ICardProps {
  left: boolean;
}

export const Card = styled.div<ICardProps>`
  display: flex;
  flex-direction: ${(props) => (props.left ? 'row' : 'row-reverse')};
  justify-content: flex-start;
  align-items: flex-start;

  transition: opacity 0.6s ease-out;

  & div.info p {
    font-weight: 600;
    font-size: 16px;

    letter-spacing: -0.01px;
    line-height: 26px;

    color: #313233;
  }

  & div.info span {
    font-weight: 400;
    font-size: 17px;

    letter-spacing: 0;
    line-height: 28px;

    color: #848991;
  }

  & div.img {
    padding: 1rem;
    margin-left: ${(props) => (props.left ? '1rem' : '0')};
    margin-right: ${(props) => (!props.left ? '1rem' : '0')};

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #11807f;

    border-radius: 50%;
  }

  & div.img svg {
    min-height: 2rem;
    max-height: 2rem;
    min-width: 2rem;
    max-width: 2rem;

    color: #ffffff;
  }

  & + div {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 960px) {
    flex-direction: row-reverse;

    & div.img {
      margin-right: 1rem;
      margin-left: 0;
    }
  }
`;
