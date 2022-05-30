import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import { ProductTitleProps } from '02-component-patterns/interfaces/productInterfaces';
import styles from '02-component-patterns/styles/styles.module.css';

export const ProductTitle = ({ name, className }: ProductTitleProps) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={`${styles.productDescription} ${className}`}>{name ? name : product.name}</span>
  )
}