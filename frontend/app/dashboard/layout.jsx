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

        <main className='bg-Morado/R200'>
        {children}

        </main>
    </div>
  )
}

export default LayoutDashoard