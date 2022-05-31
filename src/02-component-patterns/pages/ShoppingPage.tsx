import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '02-component-patterns/components'
import { Product } from '02-component-patterns/interfaces/productInterfaces';
import { useState } from 'react';
import '../styles/custom-styles.css';

interface ProductInCart extends Product {
  quantity: number;
}

interface ShoppingCartState {
  [key: string]: ProductInCart;
}

const product: Product = {
  id: '1',
  name: 'Coffee Mug',
  img: './coffee-mug.png'
}
const product2: Product = {
  id: '2',
  name: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
}

const products: Product[] = [product, product2];

export const ShoppingPage = () => {
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

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            onChange={onProductCountChange}
            count={shoppingCart[product.id]?.quantity || 0}
          >
            <ProductImage className='custom-image' style={{ boxShadow: '10px, 9px, 0, rgba(0, 0, 0, .2)' }} />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard product={product} className="bg-dark text-white" style={{ width: '200px' }} key={key} onChange={onProductCountChange} count={product.quantity}>
            <ProductImage className='custom-image' style={{ boxShadow: '10px, 9px, 0, rgba(0, 0, 0, .2)' }} />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
