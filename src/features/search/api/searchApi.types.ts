export type VideosResponseType = {
  etag: string
  items: VideosItemType[]
  kind: string
  nextPageToken: string
  pageInfo: PageInfoType
  regionCode: string
}

export type PageInfoType = {
  resultsPerPage: number
  totalResults: number
}

export type VideosIdType = {
  kind: string
  videoId: string
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
  channelTitle: string
  description: string
  liveBroadcastContent: string
  publishTime: string
  publishedAt: string
  thumbnails: VideoThumbnailsType
  title: string
}

export type VideosItemType = {
  etag: string
  id: VideosIdType
  kind: string
  snippet: VideoType
}
