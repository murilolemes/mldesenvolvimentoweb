import { FiShoppingBag } from 'react-icons/fi'
import { FaMinus, FaPlus, FaSearch } from 'react-icons/fa';

import cocaSvg from '../../assets/coca.png';

import { Container, Content, MyShopHeader, DivCards, Description } from './styles';

export function Shop() {
  return (
    <Container>
      <Content>
        <MyShopHeader>
          <div id="title">
            <h1>Minha loja</h1>
            <button type='button' id="buttonCart">
              <FiShoppingBag size={24} />
              <span>2</span>
            </button>
          </div>
          <div id="inputSearch">
            <input name="search" placeholder='Pesquisar' />
            <button type='button'>
              <FaSearch size={18} />
            </button>
          </div>
        </MyShopHeader>
        <DivCards>
          <div className="card">
            <div className="img">
              <img src={cocaSvg} alt="Coca Cola" />
            </div>
            <Description>
              <div className="inf">
                <p>Refrigerante Coca-Cola 350ml</p>
                <p>De R$ <span className='firstValue'>4,99</span></p>
                <p>Por R$ <span>4,50</span></p>
              </div>
              <div className="quantidade">
                <button className='btnMinus' type='button'>
                  <FaMinus />
                </button>
                <p>1</p>
                <button className='btnPlus' type='button'>
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
          </div>
          <div className="card">
            <div className="img">
              <img src={cocaSvg} alt="Coca Cola" />
            </div>
            <Description>
              <div className="inf">
                <p>Refrigerante Coca-Cola 350ml</p>
                <p>De R$ <span className='firstValue'>4,99</span></p>
                <p>Por R$ <span>4,50</span></p>
              </div>
              <div className="quantidade">
                <button className='btnMinus' type='button'>
                  <FaMinus />
                </button>
                <p>1</p>
                <button className='btnPlus' type='button'>
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
          </div>
          <div className="card">
            <div className="img">
              <img src={cocaSvg} alt="Coca Cola" />
            </div>
            <Description>
              <div className="inf">
                <p>Refrigerante Coca-Cola 350ml</p>
                <p>De R$ <span className='firstValue'>4,99</span></p>
                <p>Por R$ <span>4,50</span></p>
              </div>
              <div className="quantidade">
                <button className='btnMinus' type='button'>
                  <FaMinus />
                </button>
                <p>1</p>
                <button className='btnPlus' type='button'>
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
          </div>
          <div className="card">
            <div className="img">
              <img src={cocaSvg} alt="Coca Cola" />
            </div>
            <Description>
              <div className="inf">
                <p>Refrigerante Coca-Cola 350ml</p>
                <p>De R$ <span className='firstValue'>4,99</span></p>
                <p>Por R$ <span>4,50</span></p>
              </div>
              <div className="quantidade">
                <button className='btnMinus' type='button'>
                  <FaMinus />
                </button>
                <p>1</p>
                <button className='btnPlus' type='button'>
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
          </div>
          <div className="card">
            <div className="img">
              <img src={cocaSvg} alt="Coca Cola" />
            </div>
            <Description>
              <div className="inf">
                <p>Refrigerante Coca-Cola 350ml</p>
                <p>De R$ <span className='firstValue'>4,99</span></p>
                <p>Por R$ <span>4,50</span></p>
              </div>
              <div className="quantidade">
                <button className='btnMinus' type='button'>
                  <FaMinus />
                </button>
                <p>1</p>
                <button className='btnPlus' type='button'>
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
          </div>
          <div className="card">
            <div className="img">
              <img src={cocaSvg} alt="Coca Cola" />
            </div>
            <Description>
              <div className="inf">
                <p>Refrigerante Coca-Cola 350ml</p>
                <p>De R$ <span className='firstValue'>4,99</span></p>
                <p>Por R$ <span>4,50</span></p>
              </div>
              <div className="quantidade">
                <button className='btnMinus' type='button'>
                  <FaMinus />
                </button>
                <p>1</p>
                <button className='btnPlus' type='button'>
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
          </div>
          <div className="card">
            <div className="img">
              <img src={cocaSvg} alt="Coca Cola" />
            </div>
            <Description>
              <div className="inf">
                <p>Refrigerante Coca-Cola 350ml</p>
                <p>De R$ <span className='firstValue'>4,99</span></p>
                <p>Por R$ <span>4,50</span></p>
              </div>
              <div className="quantidade">
                <button className='btnMinus' type='button'>
                  <FaMinus />
                </button>
                <p>1</p>
                <button className='btnPlus' type='button'>
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
          </div>
          <div className="card">
            <div className="img">
              <img src={cocaSvg} alt="Coca Cola" />
            </div>
            <Description>
              <div className="inf">
                <p>Refrigerante Coca-Cola 350ml</p>
                <p>De R$ <span className='firstValue'>4,99</span></p>
                <p>Por R$ <span>4,50</span></p>
              </div>
              <div className="quantidade">
                <button className='btnMinus' type='button'>
                  <FaMinus />
                </button>
                <p>1</p>
                <button className='btnPlus' type='button'>
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
          </div>
        </DivCards>
      </Content>
    </Container>
  )
}
