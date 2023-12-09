import React, { memo } from 'react'
import ReactPlayer from 'react-player'

import { clsx } from 'clsx'

import s from './YoutubeVideo.module.scss'

type Props = {
  coverImage: string
  isGrid: boolean
  videoId: string
}

export const YoutubeVideo: React.FC<Props> = memo(({ coverImage, isGrid, videoId }) => {
  const height = isGrid ? '13.8rem' : '8.8rem'
  const width = isGrid ? '24.5rem' : '15.7rem'

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
