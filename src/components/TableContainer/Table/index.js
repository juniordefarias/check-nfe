import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import { GlobalContext } from '../../../contexts/GlobalContext';

export default function Table({ selectedTable }) {
  const { products } = useContext(GlobalContext);

  if (selectedTable === 'costs') {
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Referência</th>
              <th>Descrição</th>
              <th>Compra</th>
              <th>ST</th>
              <th>IPI</th>
              <th>Desconto</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map(({
              cProd, xProd, vProd, ICMSST, IPI, vDesc,
            }) => (
              <tr key={Math.random()}>
                <td data-label="Referência">{Number.isNaN(cProd) ? cProd : Number(cProd)}</td>
                <td data-label="Descrição">{xProd}</td>
                <td data-label="Compra">{vProd}</td>
                <td data-label="ST">{ICMSST}</td>
                <td data-label="IPI">{IPI}</td>
                <td data-label="Desconto">{vDesc}</td>
                <td data-label="Total">{(Number(vProd) + Number(ICMSST) + Number(IPI) - Number(vDesc)).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    );
  }

  if (selectedTable === 'fiscal') {
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Referência</th>
              <th>Descrição</th>
              <th>NCM</th>
              <th>CFOP</th>
              <th>ICMS</th>
              <th>ST</th>
              <th>IPI</th>
              <th>PIS</th>
              <th>COFINS</th>
            </tr>
          </thead>
          <tbody>
            {products.map(({
              cProd, xProd, NCM, CFOP, ICMS, ICMSST, IPI, PIS, COFINS,
            }) => (
              <tr key={Math.random()}>
                <td data-label="Referência">{Number.isNaN(cProd) ? cProd : Number(cProd)}</td>
                <td data-label="Descrição">{xProd}</td>
                <td data-label="NCM">{NCM}</td>
                <td data-label="CFOP">{CFOP}</td>
                <td data-label="ICMS">{ICMS}</td>
                <td data-label="ST">{ICMSST}</td>
                <td data-label="IPI">{IPI}</td>
                <td data-label="PIS">{PIS}</td>
                <td data-label="COFINS">{COFINS}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    );
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Referência</th>
            <th>Descrição</th>
            <th>GTIN</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({
            id, cProd, xProd, cEANTrib, uTrib, qTrib, vUnTrib,
          }) => (
            <tr key={id}>
              <td data-label="Referência">{Number.isNaN(cProd) ? cProd : Number(cProd)}</td>
              <td data-label="Descrição">{xProd}</td>
              <td data-label="GTIN">{cEANTrib}</td>
              <td data-label="Quantidade">{`${Number(qTrib)} ${uTrib}`}</td>
              <td data-label="Valor">{`${Number(vUnTrib).toFixed(2)}/${uTrib}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

Table.propTypes = {
  selectedTable: PropTypes.string.isRequired,
};
