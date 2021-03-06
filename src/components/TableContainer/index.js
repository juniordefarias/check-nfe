import { useState } from 'react';

import Table from './Table';

import { Container } from './styles';
import Button from '../Button';

export default function TableContainer() {
  const [table, setTable] = useState('General');

  function handleChangeTable(selectedTable) {
    /* const tables = ['general', 'fiscal', 'costs'];
    const selectedTable = (
      tables.includes(table)
      ? table
      : 'general'
    ) */
    setTable(selectedTable);
  }

  function handleButtons(event) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.classList.remove('selected'));

    const button = event.target;
    button.classList.add('selected');
  }

  return (
    <Container>
      <ul>
        <li>
          <Button
            className="selected"
            onClick={(event) => {
              handleButtons(event);
              handleChangeTable('general');
            }}
          >
            Geral
          </Button>
        </li>
        <li>
          <Button onClick={(event) => {
            handleButtons(event);
            handleChangeTable('fiscal');
          }}
          >
            Fiscal
          </Button>
        </li>
        <li>
          <Button onClick={(event) => {
            handleButtons(event);
            handleChangeTable('costs');
          }}
          >
            Custos
          </Button>
        </li>
      </ul>
      <Table
        selectedTable={table}
      />
      <footer>
        <Button onClick={() => window.print()}>Imprimir Confêrencia</Button>
      </footer>
    </Container>
  );
}
