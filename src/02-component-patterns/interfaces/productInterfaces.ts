import { ReactElement } from 'react';

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element,
  Title: ({ name }: {
    name?: string | undefined;
  }) => JSX.Element;
  Image: ({ img, name }: {
    img?: string | undefined;
    name?: string | undefined;
  }) => JSX.Element;
  Buttons: () => JSX.Element;
}

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}
export interface Product {
  id: string;
  name: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}