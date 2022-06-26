import { CSSProperties, ReactElement } from "react";

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}

export interface ProductCardProps {
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  product: Product;
  count?: number;
  onChange?: (args: onChangeArgs) => void;
  initialValues?: InitialValues;
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

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}
export interface ProductContextProps {
  counter: number;
  product: Product;
  maxCount?: number;
  increaseBy: (value: number) => void;
}

export interface onChangeArgs {
  value: number;
  product: Product;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
