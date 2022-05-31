import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '02-component-patterns/components'
import { products } from '02-component-patterns/data/products';
import { useShoppingCart } from '02-component-patterns/hooks/useShoppingCart';
import '../styles/custom-styles.css';


export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            onChange={onProductCountChange}
            count={shoppingCart[product.id]?.quantity || 0}
          >
            <ProductImage className='custom-image' style={{ boxShadow: '10px, 9px, 0, rgba(0, 0, 0, .2)' }} />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard product={product} className="bg-dark text-white" style={{ width: '200px' }} key={key} onChange={onProductCountChange} count={product.quantity}>
            <ProductImage className='custom-image' style={{ boxShadow: '10px, 9px, 0, rgba(0, 0, 0, .2)' }} />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
