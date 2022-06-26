import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "02-component-patterns/components";
import { products } from "02-component-patterns/data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <ProductCard
        product={product}
        className="bg-dark text-white"
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 15,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px, 9px, 0, rgba(0, 0, 0, .2)" }}
            />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <span>{count}</span>
          </>
        )}
      </ProductCard>
      {/* <div className="shopping-cart">
      </div> */}
    </div>
  );
};
