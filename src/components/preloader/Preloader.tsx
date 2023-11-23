import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import Spin from 'antd/lib/spin'
import { clsx } from 'clsx'

import s from './Preloader.module.scss'

export const Preloader: React.FC = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...restProps }, ref) => {
    const preloaderClasses = clsx(s.root, className)

    return (
      <div className={preloaderClasses} ref={ref} {...restProps}>
        <Spin size={'large'} />
      </div>
    )
  }
)
