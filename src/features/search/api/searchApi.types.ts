export type VideosResponseType = {
  items: VideosItemType[]
  pageInfo: PageInfoType
}

export type VideosItemType = {
  id: string
  snippet: VideoType
  statistics: StatisticsType
}

export type PageInfoType = {
  pagination: PaginationType
  resultsPerPage: number
  totalResults: number
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
  medium: ImageType
}

export type VideoType = {
  channelId: string
  description: string
  title: string
}

export type StatisticsType = {
  commentCount: string
  favouriteCount: string
  likeCount: string
  viewCount: string
}
