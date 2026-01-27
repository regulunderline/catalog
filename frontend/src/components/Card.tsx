import { useAppDispatch } from "../hooks/useAppDispatch";
import { addProductToCart } from "../reducers/cartReducer";
import { newNotification } from "../reducers/notificationReducer";
import type { Product } from "../types/products";

const Card = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch()

  const inStock = true

  const handleAddToCart = () => {
    dispatch(addProductToCart(product))
    dispatch(newNotification('добавлено в корзину', 'success', 5))
  }

  return (
    <div>
      <img src={product.image} alt="product image" style={{ width: 50 }} /> <strong>{product.title}</strong>
      <p>цена: {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      <p>{product.description}</p>
      <div><button onClick={handleAddToCart}>Добавить в корзину</button> {inStock && <>Есть на складе</>}</div> 
    </div>
  )
}

export default Card