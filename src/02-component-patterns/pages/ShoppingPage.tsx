import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '02-component-patterns/components'

const product = {
  id: '1',
  name: 'Coffee Mug',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductCard.Image/>
          <ProductCard.Title/>
          <ProductCard.Buttons/>
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage/>
          <ProductTitle/>
          <ProductButtons/>
        </ProductCard>
      </div>
    </div>
  )
}
