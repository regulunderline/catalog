import axios from 'axios'

import { API_URL } from '../utils/config'

const getAll = async (): Promise<string[]> => {
  const response = await axios.get(`${API_URL}/categories`)
  if(response.status !== 200){
    throw new Error('couldn\'t get products')
  }

  return response.data
}

export default {
  getAll,
}