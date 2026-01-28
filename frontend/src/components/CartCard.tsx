import { BsCartDashFill, BsCartPlusFill, BsCartXFill } from "react-icons/bs";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { increaseCountInCart, removeFromCart } from "../reducers/cartReducer";
import type { CartProduct } from "../types/products";

const CartCard = ({ product }: { product: CartProduct }) => {
  const dispatch = useAppDispatch()

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
        <span className="relative -top-1 h-10 w-10 mt-2 mb-20 mx-5 text-2xl">In cart: <span className="m-2">
          {product.count}
        </span></span>
        <button onClick={() => product.count > 1 
          ? dispatch(increaseCountInCart({ id: product.id, increaseBy: -1 }))
          : dispatch(removeFromCart({ id: product.id }))
        }>
          <div className="cart-card-icon">
            <BsCartDashFill size="30" />
          </div>
        </button>
        <button onClick={() => dispatch(increaseCountInCart({ id: product.id, increaseBy: 1 }))}>
          <div className="cart-card-icon">
            <BsCartPlusFill size="30" />
          </div>
          </button>
        <button onClick={() => dispatch(removeFromCart({ id: product.id }))}>
          <div className="cart-card-icon">
            <BsCartXFill size="30" />
          </div>
        </button>
      </div> 
    </div>
  )
}

export default CartCard