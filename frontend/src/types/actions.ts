import type { UnknownAction } from "redux"

import type { CartProduct, Product } from "./products"
import type { Notification, Order } from "./other"

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

export interface SetCartAction extends UnknownAction {
  type: string
  payload: CartProduct[]
}

export interface IncreaseCountInCartAction extends UnknownAction {
  type: string
  payload: {
    id: number
    increaseBy: number
  }
}

export interface SetCountInCartAction extends UnknownAction {
  type: string
  payload: {
    id: number
    count: number
  }
}

export interface AddProductToCartAction extends UnknownAction {
  type: string
  payload: Product
}

export interface RemoveFromCartAction extends UnknownAction {
  type: string
  payload: { id: number }
}

export interface SetNotificationAction extends UnknownAction {
  type: string
  payload: Omit<Notification, 'id'> | null
} 