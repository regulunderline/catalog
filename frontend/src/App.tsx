import { useEffect } from "react"

import { useAppDispatch } from "./hooks/useAppDispatch"
import { initializeProducts } from "./reducers/productsReducer"
import { useSelector } from "react-redux"
import type { StoreState } from "./store"

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeProducts())
  }, [dispatch])

  const products = useSelector((state: StoreState) => state.products)
  return (
    <div>
      {products.map(p => <div>{p.title}</div>)}
    </div>
  )
}

export default App