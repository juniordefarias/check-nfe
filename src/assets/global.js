import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${({ theme }) => theme.colors.primary.main};
    font-family: sans-serif;
    /* font-size: 14px; */
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  .danger {
    color: ${({ theme }) => theme.colors.danger};
    font-weight: bold;
  }

  #printable {
    display: none;
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }

  @media print {
    body * {
      visibility: hidden;
    }
    #printable {
      display: initial;
    }
    #printable, #printable * {
      visibility: visible;
    }
  }
`;
