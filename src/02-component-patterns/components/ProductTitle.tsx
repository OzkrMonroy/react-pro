import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '02-component-patterns/styles/styles.module.css';

export const ProductTitle = ({name}: {name?: string}) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={styles.productDescription}>{name ? name : product.name}</span>
  )
}