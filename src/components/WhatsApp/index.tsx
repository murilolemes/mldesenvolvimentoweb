import { RiWhatsappLine } from 'react-icons/ri';

import { ButtonWhatsApp } from './styles';

export function WhatsApp() {
  const message = 'Olá Murilo Lemes, tudo bem?'
  const cell = '5517982152311';

  const apiWhats = `https://api.whatsapp.com/send?phone=${cell}&text=${message}`;

  return (
    <ButtonWhatsApp href={apiWhats} target='_blank'>
      <RiWhatsappLine />
    </ButtonWhatsApp>
  )
}
