import { useState } from 'react'

export type VisibleType = 'grid' | 'list'

export const useSearchVisibleMode = () => {
  const [isActive, setIsActive] = useState(false)
  const [visibleMode, setVisibleMode] = useState<VisibleType>('grid')

  const onChangeModeCallback = (mode: VisibleType) => {
    if (visibleMode !== mode) {
      setVisibleMode(mode)
      setIsActive(mode === 'list')
    }
  }

  return {
    isActive,
    onChangeModeCallback,
    visibleMode,
  }
}
