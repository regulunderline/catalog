import { useEffect, useState } from "react"

import productsService from "./services/products"
import { type Product } from "./types/products"

const App = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productsService.getAll()

      setProducts(products)
    }

    fetchProducts()
  }, [])
  return (
    <div>
      {products.map(p => <div>{p.title}</div>)}
    </div>
  )
}

export default App