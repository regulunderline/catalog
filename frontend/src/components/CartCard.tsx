import { useAppDispatch } from "../hooks/useAppDispatch";
import { increaseCountInCart, removeFromCart } from "../reducers/cartReducer";
import type { CartProduct } from "../types/products";

const CartCard = ({ product }: { product: CartProduct }) => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <img src={product.image} alt="product image" style={{ width: 50 }} /> <strong>{product.title}</strong>
      <p>цена: {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      <p>{product.description}</p>
      <div>
        {product.count}
        <button onClick={() => product.count > 1 
          ? dispatch(increaseCountInCart({ id: product.id, increaseBy: -1 }))
          : dispatch(removeFromCart({ id: product.id }))
        }>-1</button>
        <button onClick={() => dispatch(increaseCountInCart({ id: product.id, increaseBy: 1 }))}>+1</button>
        <button onClick={() => dispatch(removeFromCart({ id: product.id }))}>remove</button>
      </div> 
    </div>
  )
}

export default CartCard