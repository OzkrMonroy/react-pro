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
      const productInCart = oldShoppingCart[id] || { ...product, quantity: 0 };
      if (Math.max(productInCart.quantity + value, 0) > 0) {
        productInCart.quantity += value;

        return { ...oldShoppingCart, [id]: productInCart };
      }
      const { [id]: toDelete, ...rest } = oldShoppingCart;
      return rest;
      // if (value === 0) {
      //   const { [id]: toDelete, ...rest } = oldShoppingCart;
      //   return rest;
      // }
      // return { ...oldShoppingCart, [id]: { ...product, quantity: value } }
    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}
