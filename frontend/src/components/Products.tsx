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
import { setLoading } from "../reducers/loadingReducer"
import SkeletonCard from "./SkeletonCard"

const Products = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
  }, [dispatch])

  const loading = useSelector((state: StoreState) => state.loading)
  const products = useSelector((state: StoreState) => state.products)
  const category = useSelector((state: StoreState) => state.category)
  const search = useSelector((state: StoreState) => state.search)
  const order = useSelector((state: StoreState) => state.order)
  const page = useSelector((state: StoreState) => state.page)

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setPage(0))
      dispatch(fetchProducts())
        .then(() => {
          dispatch(setLoading(false))
        })
    }
    
    fetchData()
  }, [dispatch, category, search, order])

  if(loading) return (
    <div>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  )

  return (
    <div className="bg-white">
      <div>
        <Search />
        <OrderSelection />
        <Filter />
      </div>

      {!products.length && <div className="heading text-gray-900 font-semibold">No Products found</div>}

      {products.slice(page * 12, page * 12 + 12).map(p => <Card key={p.id} product={p}/>)}
      <div>
        {page > 0 && 
          <button
            className="button-blue"
            onClick={() => dispatch(setPage(page - 1))}
          >
            back
          </button>
        }

        {products.length > (page + 1) * 12 &&
          <button 
            className="button-blue"
            onClick={() => dispatch(setPage(page + 1))}
          >
            next page
          </button>
        }
      </div>
    </div>
  )
}

export default Products