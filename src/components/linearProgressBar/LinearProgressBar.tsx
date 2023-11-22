import { clsx } from 'clsx'

import s from './LinearProgressBar.module.scss'

type Props = {
  className?: string
}

export const LinearProgressBar: React.FC<Props> = ({ className }) => {
  const linearProgressBarClasses = clsx(s.progress, className)

  return (
    <div className={linearProgressBarClasses}>
      <div className={s.progressBar}></div>
    </div>
  )
}
