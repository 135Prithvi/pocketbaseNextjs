'use client'

import { GeistProvider, CssBaseline } from '@geist-ui/core'

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GeistProvider themeType={'light'}  >
      <CssBaseline  />
      {children}
    </GeistProvider>
  )
}

export default Provider