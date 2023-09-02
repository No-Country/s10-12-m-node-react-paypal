import React from 'react'

export const metadata = {
  
    title: 'CountryPay - Dashboard',
    description: 'Generated by create next app',

  }
  

function LayoutDashoard({children}) {
  return (
    <div>
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </head>
        {children}
    </div>
  )
}

export default LayoutDashoard