interface ValueProps {
  value: number;
}

export function formatValue({ value }: ValueProps) {
  const valueFormatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

  return valueFormatted;
}
