import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  children: any;
}

export function Tooltip({ title, className, children }: TooltipProps) {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}
