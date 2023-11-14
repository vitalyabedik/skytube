import { ComponentPropsWithoutRef, ElementRef, JSX, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Page.module.scss'

export const Page = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...restProps }, ref): JSX.Element => {
    const pageClasses = clsx(s.root, className)

    return <div className={pageClasses} ref={ref} {...restProps} />
  }
)
