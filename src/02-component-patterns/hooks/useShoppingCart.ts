import { useState } from 'react';
import { Product } from '../interfaces/productInterfaces';

interface ProductInCart extends Product {
  quantity: number;
}

interface ShoppingCartState {
  [key: string]: ProductInCart;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartState>({});

  const onProductCountChange = ({ value, product }: { value: number; product: Product }) => {
    const { id } = product
    setShoppingCart(oldShoppingCart => {
      if (value === 0) {
        const { [id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }
      return { ...oldShoppingCart, [id]: { ...product, quantity: value } }
    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}
