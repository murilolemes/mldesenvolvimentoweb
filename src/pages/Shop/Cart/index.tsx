import { Link } from 'react-router-dom';
import { TiArrowLeftThick } from 'react-icons/ti';

import { MyCart } from '../../../components/ShopComponent/MyCart';
import { ShopProvider } from '../../../hooks/ShopContext';

import { Container, Content, MyShopHeader, BtnBuy, Total } from './styles';
import { QntdItens, ValueTotal } from '../../../components/ShopComponent/ComponentsCart';

export function Cart() {
  return (
    <ShopProvider>
      <Container>
        <Content>
          <MyShopHeader>
            <div className="title">
              <h1>Meu carrinho</h1>
              <Link to='/shop' type='button'><TiArrowLeftThick size={20} /> Voltar</Link>
            </div>
            <BtnBuy type='button'>Finalizar Compra</BtnBuy>
          </MyShopHeader>
          <MyCart />
          <Total>
            <div className="itens">
              <p>Quantidade de itens selecionados: <QntdItens /></p>
              <p>Total <ValueTotal /></p>
            </div>
            <BtnBuy type='button'>Finalizar Compra</BtnBuy>
          </Total>
        </Content>
      </Container>
    </ShopProvider>
  )
}
