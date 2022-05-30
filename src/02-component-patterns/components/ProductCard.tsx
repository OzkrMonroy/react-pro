import { useProduct } from '02-component-patterns/hooks/useProduct';
import styles from '02-component-patterns/styles/styles.module.css';
import noImage from '02-component-patterns/assets/no-image.jpg';

export const ProductCard = () => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      {/* <img src="./coffee-mug.png" alt="Coffee mug" className={styles.productImg} /> */}
      <img src={noImage} alt="Coffee mug" className={styles.productImg} />
      <span className={styles.productDescription}>Coffee mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>-</button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>+</button>
      </div>
    </div>
  )
}
