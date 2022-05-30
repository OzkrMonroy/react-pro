import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import { ProductButtonsProps } from '02-component-patterns/interfaces/productInterfaces';
import styles from '02-component-patterns/styles/styles.module.css';

export const ProductButtons = ({ className } : ProductButtonsProps) => {
  const { counter, increaseBy } = useContext(ProductContext);
  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>+</button>
    </div>
  )
}