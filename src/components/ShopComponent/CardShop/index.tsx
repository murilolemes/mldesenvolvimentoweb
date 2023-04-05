import { FaMinus, FaPlus } from 'react-icons/fa';

import { useShop } from 'hooks/ShopContext';
import { formatValue } from 'utils/formatValue';

import { Container, Content, Description } from './styles';

export function CardShop() {
  const { products, incrementItem, decrementItem, addCart } = useShop();

  return (
    <Container>
      {products.map((product) => (
        <Content key={product.id}>
          <div className="img">
            <img src={product.imgProduct} alt={product.name} />
          </div>
          <Description>
            <div className="inf">
              <p>{product.name}</p>
              <p>De <span className='firstValue'>{formatValue(product.firstValue)}</span></p>
              <p>Por <span>{formatValue(product.lastValue)}</span></p>
            </div>
            <div className="quantidade">
              <button
                className='btnMinus'
                type='button'
                onClick={() => (decrementItem(product.id))}
                disabled={product.qntd <= 0}
              >
                <FaMinus />
              </button>
              <p>{product.qntd}</p>
              <button
                className='btnPlus'
                type='button'
                onClick={() => (incrementItem(product.id))}
                disabled={product.qntd >= product.qntdTotal}
              >
                <FaPlus />
              </button>
            </div>
            <div className="total">
              <p>Total</p>
              <p><span>{formatValue(product.total)}</span></p>
            </div>
            <button
              type='button'
              className='btnComprar'
              disabled={product.qntd === 0}
              onClick={() => (addCart(product))}
            >
              Adicionar ao carrinho
            </button>
          </Description>
        </Content>
      ))}
    </Container>
  )
}
