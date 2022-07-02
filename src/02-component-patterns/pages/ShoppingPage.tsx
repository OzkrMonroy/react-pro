import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "02-component-patterns/components";
import { products } from "02-component-patterns/data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <ProductCard
        product={product}
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 15,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
      {/* <div className="shopping-cart">
      </div> */}
    </div>
  );
};
