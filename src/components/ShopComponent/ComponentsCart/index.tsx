import { useShop } from "../../../hooks/ShopContext"
import { formatValue } from "../../../utils/formatValue";

export function ValueTotal() {
  const { cartProducts } = useShop();

  const somaValue = cartProducts.reduce((accumulator, product) =>
    accumulator + product.total, 0
  );

  return (
    <span>{formatValue(somaValue)}</span>
  )
}

export function QntdItens() {
  const { cartProducts } = useShop();
  return (
    <span>{cartProducts.length}</span>
  )
}
