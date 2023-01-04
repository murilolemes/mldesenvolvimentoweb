import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import antarctica350Png from '../assets/imgShop/antarctica350.png';
import brahma350Png from '../assets/imgShop/brahma350.png';
import coca2lPng from '../assets/imgShop/coca2l.png';
import coca350Png from '../assets/imgShop/coca350.png';
import fanta2lPng from '../assets/imgShop/fanta2l.png';
import fanta350Png from '../assets/imgShop/fanta350.png';
import guarana350Png from '../assets/imgShop/guarana350.png';
import sprite2lPng from '../assets/imgShop/sprite2l.png';


interface Products {
  id: number;
  imgProduct: string;
  name: string;
  firstValue: number;
  lastValue: number;
  qntd: number;
  total: number;
  qntdTotal: number;
}

interface ShopProviderProps {
  children: ReactNode;
}

interface ShopContexData {
  products: Products[];
  cartProducts: Products[];
  incrementItem: (itensProduct: number) => Promise<void>;
  decrementItem: (itensProduct: number) => Promise<void>;
  incrementItemCart: (itensProduct: number) => Promise<void>;
  decrementItemCart: (itensProduct: number) => Promise<void>;
  addCart: (addProduct: Products) => Promise<void>;
  removeItemCart: (removeProduct: number) => Promise<void>;
}

const ShopContext = createContext<ShopContexData>(
  {} as ShopContexData
)

const arrayProducts = [
  {
    id: 1,
    imgProduct: coca350Png,
    name: 'Refrigerante Coca-Cola 350ml',
    firstValue: 4.99,
    lastValue: 4.49,
    qntd: 0,
    qntdTotal: 3,
    total: 0,
  },
  {
    id: 2,
    imgProduct: fanta350Png,
    name: 'Refrigerante Fanta 350ml',
    firstValue: 5.99,
    lastValue: 5.59,
    qntd: 0,
    qntdTotal: 6,
    total: 0,
  },
  {
    id: 3,
    imgProduct: guarana350Png,
    name: 'Refrigerante Guaraná Antarctica 350ml',
    firstValue: 3.99,
    lastValue: 3.55,
    qntd: 0,
    qntdTotal: 2,
    total: 0,
  },
  {
    id: 4,
    imgProduct: brahma350Png,
    name: 'Cerveja Brahma 350ml',
    firstValue: 4.49,
    lastValue: 3.09,
    qntd: 0,
    qntdTotal: 5,
    total: 0,
  },
  {
    id: 5,
    imgProduct: antarctica350Png,
    name: 'Cerveja Antarctica 350ml',
    firstValue: 4.79,
    lastValue: 4.35,
    qntd: 0,
    qntdTotal: 4,
    total: 0,
  },
  {
    id: 6,
    imgProduct: coca2lPng,
    name: 'Refrigerante Coca-Cola 2 litros',
    firstValue: 4.65,
    lastValue: 4.28,
    qntd: 0,
    qntdTotal: 3,
    total: 0,
  },
  {
    id: 7,
    imgProduct: fanta2lPng,
    name: 'Refrigerante Fanta 2 litros',
    firstValue: 4.99,
    lastValue: 4.65,
    qntd: 0,
    qntdTotal: 5,
    total: 0,
  },
  {
    id: 8,
    imgProduct: sprite2lPng,
    name: 'Refrigerante Sprite 2 litros',
    firstValue: 4.99,
    lastValue: 3.59,
    qntd: 0,
    qntdTotal: 6,
    total: 0,
  }
];

export function ShopProvider({ children }: ShopProviderProps) {
  localStorage.setItem('@ShopProducts:ShopProd', JSON.stringify(arrayProducts));

  const [products, setProducts] = useState<Products[]>(() => {
    const storageProducts = localStorage.getItem('@ShopProducts:ShopProd');

    if (storageProducts) {
      return JSON.parse(storageProducts);
    }

    return [];
  })

  const [cartProducts, setCartProducts] = useState<Products[]>(() => {
    const storageCartProducts = localStorage.getItem('@ShopProducts:cartProducts');

    if (storageCartProducts) {
      return JSON.parse(storageCartProducts);
    }

    return [];
  })

  async function incrementItem(itensProduct: number) {
    try {
      const updateProducts = [...products];
      const productExists = updateProducts.find(product => product.id === itensProduct);

      if (productExists) {
        const itensProduct = productExists.qntd + 1;
        productExists.total = itensProduct * productExists.lastValue;

        if (itensProduct > productExists.qntdTotal) {
          throw (Error);
        }

        productExists.qntd = itensProduct;

        setProducts(updateProducts);
      } else {
        toast.error('Erro inesperado! Produto não encontrado');
      }
    } catch (error) {
      toast.error('Quantidade Indisponível!');
    }
  }

  async function decrementItem(itensProduct: number) {
    try {
      const updateProducts = [...products];
      const productExists = updateProducts.find(product => product.id === itensProduct);

      if (productExists) {
        const itensProduct = productExists.qntd - 1;
        productExists.total = itensProduct * productExists.lastValue;

        if (itensProduct < 0) {
          throw (Error);
        }

        productExists.qntd = itensProduct;

        setProducts(updateProducts)
      } else {
        toast.error('Erro inesperado! Produto não encontrado');
      }
    } catch (error) {
      toast.error('Quantidade Indisponível!')
    }
  }

  async function incrementItemCart(itensProduct: number) {
    try {
      const updateProducts = [...cartProducts];
      const productExists = updateProducts.find(product => product.id === itensProduct);

      if (productExists) {
        const itensProduct = productExists.qntd + 1;
        productExists.total = itensProduct * productExists.lastValue;

        if (itensProduct > productExists.qntdTotal) {
          throw (Error);
        }

        productExists.qntd = itensProduct;

        setCartProducts(updateProducts);
        localStorage.setItem('@ShopProducts:cartProducts', JSON.stringify(updateProducts));
      } else {
        toast.error('Erro inesperado! Produto não encontrado');
      }
    } catch (error) {
      toast.error('Quantidade Indisponível!');
    }
  }

  async function decrementItemCart(itensProduct: number) {
    try {
      const updateProducts = [...cartProducts];
      const productExists = updateProducts.find(product => product.id === itensProduct);

      if (productExists) {
        const itensProduct = productExists.qntd - 1;
        productExists.total = itensProduct * productExists.lastValue;

        if (itensProduct < 0) {
          throw (Error);
        }

        productExists.qntd = itensProduct;

        setCartProducts(updateProducts)
        localStorage.setItem('@ShopProducts:cartProducts', JSON.stringify(updateProducts));
      } else {
        toast.error('Erro inesperado! Produto não encontrado');
      }
    } catch (error) {
      toast.error('Quantidade Indisponível!')
    }
  }

  async function addCart(addProduct: Products) {
    try {
      const updateCartProducts = [...cartProducts];
      const cartProductExists = updateCartProducts.find(product => product.id === addProduct.id);

      if (cartProductExists) {
        cartProductExists.qntd = addProduct.qntd;
        cartProductExists.total = addProduct.total;

        toast.success('Quantidade do produto alterada com sucesso!');
      } else {
        updateCartProducts.push(addProduct);

        toast.success('Produto adicionado com sucesso!');
      }

      setCartProducts(updateCartProducts);
      localStorage.setItem('@ShopProducts:cartProducts', JSON.stringify(updateCartProducts));
    } catch (error) {
      toast.error('Erro ao adicionar o produto!');
    }
  }

  async function removeItemCart(removeProduct: number) {
    try {
      const updateCartProducts = [...cartProducts];
      const cartProductIndex = updateCartProducts.findIndex(
        product => product.id === removeProduct
      );

      updateCartProducts.splice(cartProductIndex, 1);
      toast.success('Produto removido com sucesso!')
      setCartProducts(updateCartProducts);
      localStorage.setItem('@ShopProducts:cartProducts', JSON.stringify(updateCartProducts));
    } catch (error) {
      toast.error('Erro ao remover o produto!');
    }
  }

  return (
    <ShopContext.Provider value={{
      products,
      cartProducts,
      incrementItem,
      decrementItem,
      incrementItemCart,
      decrementItemCart,
      addCart,
      removeItemCart
    }}>
      {children}
    </ShopContext.Provider>
  )
}

export function useShop(): ShopContexData {
  const context = useContext(ShopContext);

  return context;
}
