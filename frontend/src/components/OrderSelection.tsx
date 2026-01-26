import type { ChangeEvent } from "react"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { setOrder } from "../reducers/orderReducer"

const OrderSelection = () => {
  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortBy = e.target.value.slice(0, 5)
    if(!(sortBy === 'title' || sortBy === 'price')){
      throw new Error('Something went wrong')
    }

    const desc = e.target.value.includes('desc')

    dispatch(setOrder({ sortBy, desc }))
  }

  return (
    <select onChange={handleChange}>
      <option value='title'> title (A-Z)</option>
      <option value='title desc'> title (Z-A)</option>
      <option value='price'> cheap first</option>
      <option value='price desc'> expensive first</option>
    </select>
  )
}

export default OrderSelection