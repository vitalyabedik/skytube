import { useState } from 'react'

const defaultData = {
  Button: {
    borderRadius: 5,
  },
  borderRadius: 5,
  colorPrimary: '#1390E5',
}

type DefaultDataType = typeof defaultData

export const useTheme = () => {
  const [data, setData] = useState<DefaultDataType>(defaultData)

  const themeConfig = {
    components: {
      Button: {
        borderRadius: data.Button?.borderRadius,
      },
      Input: {
        borderRadius: data.Button?.borderRadius,
      },
    },
    token: {
      borderRadius: data.borderRadius,
      colorPrimary: data.colorPrimary,
    },
  }

  return {
    setData,
    themeConfig,
  }
}
