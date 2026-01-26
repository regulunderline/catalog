export type Category = string

export interface Order {
  sortBy: 'price' | 'title'
  desc?: boolean
}

export interface GetAllArgs {
  category?: string,
  desc?: boolean
}

export type GetAllSortedArgs = GetAllArgs & Order & {
  title?: string
}