import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import cocaPng from '../../assets/coca.png';

import { Container, Content, Description } from './styles';

export function CardShop() {
  const [qntd, setQntd] = useState(0);

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
            <div className="inf">
              <p>{product.name}</p>
              <p>De R$ <span className='firstValue'>{product.firstValue}</span></p>
              <p>Por R$ <span>{product.lastValue}</span></p>
            </div>
            <div className="quantidade">
              <button
                className='btnMinus'
                type='button'
                onClick={() => setQntd(qntd - 1)}
              >
                <FaMinus />
              </button>
              <p>{qntd}</p>
              <button
                className='btnPlus'
                type='button'
                onClick={() => setQntd(qntd + 1)}
              >
                <FaPlus />
              </button>
            </div>
            <div className="total">
              <p>Total</p>
              <p>R$ <span>4,50</span></p>
            </div>
            <button type='button' className='btnComprar'>
              Comprar
            </button>
          </Description>
        </Content>
      ))}
    </Container>
  )
}
