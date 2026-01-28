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
    <div className="card">
      <div className="flex flex-row items-center justify-start">
        <img src={product.image} alt="product image" className="w-1/5 h-1/5 mr-auto" />

        <span className="heading mr-auto">{product.title}</span>
      </div>
      
      <p className="mb-3 text-xl font-semibold tracking-tight text-white leading-8">
        {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </p>

      <p>{product.description}</p>

      <div>
        <button className="button-blue" onClick={handleAddToCart}>
          Добавить в корзину
        </button>
        
        {inStock &&
          <>Есть на складе</>}
      </div> 
    </div>
  )
}

export default Card