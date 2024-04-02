import React from 'react'

interface authLayoutProps{
    children:React.ReactNode;
}

const authLayout = ({children}:authLayoutProps) => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='flex flex-col items-center'>
            {children}
        </div>
    </div>
  )
}

export default authLayout