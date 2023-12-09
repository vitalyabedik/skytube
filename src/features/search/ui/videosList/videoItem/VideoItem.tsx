import React, { memo } from 'react'

import { formatViewsCount } from '@/common'
import { YoutubeVideo } from '@/components'
import { VideosItemType, VisibleType } from '@/features'
import Flex from 'antd/lib/flex'
import Text from 'antd/lib/typography/Text'
import { clsx } from 'clsx'

import s from './VideoItem.module.scss'

type Props = {
  video: VideosItemType
  visibleMode: VisibleType
}

export const VideoItem: React.FC<Props> = memo(({ video, visibleMode }: Props) => {
  const isGrid = visibleMode === 'grid'

  const formatedViewsCount = formatViewsCount(+video?.statistics?.viewCount)

  const classNames = {
    description: clsx(isGrid ? s.gridDescription : s.listDescription),
    root: clsx(isGrid ? s.gridRoot : s.listRoot),
    text: clsx(isGrid ? s.gridText : s.listText),
    title: clsx(isGrid ? s.gridTitle : s.listTitle),
    viewCount: s.viewCount,
  }

  return (
    <Flex className={classNames.root} gap={8} vertical={isGrid}>
      <YoutubeVideo isGrid={isGrid} videoId={video?.id} />
      <Flex className={classNames.description} vertical>
        <Text className={classNames.title}>{video?.snippet?.title}</Text>
        <div className={classNames?.description}>
          <Text className={classNames.text}>
            {video?.snippet?.description
              ? video?.snippet?.description
              : 'Video without description'}
          </Text>
          <span className={s.viewCount}>{formatedViewsCount}</span>
        </div>
      </Flex>
    </Flex>
  )
})
