import axios from 'axios'

import { API_URL } from '../utils/config'

import type { Product } from '../types/products'

const getAll = async () => {
  const response = await axios.get(API_URL)
  if(response.status !== 200){
    throw new Error('couldn\'t get products')
  }

  return response.data as Product[]
}

export default {
  getAll
}