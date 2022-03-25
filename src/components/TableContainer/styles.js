import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  li {
    list-style: none;
  }

  footer {
    margin-top: 1.5rem;
    text-align: center;
  }
`;