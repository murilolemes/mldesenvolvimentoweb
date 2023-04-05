import { ShopProvider } from 'hooks/ShopContext';
import { CardShop } from 'components/ShopComponent/CardShop';
import { ButtonCart } from 'components/ShopComponent/ButtonCart';

import { Container, Content, MyShopHeader } from './styles';

export function Shop() {
  return (
    <ShopProvider>
      <Container>
        <Content>
          <MyShopHeader>
            <div id="title">
              <h1>Minha loja</h1>
              <ButtonCart />
            </div>
          </MyShopHeader>
          <CardShop />
        </Content>
      </Container>
    </ShopProvider>
  )
}
