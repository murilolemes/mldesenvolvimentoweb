import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi'

import { useShop } from 'hooks/ShopContext';

import { Container } from './styles';

export function ButtonCart() {
  const { cartProducts } = useShop();

  return (
    <Container>
      <Link to='/shop/carrinho'>
        <FiShoppingBag size={32} />
        <span
          style={cartProducts.length === 0 ? { display: 'none' } : { display: 'flex' }}
        >
          {cartProducts.length}
        </span>
      </Link>
    </Container>
  )
}
