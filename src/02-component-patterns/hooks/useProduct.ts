import { useState } from 'react'

export const useProduct = (initialCounter = 0) => {
  const [counter, setCounter] = useState(initialCounter);

  const increaseBy = (amount: number) => {
    setCounter(prev => Math.max(prev + amount, 0));
  }

  return {
    counter,
    increaseBy
  }
}
