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
      <h1 className="text-7xl font-bold text-gray-900 text-center">Cart</h1>
      {cart.length 
        ? <div>
            {cart.map(p => <CartCard key={p.id} product={p} />)}
            <button className="button-blue" onClick={() => dispatch(setCart([]))}>clear</button>
          </div>
        : <div>cart is empty</div>
      }
      <div className="heading text-gray-900">
        Total: {cart.reduce((s, c) => s + c.price * c.count, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </div>
    </div>
  )
}

export default Cart