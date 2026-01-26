import { useEffect } from "react"
import { useSelector } from "react-redux"

import { useAppDispatch } from "../hooks/useAppDispatch"
import { setCategory } from "../reducers/categoryReducer"
import { initializeCategories } from "../reducers/categoriesReducer"
import type { StoreState } from "../store"

const Filter = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setCategory('all'))
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
            dispatch(setCategory('all'))}
          }
          defaultChecked
        />
      </label>
      
      {categories.map((c, i) => 
        <label key={i}>
          {c}
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