import { CSSProperties, ReactElement } from 'react';

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element,
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  product: Product;
}
export interface Product {
  id: string;
  img?: string;
  name: string;
}

export interface ProductTitleProps {
  className?: string;
  name?: string;
  style?: CSSProperties;
}

export interface ProductImageProps {
  className?: string;
  img?: string;
  name?: string;
  style?: CSSProperties;
}

export interface ProductButtonsProps { className?: string; style?: CSSProperties;}
export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}