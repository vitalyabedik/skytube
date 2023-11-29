import React from 'react'

import { useAppSelector } from '@/common'
import { VisibleType, selectSearch, useGetVideosQuery } from '@/features'
import Flex from 'antd/lib/flex'

import { VideoItem } from './videoItem'

type Props = {
  visibleMode: VisibleType
}

export const VideosList: React.FC<Props> = ({ visibleMode }) => {
  const search = useAppSelector(selectSearch)

  const { data: videos } = useGetVideosQuery({ query: search }, { skip: !search })

  const isGrid = visibleMode === 'grid'
  const isList = visibleMode === 'list'

  return (
    <Flex
      gap={isGrid ? 20 : 32}
      justify={isGrid ? 'center' : ''}
      vertical={isList}
      wrap={isGrid ? 'wrap' : 'nowrap'}
    >
      {videos?.items?.map(video => {
        return <VideoItem key={video.id} video={video} visibleMode={visibleMode} />
      })}
    </Flex>
  )
}
