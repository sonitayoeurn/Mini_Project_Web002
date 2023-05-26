import LayoutDashboard from '@/components/LayoutDashboard'
import React from 'react'

const layout = ({children}) => {
  return (
    <LayoutDashboard >
        {children}
    </LayoutDashboard>
  )
}

export default layout