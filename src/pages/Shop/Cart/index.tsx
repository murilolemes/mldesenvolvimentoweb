import { Link } from 'react-router-dom';
import { TiArrowLeftThick } from 'react-icons/ti'

import { Container, Content, MyShopHeader, BtnBuy, Total } from './styles';
import { MyCart } from '../../../components/CardShop/MyCart';

export function Cart() {
  return (
    <Container>
      <Content>
        <MyShopHeader>
          <div className="title">
            <h1>Meu carrinho</h1>
            <Link to='/shop' type='button'><TiArrowLeftThick size={20} /> Voltar</Link>
          </div>
          <p>Total R$ <span>45,00</span></p>
          <BtnBuy type='button'>Finalizar Compra</BtnBuy>
        </MyShopHeader>
        <MyCart />
        <Total>
          <div className="itens">
            <p>Quantidade de itens selecionados: <span>10</span></p>
            <p>Total R$ <span>45,00</span></p>
          </div>
          <BtnBuy type='button'>Finalizar Compra</BtnBuy>
        </Total>
      </Content>
    </Container>
  )
}
