import styled from 'styled-components';

export const Container = styled.div`

  table {
    border-spacing: 0;
    background: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem; /* 14px */
    width: 100%;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  th {
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  td {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    color: ${({ theme  }) => theme.colors.primary.main};
  }

  th, td {
    padding: 0.5rem 0.25rem;
    text-align: center;
  }

  footer {
    margin-top: 1.5rem; /* 24px; */
    text-align: center;
  }

  @media screen and (max-width: 610px) {
    /* table {
      font-size: 0.75rem;
    } */
  }

  @media screen and (max-width: 625px) {

    table {
      background: none;
      padding: 0;
      box-shadow: none;
    }

    thead {
      display: none;
    }

    table, tbody, tr, td {
      display: block;
      width: 100%;
    }

    tr {
      background: #fff;
      padding: 0.5rem 1rem;
      margin-bottom: 1rem;
      border-radius: 0.5rem;

      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    td {
      text-align: right;
      padding-left: 30%;
      position: relative;
    }

    td:nth-of-type(1) {
      border-top: none;
    }

    td::before {
      content: attr(data-label);
      font-weight: bold;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;