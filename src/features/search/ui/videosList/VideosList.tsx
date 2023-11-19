import React from 'react'

import { VisibleType } from '@/features'
import Flex from 'antd/lib/flex'

import { VideoItem } from './videoItem'

export type VideoType = {
  id: number
  image: string
  text: string
  title: string
  viewCount: number
}

type Props = {
  visibleMode: VisibleType
}

export const VideosList: React.FC<Props> = ({ visibleMode }) => {
  const videos: VideoType[] = [
    {
      id: 1,
      image: 'https://placehold.co/245x138',
      text: 'Ветеринария и Кормление собак и кошек',
      title:
        'Как кормить кошку натуралкой | Перечень полезных для кошек продуктов и советы по составлению рациона',
      viewCount: 786,
    },
    {
      id: 2,
      image: 'https://placehold.co/245x138',
      text: 'Ветеринария и Кормление собак и кошек',
      title:
        'Как кормить кошку натуралкой | Перечень полезных для кошек продуктов и советы по составлению рациона',
      viewCount: 786,
    },
    {
      id: 3,
      image: 'https://placehold.co/245x138',
      text: 'Ветеринария и Кормление собак и кошек',
      title:
        'Как кормить кошку натуралкой | Перечень полезных для кошек продуктов и советы по составлению рациона',
      viewCount: 786,
    },
    {
      id: 4,
      image: 'https://placehold.co/245x138',
      text: 'Ветеринария и Кормление собак и кошек',
      title:
        'Как кормить кошку натуралкой | Перечень полезных для кошек продуктов и советы по составлению рациона',
      viewCount: 786,
    },
    {
      id: 5,
      image: 'https://placehold.co/245x138',
      text: 'Ветеринария и Кормление собак и кошек',
      title:
        'Как кормить кошку натуралкой | Перечень полезных для кошек продуктов и советы по составлению рациона',
      viewCount: 786,
    },
    {
      id: 6,
      image: 'https://placehold.co/245x138',
      text: 'Ветеринария и Кормление собак и кошек',
      title:
        'Как кормить кошку натуралкой | Перечень полезных для кошек продуктов и советы по составлению рациона',
      viewCount: 786,
    },
    {
      id: 7,
      image: 'https://placehold.co/245x138',
      text: 'Ветеринария и Кормление собак и кошек',
      title:
        'Как кормить кошку натуралкой | Перечень полезных для кошек продуктов и советы по составлению рациона',
      viewCount: 786,
    },
    {
      id: 8,
      image: 'https://placehold.co/245x138',
      text: 'Ветеринария и Кормление собак и кошек',
      title:
        'Как кормить кошку натуралкой | Перечень полезных для кошек продуктов и советы по составлению рациона',
      viewCount: 786,
    },
  ]

  const isGrid = visibleMode === 'grid'
  const isList = visibleMode === 'list'

  return (
    <Flex gap={isGrid ? 20 : 32} vertical={isList} wrap={isGrid ? 'wrap' : 'nowrap'}>
      {videos.map(video => {
        return <VideoItem key={video.id} video={video} visibleMode={visibleMode} />
      })}
    </Flex>
  )
}
