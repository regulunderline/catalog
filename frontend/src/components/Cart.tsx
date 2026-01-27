import { useSelector } from "react-redux"

import type { StoreState } from "../store"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { setCart } from "../reducers/cartReducer"
import CartCard from "./CartCard"

const Cart = () => {
  const dispatch = useAppDispatch()

  const cart = useSelector((state: StoreState) => state.cart)

  return (
    <div>
      <h1>Cart</h1>
      {cart.length 
        ? <div>
            {cart.map(p => <CartCard key={p.id} product={p} />)}
            <button onClick={() => dispatch(setCart([]))}>clear</button>
          </div>
        : <div>cart is empty</div>
      }
      <div>
        total: {cart.reduce((s, c) => s + c.price * c.count, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </div>
    </div>
  )
}

export default Cart