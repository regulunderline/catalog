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
    <div>
      <input
        onChange={handleChange}
      />
    </div>
  )
}

export default Search