import {
  InitialValues,
  onChangeArgs,
  Product,
} from "02-component-patterns/interfaces/productInterfaces";
import { useEffect, useRef, useState } from "react";

interface UseProductProps {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  initialCounter?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  product,
  onChange,
  initialCounter = 0,
  initialValues,
}: UseProductProps) => {
  const [counter, setCounter] = useState<number>(0);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(initialValues?.count || initialCounter);
  }, [initialCounter, initialValues?.count]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const increaseBy = (amount: number) => {
    let newCounter = Math.max(counter + amount, 0);

    if (initialValues?.maxCount && newCounter > initialValues.maxCount) return;

    // if (initialValues?.maxCount) {
    //   newCounter = Math.min(newCounter, initialValues.maxCount);
    // }

    setCounter(newCounter);
    onChange && onChange({ value: newCounter, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || initialCounter);
  };

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.maxCount && counter === initialValues.maxCount,
    maxCount: initialValues?.maxCount,
    reset,
  };
};
