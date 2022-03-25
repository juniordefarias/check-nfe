import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PrintItem({ product }) {
  const {
    cProd, xProd, cEANTrib, uTrib,
  } = product;

  return (
    <Container>
      <strong>{`${Number(cProd)}- ${xProd}`}</strong>
      <span>{`${cEANTrib}  VAL:___/___/___   ${uTrib}:___`}</span>
      <span>OBS: _______________________________________________________</span>
    </Container>
  );
}

PrintItem.propTypes = {
  product: PropTypes.shape({
    cProd: PropTypes.string.isRequired,
    xProd: PropTypes.string.isRequired,
    cEANTrib: PropTypes.string.isRequired,
    uTrib: PropTypes.string.isRequired,
  }).isRequired,

};
