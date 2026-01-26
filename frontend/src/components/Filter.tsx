import { useEffect } from "react"
import { useSelector } from "react-redux"

import { useAppDispatch } from "../hooks/useAppDispatch"
import { setCategory } from "../reducers/categoryReducer"
import { initializeCategories } from "../reducers/categoriesReducer"
import type { StoreState } from "../store"

const Filter = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setCategory({ name: 'all', id: null }))
    dispatch(initializeCategories())
  }, [dispatch])

  const categories = useSelector((state: StoreState) => state.categories)

  return (
    <div>
      <label>
        all
        <input
          type="radio"
          name="filter"
          onChange={() => {
            dispatch(setCategory({ name: 'all', id: null }))}
          }
          defaultChecked
        />
      </label>
      
      {categories.map((c, i) => 
        <label key={i}>
          {c.name}
          <input
            type="radio"
            name="filter"
            onChange={() => dispatch(setCategory(c))}
          />
        </label>
      )}
    </div>
  )
}

export default Filter