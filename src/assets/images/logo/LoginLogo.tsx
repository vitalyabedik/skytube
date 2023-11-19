import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={88}
    ref={ref}
    viewBox={'0 0 88 88'}
    width={88}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'evenodd'}
      d={'M59.1488 43.5667L24.683 60.9559V79.399L59.1488 62.0098V43.5667Z'}
      fill={'#1390E5'}
      fillRule={'evenodd'}
    />
    <path
      clipRule={'evenodd'}
      d={'M24.683 26.1787L59.1487 43.5679V62.0111L24.683 44.6218V26.1787Z'}
      fill={'#1180CB'}
      fillRule={'evenodd'}
    />
    <path
      clipRule={'evenodd'}
      d={'M59.1488 8.79071L24.683 26.1799V44.623L59.1488 27.2338V8.79071Z'}
      fill={'#35A2EC'}
      fillRule={'evenodd'}
    />
  </svg>
)

export default memo(forwardRef(SvgComponent))
