import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import CloseImg from '../../../assets/close.svg';

import { Container } from './styles';
import { toast } from 'react-toastify';

interface ModalCartProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalCart({ isOpen, onRequestClose }: ModalCartProps) {
  const history = useNavigate();

  function handleClose() {
    localStorage.removeItem('@ShopProducts:cartProducts');
    history('/shop')
    toast.success('Compra finalizada com sucesso')
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={handleClose}
        className='react-modal-close'
      >
        <img src={CloseImg} alt='Fechar Modal' />
      </button>
      <Container>
        <h2>Sua compra foi realizada com sucesso!</h2>
        <p>Você será redirecionado para a nossa pagina Shop</p>
      </Container>
    </Modal>
  )
}
