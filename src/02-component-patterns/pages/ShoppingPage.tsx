import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '02-component-patterns/components'
import '../styles/custom-styles.css';

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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className='custom-image'/>
          <ProductCard.Title className="text-white text-bold"/>
          <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className='custom-image' style={{ boxShadow: '10px, 9px, 0, rgba(0, 0, 0, .2)' }}/>
          <ProductTitle className="text-white text-bold"/>
          <ProductButtons className="custom-buttons"/>
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: 'rgb(52, 113, 133)' }}>
          <ProductImage style={{ boxShadow: '10px, 9px, 0, rgba(0, 0, 0, .2)' }}/>
          <ProductTitle style={{ fontWeight: 'bold' }}/>
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }}/>
        </ProductCard>
      </div>
    </div>
  )
}
