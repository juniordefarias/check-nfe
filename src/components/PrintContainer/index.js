import { useContext } from 'react';

import { Container } from './styles';

import PrintItem from './PrintItem';

import { GlobalContext } from '../../contexts/GlobalContext';

export default function Print() {
  const { products, info } = useContext(GlobalContext);

  return (
    <Container id="printable">
      <h1>CONFERÊNCIA DE MERCADORIAS</h1>
      <p>FORNECEDOR: {info ? info.xNome : ''}</p>
      <p>CNPJ: {info ? info.CNPJ : ''}</p>
      <p>Chave: {info ? info.acessKey : ''}</p>
      <hr />
      {
        products.map(
          (product) => (
            <PrintItem
              key={product.id}
              product={{
                cProd: product.cProd,
                xProd: product.xProd,
                cEANTrib: product.cEANTrib,
                uTrib: product.uTrib,
              }}
            />
          ),
        )
      }
    </Container>
  );
}
