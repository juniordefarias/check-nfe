import styled from 'styled-components';

export const Container = styled.section`
  max-width: 800px;
  width: calc(100% - 2rem);
  /* border: 1px solid green; */
  margin: 0 auto;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  hr {
    margin: 1rem 0;
  }

  input {
    flex: 1;
  }
`;

export const Header = styled.header`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;


  .inputContainer {
    /* flex: 1; */
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.5rem;

    overflow-x: auto;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    background: ${({ theme }) => theme.colors.primary.lighter};
    border-radius: 0.5rem;
    padding-left: 0.75rem;


    input[type='file'] {
      display: none;
    }

    label {
      flex-shrink: 0;
      font-size: 14px;
    }

    span {
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media screen and (max-width: 560px) {
    & {
      display: initial;
      text-align: center;
    }

    img {
      margin-bottom: 1rem;
    }

    .inputContainer {
      padding: 0 1rem 0 0;
    }

    span {
      flex: 1;
      text-align: initial;
      order: 1;
    }
  }
`;

export const Main = styled.main`
  height: 100%;
  text-align: center;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 4rem;

  img {
    margin-bottom:  22px;
  }

  p {
    max-width: 275px;
    margin:  0 auto;
    color: ${({ theme }) => theme.colors.primary.light};
    font-size: 1.125rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const Footer = styled.footer`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.light};
  margin: 2rem 0 1rem;
`;
