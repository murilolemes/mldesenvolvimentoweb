import { useState } from 'react';

import { RiWhatsappLine } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';

import { Container, ButtonWhatsApp } from './styles';

export function WhatsApp() {
  const [displayOn, setDisplayOff] = useState('active')

  const message = 'Olá Murilo Lemes, tudo bem?'
  const cell = '5517982152311';

  const apiWhats = `https://api.whatsapp.com/send?phone=${cell}&text=${message}`;

  return (
    <Container displayButton={displayOn === 'active'}>
      <button type='button' onClick={() => setDisplayOff('inative')}>
        <FiX size={16} />
      </button>
      <ButtonWhatsApp href={apiWhats} target='_blank'>
        <RiWhatsappLine />
      </ButtonWhatsApp>
    </Container>
  )
}
