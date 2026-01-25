import type { UnknownAction } from "redux"

import type { Product } from "./products"

export interface SetProductsAction extends UnknownAction {
  type: string
  payload: Product[]
}