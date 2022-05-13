export function formatValue(value: number) {
  const valueFormatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

  return valueFormatted;
}
