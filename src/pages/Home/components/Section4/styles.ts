import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  padding: 4rem 1.5rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & section {
    background: linear-gradient(0deg, #020024 0%, #11807f 50%, #11807f 100%);
  }
`;
