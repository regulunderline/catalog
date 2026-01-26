import { useEffect } from "react"
import { useSelector } from "react-redux"

import { useAppDispatch } from "../hooks/useAppDispatch"
import { fetchProducts } from "../reducers/productsReducer"

import type { StoreState } from "../store"

import Card from "./Card"
import Filter from "./Filter"
import Search from "./Search"
import { setPage } from "../reducers/pageReducer"

const Products = () => {
  const dispatch = useAppDispatch()

  const products = useSelector((state: StoreState) => state.products)
  const category = useSelector((state: StoreState) => state.category)
  const search = useSelector((state: StoreState) => state.search)
  const page = useSelector((state: StoreState) => state.page)

  useEffect(() => {
    dispatch(fetchProducts(13, page * 12))
  }, [dispatch, category, search, page])
  
  useEffect(() => {
    dispatch(setPage(0))
  }, [dispatch, category, search])

  useSelector(state => console.log(state))

  return (
    <div>
      <Search />
      <Filter />
      {products.slice(0, 12).map(p => <Card key={p.id} product={p}/>)}
      <div>
        {page > 0 && <button onClick={() => dispatch(setPage(page - 1))}>back</button>}
        {products.length > 12 && <button onClick={() => dispatch(setPage(page + 1))}>next page</button>}
      </div>
    </div>
  )
}

export default Products