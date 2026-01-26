import { useEffect } from "react"
import { useSelector } from "react-redux"

import { useAppDispatch } from "../hooks/useAppDispatch"
import { fetchProducts } from "../reducers/productsReducer"

import type { StoreState } from "../store"

import Card from "./Card"
import Filter from "./Filter"
import Search from "./Search"
import { setPage } from "../reducers/pageReducer"
import OrderSelection from "./OrderSelection"

const Products = () => {
  const dispatch = useAppDispatch()

  const products = useSelector((state: StoreState) => state.products)
  const category = useSelector((state: StoreState) => state.category)
  const search = useSelector((state: StoreState) => state.search)
  const order = useSelector((state: StoreState) => state.order)
  const page = useSelector((state: StoreState) => state.page)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch, category, search, order])
  
  useEffect(() => {
    dispatch(setPage(0))
  }, [dispatch, category, search, order])

  useSelector(state => console.log(state))

  return (
    <div>
      <OrderSelection />
      <Search />
      <Filter />
      {products.slice(page * 12, page * 12 + 12).map(p => <Card key={p.id} product={p}/>)}
      <div>
        {page > 0 && <button onClick={() => dispatch(setPage(page - 1))}>back</button>}
        {products.length > (page + 1) * 12 && <button onClick={() => dispatch(setPage(page + 1))}>next page</button>}
      </div>
    </div>
  )
}

export default Products