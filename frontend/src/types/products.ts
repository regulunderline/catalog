export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export type CartProduct = Product & { count: number }

// export interface Product {
//   id: number
//   title: string
//   price: number
//   description: string
//   category: {
//       id: number
//       name: string
//       image: string
//       slug: string
//     }
//   images: string[]
// }