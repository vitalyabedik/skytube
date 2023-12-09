import React, { memo } from 'react'
import YouTube from 'react-youtube'

type Props = {
  isGrid: boolean
  videoId: string
}

export const YoutubeVideo: React.FC<Props> = memo(({ isGrid, videoId }) => {
  const height = isGrid ? '138' : '88'
  const width = isGrid ? '245' : '157'

  const opts = {
    height,
    playerVars: {
      autoplay: 0,
    },
    width,
  }

  return <YouTube opts={opts} videoId={videoId} />
})
