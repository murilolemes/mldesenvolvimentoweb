import { FiShoppingBag } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';



import { Container, Content, MyShopHeader } from './styles';
import { CardShop } from '../../components/CardShop';

export function Shop() {
  return (
    <Container>
      <Content>
        <MyShopHeader>
          <div id="title">
            <h1>Minha loja</h1>
            <Link to='/shop/carrinho' id="buttonCart">
              <FiShoppingBag size={24} />
              <span>2</span>
            </Link>
          </div>
          <div id="inputSearch">
            <input name="search" placeholder='Pesquisar' />
            <button type='button'>
              <FaSearch size={18} />
            </button>
          </div>
        </MyShopHeader>
        <CardShop />
      </Content>
    </Container>
  )
}
