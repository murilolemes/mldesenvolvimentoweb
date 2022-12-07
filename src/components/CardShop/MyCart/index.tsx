import { FiTrash2 } from 'react-icons/fi';
import { FaMinus, FaPlus } from 'react-icons/fa';
import cocaPng from '../../../assets/coca.png';

import { Container, Content, Description } from './styles';

export function MyCart() {
  const products = [
    {
      id: 1,
      imgProduct: cocaPng,
      name: 'Refrigerante Coca-Cola 350ml',
      firstValue: '4,99',
      lastValue: '4,50',
    },
    {
      id: 2,
      imgProduct: cocaPng,
      name: 'Refrigerante Fanta 350ml',
      firstValue: '4,99',
      lastValue: '4,50',
    },
    {
      id: 3,
      imgProduct: cocaPng,
      name: 'Refrigerante Guaraná Antartica 350ml',
      firstValue: '4,99',
      lastValue: '4,50',
    },
    {
      id: 4,
      imgProduct: cocaPng,
      name: 'Cerveja Bramha 350ml',
      firstValue: '4,99',
      lastValue: '4,50',
    },
    {
      id: 5,
      imgProduct: cocaPng,
      name: 'Cerveja Antartica 350ml',
      firstValue: '4,99',
      lastValue: '4,50',
    },
    {
      id: 6,
      imgProduct: cocaPng,
      name: 'Refrigerante Coca-Cola 2 litros',
      firstValue: '4,99',
      lastValue: '4,50',
    },
    {
      id: 7,
      imgProduct: cocaPng,
      name: 'Refrigerante Fanta 2 litros',
      firstValue: '4,99',
      lastValue: '4,50',
    },
    {
      id: 8,
      imgProduct: cocaPng,
      name: 'Refrigerante Sprite 2 litros',
      firstValue: '4,99',
      lastValue: '4,50',
    },
  ]

  return (
    <Container>
      {products.map((product) => (
        <Content key={product.id}>
          <div className="img">
            <img src={product.imgProduct} alt={product.name} />
          </div>
          <Description>
            <div className="infTotal">
              <div className="inf">
                <p>{product.name}</p>
                <p>De R$ <span className='firstValue'>{product.firstValue}</span></p>
                <p>Por R$ <span>{product.lastValue}</span></p>
              </div>
              <div className="qntTotal">
                <div className="qnt">
                  <p>Quantidade</p>
                  <div className="btnQntd">
                    <button className='btnMinus' type='button'>
                      <FaMinus />
                    </button>
                    <p>1</p>
                    <button className='btnPlus' type='button'>
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div className="total">
                  <p>Total R$ <span>4,50</span></p>
                </div>
              </div>
            </div>
            <button type='button' className='btnTrash'>
              <FiTrash2 size={24} />
            </button>
          </Description>
        </Content>
      ))}
    </Container>
  )
}
