import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={48}
    ref={ref}
    viewBox={'0 0 48 48'}
    width={48}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'evenodd'}
      d={'M32.2629 23.7637L13.4634 33.2487V43.3086L32.2629 33.8236V23.7637Z'}
      fill={'#1390E5'}
      fillRule={'evenodd'}
    />
    <path
      clipRule={'evenodd'}
      d={'M13.4634 14.2793L32.2629 23.7643V33.8242L13.4634 24.3392V14.2793Z'}
      fill={'#1180CB'}
      fillRule={'evenodd'}
    />
    <path
      clipRule={'evenodd'}
      d={'M32.2629 4.79492L13.4634 14.28V24.3398L32.2629 14.8548V4.79492Z'}
      fill={'#35A2EC'}
      fillRule={'evenodd'}
    />
  </svg>
)

export default memo(forwardRef(SvgComponent))
