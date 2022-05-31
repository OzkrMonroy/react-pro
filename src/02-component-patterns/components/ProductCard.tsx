import { createContext } from 'react';

import { useProduct } from '02-component-patterns/hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '02-component-patterns/interfaces/productInterfaces';
import styles from '02-component-patterns/styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ product, children, className, style, onChange, count }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({product, onChange, initialCounter: count});

  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage img={img} name={name} />
      <ProductTitle name={name} />
      <ProductsButtons counter={counter} increaseBy={increaseBy}/> */}
      </div>
    </Provider>
  )
}