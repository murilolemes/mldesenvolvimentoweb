import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { useShop } from "../../../hooks/ShopContext"
import { formatValue } from "../../../utils/formatValue";

import { ContainerInputSearch } from './styles';

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

export function DivSearchProduct() {
  const { searchProduct } = useShop();
  const [search, setSearch] = useState('')

  return (
    <ContainerInputSearch>
      <form action=''>
        <input
          name="search"
          placeholder='Pesquisar'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={() => searchProduct(search)}>
          <FaSearch size={18} />
        </button>
      </form>
    </ContainerInputSearch>
  )
}
