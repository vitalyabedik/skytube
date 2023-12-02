import { sortByType } from '@/features'

export type GetVideosResponseType = {
  items: VideosItemType[]
  pageInfo: PageInfoType
  queryId: string
}

export type GetVideosParamsType = {
  countResult?: string
  nextPageToken?: null | string
  prevPageToken?: null | string
  query: string
  sortBy?: sortByType
}

export type GetQueryParamsType = {
  countResult?: null | string
  nextPageToken?: null | string
  prevPageToken?: null | string
  sortBy?: null | sortByType
}

export type PageInfoType = {
  pagination: PaginationType
  resultsPerPage: string
  totalResults: string
}

export type VideosItemType = {
  id: string
  snippet: VideoType
  statistics: StatisticsType
}

export type PaginationType = {
  nextPageToken: string
  prevPageToken: null | string
}

export type ImageType = {
  height: number
  url: string
  width: number
}

export type VideoThumbnailsType = {
  default: ImageType
  high: ImageType
  maxres: ImageType
  medium: ImageType
  standard: ImageType
}

export type VideoType = {
  channelId: string
  description: string
  thumbnails: VideoThumbnailsType
  title: string
}

export type StatisticsType = {
  commentCount: string
  favouriteCount: string
  likeCount: string
  viewCount: string
}
