import axios from 'axios'

import { API_URL } from '../utils/config'

import type { Product } from '../types/products'
import type { GetAllArgs, GetAllSortedArgs } from '../types/other'

const getAll = async ({
  category,
  desc
} : GetAllArgs) => {
  let url = `${API_URL}`
  if(category) url += `/category/${category}`
  if(desc) url += '?sort=desc'

  const response = await axios.get(url)
  if(response.status !== 200){
    throw new Error('couldn\'t get products')
  }

  return response.data as Product[]
}

const getAllSorted = async ({
  title = '',
  category,
  sortBy,
  desc
} : GetAllSortedArgs) => {
  const products = await getAll({ category })

  const sortedProducts = products
    .filter(p => p.title.toLowerCase().includes(title.toLowerCase()))
    .sort((a, b) => 
      sortBy === 'price'
        ? a.price - b.price
        : a.title.localeCompare(b.title)
    )

  return desc 
    ? sortedProducts.reverse()
    : sortedProducts
}

export default {
  getAll,
  getAllSorted
}