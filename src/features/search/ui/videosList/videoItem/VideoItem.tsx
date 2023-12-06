import React from 'react'
import YouTube from 'react-youtube'

import { formatViewsCount } from '@/common'
import { VideosItemType, VisibleType } from '@/features'
import Flex from 'antd/lib/flex'
import Image from 'antd/lib/image'
import Text from 'antd/lib/typography/Text'
import { clsx } from 'clsx'

import s from './VideoItem.module.scss'

type Props = {
  video: VideosItemType
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

  const opts = {
    height: '500',
    playerVars: {
      autoplay: 1,
    },
    width: '800',
  }

  return (
    <Flex className={classNames.root} gap={8} vertical={isGrid}>
      <Image
        height={isGrid ? 138 : 88}
        preview={{
          imageRender: () => <YouTube opts={opts} videoId={video?.id} />,
          toolbarRender: () => null,
        }}
        src={video?.snippet?.thumbnails?.high?.url}
        width={isGrid ? 245 : 157}
      />
      <Flex className={classNames.description} vertical>
        <Text className={classNames.title}>{video?.snippet?.title}</Text>
        <div className={classNames?.description}>
          <Text className={classNames.text}>
            {video?.snippet?.description
              ? video?.snippet?.description
              : 'Video without description'}
          </Text>
          <span className={s.viewCount}>{formatViewsCount(+video?.statistics?.viewCount)}</span>
        </div>
      </Flex>
    </Flex>
  )
}
