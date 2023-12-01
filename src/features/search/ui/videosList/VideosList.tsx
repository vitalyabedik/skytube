import React from 'react'

import { VideosItemType, VisibleType } from '@/features'
import Flex from 'antd/lib/flex'

import { VideoItem } from './videoItem'

type Props = {
  videos: VideosItemType[]
  visibleMode: VisibleType
}

export const VideosList: React.FC<Props> = ({ videos, visibleMode }) => {
  const isGrid = visibleMode === 'grid'
  const isList = visibleMode === 'list'

  return (
    <Flex
      gap={isGrid ? 20 : 32}
      justify={isGrid ? 'center' : ''}
      vertical={isList}
      wrap={isGrid ? 'wrap' : 'nowrap'}
    >
      {videos?.map(video => {
        return <VideoItem key={video?.id} video={video} visibleMode={visibleMode} />
      })}
    </Flex>
  )
}
