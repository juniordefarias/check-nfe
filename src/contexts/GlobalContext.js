import { useState, createContext, useMemo } from 'react';
import Proptypes from 'prop-types';

export const GlobalContext = createContext('General');

export function GlobalProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState();

  function changeProducts(array) {
    setProducts(array);
  }

  function changeInfo(object) {
    setInfo(object);
  }

  const provider = useMemo(() => (
    {
      products,
      changeProducts,
      info,
      changeInfo,
    }
  ), [products, info]);

  return (
    <GlobalContext.Provider
      value={provider}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: Proptypes.node.isRequired,
};
