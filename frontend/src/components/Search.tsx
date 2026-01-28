import type { ChangeEvent } from "react"
import { useDebouncedCallback } from "use-debounce"

import { useAppDispatch } from "../hooks/useAppDispatch"
import { setSearch } from "../reducers/searchReducer"

const Search = () => {
  const dispatch = useAppDispatch()

  const debounced = useDebouncedCallback(
    (value: string) => {
      dispatch(setSearch(value))
    },
    1000
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => 
    debounced(event.target.value)

  return (
    <>
      <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-gray-300 sr-only">
        search
      </label>
      <div className="relative">
        <input 
          id="search"
          className="input-search" 
          placeholder="Search"
          onChange={handleChange}
        />
    </div>
      
    </>
  )
}

export default Search