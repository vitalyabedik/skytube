import React, { memo } from 'react'
import ReactPlayer from 'react-player'

import { GRID_HEIGHT, GRID_WIDTH, LIST_HEIGHT, LIST_WIDTH } from '@/common'
import { clsx } from 'clsx'

import s from './YoutubeVideo.module.scss'

type Props = {
  coverImage: string
  isGrid: boolean
  videoId: string
}

export const YoutubeVideo: React.FC<Props> = memo(({ coverImage, isGrid, videoId }) => {
  const height = isGrid ? GRID_HEIGHT : LIST_HEIGHT
  const width = isGrid ? GRID_WIDTH : LIST_WIDTH

  const ImageClasses = clsx(isGrid ? s.imageGrid : s.imageList)

  return (
    <ReactPlayer
      className={'react-player'}
      controls
      height={height}
      light={<img alt={'Thumbnail video'} className={ImageClasses} src={coverImage} />}
      url={`https://www.youtube.com/watch?v=${videoId}`}
      width={width}
    />
  )
})
