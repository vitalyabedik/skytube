export type GetFavouritesResponseType = FavouriteType[]

export type FavouriteType = {
  id: string
  query: QueryType
}

export type QueryType = {
  maxCount: string
  sortBy: sortByType
  text: string
  title: string
}

export type sortByType = 'date' | 'rating' | 'relevance' | 'title' | 'viewCount'

export type CreateFavouriteBodyType = {
  body: CreateBodyType
  id: string
}

export type CreateBodyType = {
  maxCount: number
  request: string
  sortBy: sortByType
  title: string
}

export type CreateFavouriteResponseType = {
  cratedAt: string
  data: CreateBodyType
  id: string
  queryId: string
  updatedAt: string
}

export type UpdateFavouriteBodyType = Omit<CreateFavouriteBodyType, 'request'>

export type UpdateFavouriteResponseType = Omit<CreateBodyType, 'request'>

export type RemoveFavouriteResponseType = {
  countDeleted: number
  message: string
}
