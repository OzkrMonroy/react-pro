import { onChangeArgs, Product } from '02-component-patterns/interfaces/productInterfaces';
import { useEffect, useState } from 'react';

interface UseProductProps {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  initialCounter?: number;
}

export const useProduct = ({ product, onChange, initialCounter = 0 }: UseProductProps) => {
  const [counter, setCounter] = useState(initialCounter);

  const increaseBy = (amount: number) => {
    const newCounter = Math.max(counter + amount, 0)
    setCounter(newCounter);
    onChange && onChange({ value: newCounter, product });
  }

  useEffect(() => {
    setCounter(initialCounter);
  }, [initialCounter]);

  return {
    counter,
    increaseBy
  }
}
