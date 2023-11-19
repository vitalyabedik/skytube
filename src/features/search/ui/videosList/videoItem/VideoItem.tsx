import React from 'react'

import { VideoType, VisibleType } from '@/features'
import Flex from 'antd/lib/flex'
import Image from 'antd/lib/image'
import Text from 'antd/lib/typography/Text'
import { clsx } from 'clsx'

import s from './VideoItem.module.scss'

type Props = {
  video: VideoType
  visibleMode: VisibleType
}

export const VideoItem: React.FC<Props> = ({ video, visibleMode }: Props) => {
  const isGrid = visibleMode === 'grid'

  const classNames = {
    description: clsx(isGrid ? s.gridDescription : s.listDescription),
    root: clsx(isGrid ? s.gridRoot : s.listRoot),
    text: clsx(isGrid ? s.gridText : s.listText),
    title: clsx(isGrid ? s.gridTitle : s.listTitle),
    viewCount: s.viewCount,
  }

  return (
    <Flex className={classNames.root} gap={8} vertical={isGrid}>
      <Image src={video.image} width={isGrid ? 245 : 157} />
      <Flex className={classNames.description} vertical>
        <Text className={classNames.title}>{video.title}</Text>
        <div className={classNames.description}>
          <Text className={classNames.text}>{video.text}</Text>
          <span className={s.viewCount}>{video.viewCount} тыс. просмотров</span>
        </div>
      </Flex>
    </Flex>
  )
}
