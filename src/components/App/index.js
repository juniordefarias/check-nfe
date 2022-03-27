import { useContext } from 'react';

import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/themes/default';
import GlobalStyles from '../../assets/global';

import {
  Container, Header, Main, Footer,
} from './styles';

import TableContainer from '../TableContainer';
import PrintContainer from '../PrintContainer';
import Button from '../Button';

import logo from '../../assets/images/logo.svg';
import missing from '../../assets/images/missing.svg';

import { GlobalContext } from '../../contexts/GlobalContext';

function App() {
  const { products, changeProducts, changeInfo } = useContext(GlobalContext);

  function handleXML() {
    const input = document.querySelector('input[type=file]');
    const label = document.querySelector('#labelInputFile');

    const file = input.files[0];

    if (file.type !== 'text/xml') {
      /* Alterar label do input para "Formato do arquivo inválido" */
      label.innerText = 'Formato do arquivo inválido!';
      label.classList.toggle('danger');
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      /* converting the string into XML Object */
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(reader.result, 'text/xml');
      /* const detTagsXML = xmlDoc.getElementsByTagName('det'); */
      const detArray = getProducts(xmlDoc);
      /* const info = getInfo(xmlDoc); */

      if (detArray.length === 0) {
        label.innerText = 'Formato do arquivo inválido!';
        label.classList.toggle('danger');
        return;
      }

      changeProducts(detArray);
      changeInfo(getInfo(xmlDoc));
      label.innerText = file.name;
      label.classList.remove('danger');
    };
  }

  function dun14ToEan13(gtin) {
    if (gtin.length !== 14) {
      return gtin;
    }

    const eanRaw = gtin.slice(1, -1);
    const eanRawArray = [...gtin.slice(1, -1)];

    let firstStep = 0;
    let secondStep = 0;
    eanRawArray.forEach((c, index) => {
      if ((index + 1) % 2 === 1) {
        firstStep += Number(c);
      } else {
        secondStep += Number(c) * 3;
      }
    });

    const thirdStep = firstStep + secondStep;

    let fourthStep = thirdStep;
    while (true) {
      if (String(fourthStep).slice(-1) === '0') {
        break;
      }
      fourthStep += 1;
    }

    const ean13 = eanRaw + String(fourthStep - thirdStep);
    return ean13;
  }

  function getProducts(xmlDoc) {
    const detTagsXML = xmlDoc.getElementsByTagName('det');
    const products = Array.from(detTagsXML).map((det) => (
      {
        id: `${det.getAttribute('nItem')}`,
        cProd: `${det.getElementsByTagName('cProd')[0].textContent}`,
        cEAN: `${det.getElementsByTagName('cEAN')[0].textContent}`,
        xProd: `${det.getElementsByTagName('xProd')[0].textContent}`,
        NCM: `${det.getElementsByTagName('NCM')[0].textContent}`,
        CFOP: `${det.getElementsByTagName('CFOP')[0].textContent}`,
        uCom: `${det.getElementsByTagName('uCom')[0].textContent}`,
        qCom: `${det.getElementsByTagName('qCom')[0].textContent}`,
        vUnCom: `${det.getElementsByTagName('vUnCom')[0].textContent}`,
        vProd: `${det.getElementsByTagName('vProd')[0].textContent}`,
        /* usa a função dun14ToEan13 pq so queremos o código de barra EAN-13 */
        cEANTrib: `${dun14ToEan13(det.getElementsByTagName('cEANTrib')[0].textContent)}`,
        uTrib: `${det.getElementsByTagName('uTrib')[0].textContent}`,
        qTrib: `${det.getElementsByTagName('qTrib')[0].textContent}`,
        vUnTrib: `${det.getElementsByTagName('vUnTrib')[0].textContent}`,
        vDesc: `${det.getElementsByTagName('vDesc')[0]
          ? det.getElementsByTagName('vDesc')[0].textContent
          : '0.00'}`,
        ICMS: `${det.getElementsByTagName('vICMS')[0]
          ? det.getElementsByTagName('vICMS')[0].textContent
          : '0.00'}`,
        ICMSST: `${det.getElementsByTagName('vICMSST')[0]
          ? det.getElementsByTagName('vICMSST')[0].textContent
          : '0.00'}`,
        IPI: `${det.getElementsByTagName('vIPI')[0]
          ? det.getElementsByTagName('vIPI')[0].textContent
          : '0.00'}`,
        PIS: `${det.getElementsByTagName('vPIS')[0]
          ? det.getElementsByTagName('vPIS')[0].textContent
          : '0.00'}`,
        COFINS: `${det.getElementsByTagName('vCOFINS')[0]
          ? det.getElementsByTagName('vCOFINS')[0].textContent
          : '0.00'}`,
      }
    ));
    return products;
  }

  function getInfo(xmlDoc) {
    const emit = xmlDoc.getElementsByTagName('emit')[0];
    const info = {
      CNPJ: `${emit.getElementsByTagName('CNPJ')[0].textContent}`,
      xNome: `${emit.getElementsByTagName('xNome')[0].textContent}`,
      acessKey: `${xmlDoc.getElementsByTagName('chNFe')[0].textContent}`,
    };

    return info;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header>
          <img src={logo} alt="logo" />
          <div className="inputContainer">
            <input type="file" id="inputFile" accept=".xml" onChange={handleXML} />
            <span id="labelInputFile"/* data-label="Arquivo lido com sucesso!" */>Selecione o XML da sua NF-e!</span>
            <Button as="label" htmlFor="inputFile">Nova NF-e</Button>
          </div>
        </Header>
        <hr />
        {
          (products.length === 0
            ? (
              <Main>
                <div>
                  <img src={missing} alt="file" />
                  <p>Nenhuma NF-e foi inserida! <br />Clique no botão <strong>"Nova NF-e"</strong><br /> para visualizar seus dados!</p>
                </div>
              </Main>
            )
            : (
              <TableContainer
                products={products}
              />
            ))
        }
        <PrintContainer />
        <Footer>
          <hr />
          <small>Projeto criado por Junior de Farias para portfólio</small>
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
