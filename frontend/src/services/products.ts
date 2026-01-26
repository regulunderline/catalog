import axios from 'axios'

import { API_URL } from '../utils/config'

import type { Product } from '../types/products'

export interface GetAllArgs {
  title?: string
  categoryId?: number,
  limit?: number,
  offset?: number,
}

export type GetAllSortedArgs = GetAllArgs & {
  sortBy: 'price' | 'title'
  desc?: boolean
}

const getAll = async ({
  title,
  categoryId,
  limit,
  offset,
} : GetAllArgs) => {
  let url = `${API_URL}/products`
  let symbol = '?'
  if(categoryId){
    url += `${symbol}categoryId=${categoryId}`
    symbol = '&'
  }
  if(title){
    url += `${symbol}title=${title}`
    symbol = '&'
  }
  if(limit){
    url += `${symbol}limit=${limit}`
    symbol = '&'
  }
  if(offset){
    url += `${symbol}offset=${offset}`
    symbol = '&'
  }

  console.log(url)

  const response = await axios.get(url)
  if(response.status !== 200){
    throw new Error('couldn\'t get products')
  }

  return response.data as Product[]
}

const getAllSorted = async ({
  title,
  categoryId,
  limit,
  offset,
  sortBy,
  desc
} : GetAllSortedArgs) => {
  const products = await getAll({ categoryId, title })

  const sortedProducts = products.sort((a, b) => 
    sortBy === 'price'
      ? a.price - b.price
      : a.title.localeCompare(b.title)
  )

  return desc 
    ? sortedProducts.reverse().slice(offset, limit ? offset ? limit + offset : limit : undefined)
    : sortedProducts.slice(offset, limit ? offset ? limit + offset : limit : undefined)
}

export default {
  getAll,
  getAllSorted
}