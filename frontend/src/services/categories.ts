import axios from 'axios'

import { API_URL } from '../utils/config'

import type { Category } from '../types/other'

const getAll = async (): Promise<Category[]> => {
  const response = await axios.get(`${API_URL}/categories`)
  if(response.status !== 200){
    throw new Error('couldn\'t get products')
  }

  const categories: Category[] = response.data.map(({ id, name }: Category) => {return { id, name }})

  return categories
}

export default {
  getAll,
}