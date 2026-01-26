import type { Product } from "../types/products";

const Card = ({ product }: { product: Product }) => {
  const inStock = true

  return (
    <div>
      <img src={product.image} alt="product image" style={{ width: 50 }} /> <strong>{product.title}</strong>
      <p>цена: {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      <p>{product.description}</p>
      <div><button>Добавить в корзину</button> {inStock && <>Есть на складе</>}</div> 
    </div>
  )
}

export default Card