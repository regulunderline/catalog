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
    <div className="">
      <label className="select-none ms-2 text-sm font-medium text-sm">
        all
        <input
          type="radio"
          name="filter"
          onChange={() => {
            dispatch(setCategory('all'))}
          }
          defaultChecked
          className="radio"
        />
      </label>
      
      {categories.map((c, i) => 
        <label key={i} className="select-none ms-2 text-sm font-medium text-sm">
          {c}
          <input
            type="radio"
            name="filter"
            onChange={() => dispatch(setCategory(c))}
            className="radio"
          />
        </label>
      )}
    </div>
  )
}

export default Filter