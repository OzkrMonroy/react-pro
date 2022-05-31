import { Product } from '02-component-patterns/interfaces/productInterfaces';

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

export const products: Product[] = [product, product2];

