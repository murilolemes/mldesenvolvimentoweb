import { FiTrash2 } from 'react-icons/fi';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { useShop } from 'hooks/ShopContext';
import { formatValue } from 'utils/formatValue';

import { Container, Content, Description } from './styles';

export function MyCart() {
  const { cartProducts, incrementItemCart, decrementItemCart, removeItemCart } = useShop();

  return (
    <Container>
      {cartProducts.map((product) => (
        <Content key={product.id}>
          <div className="img">
            <img src={product.imgProduct} alt={product.name} />
          </div>
          <Description>
            <div className="infTotal">
              <div className="inf">
                <p>{product.name}</p>
                <p>De R$ <span className='firstValue'>{formatValue(product.firstValue)}</span></p>
                <p>Por R$ <span>{formatValue(product.lastValue)}</span></p>
              </div>
              <div className="qntTotal">
                <div className="qnt">
                  <p>Quantidade</p>
                  <div className="btnQntd">
                    <button
                      className='btnMinus'
                      type='button'
                      onClick={() => (decrementItemCart(product.id))}
                      disabled={product.qntd <= 1}
                    >
                      <FaMinus />
                    </button>
                    <p>{product.qntd}</p>
                    <button
                      className='btnPlus'
                      type='button'
                      onClick={() => (incrementItemCart(product.id))}
                      disabled={product.qntd >= product.qntdTotal}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div className="total">
                  <p>Total <span>{formatValue(product.total)}</span></p>
                </div>
              </div>
            </div>
            <button
              type='button'
              className='btnTrash'
              onClick={() => (removeItemCart(product.id))}
            >
              <FiTrash2 size={24} />
            </button>
          </Description>
        </Content>
      ))}
    </Container>
  )
}
