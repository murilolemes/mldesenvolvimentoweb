import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiArrowLeftThick } from 'react-icons/ti';

import { MyCart } from 'components/ShopComponent/MyCart';
import { ShopProvider } from 'hooks/ShopContext';
import { ModalCart } from 'components/ShopComponent/ModalCart';
import { QntdItens, ValueTotal } from 'components/ShopComponent/ComponentsCart';

import { Container, Content, MyShopHeader, BtnBuy, Total } from './styles';

export function Cart() {
  const [isModalCartOpen, setIsModalCartOpen] = useState(false)

  function handleOpenModalCart() {
    setIsModalCartOpen(true);
  }

  function handleCloseModalCart() {
    setIsModalCartOpen(false);
  }
  return (
    <ShopProvider>
      <Container>
        <Content>
          <MyShopHeader>
            <div className="title">
              <h1>Meu carrinho</h1>
              <Link to='/shop' type='button'><TiArrowLeftThick size={20} /> Voltar</Link>
            </div>
            <BtnBuy onClick={handleOpenModalCart} type='button'>Finalizar Compra</BtnBuy>
          </MyShopHeader>
          <MyCart />
          <Total>
            <div className="itens">
              <p>Quantidade de itens selecionados: <QntdItens /></p>
              <p>Total <ValueTotal /></p>
            </div>
            <BtnBuy onClick={handleOpenModalCart} type='button'>Finalizar Compra</BtnBuy>
          </Total>
          <ModalCart isOpen={isModalCartOpen} onRequestClose={handleCloseModalCart} />
        </Content>
      </Container>
    </ShopProvider>
  )
}
