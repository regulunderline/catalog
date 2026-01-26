import type { UnknownAction } from "redux"

import type { Product } from "./products"
import type { Order } from "./other"

export interface SetProductsAction extends UnknownAction {
  type: string
  payload: Product[]
}

export interface SetCategoryAction extends UnknownAction {
  type: string
  payload: string
}

export interface SetCategoriesAction extends UnknownAction {
  type: string
  payload: string[]
}

export interface SetSearchAction extends UnknownAction {
  type: string
  payload: string
}

export interface SetPageAction extends UnknownAction {
  type: string
  payload: number
}

export interface SetOrderAction extends UnknownAction {
  type: string
  payload: Order
}