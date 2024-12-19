import React from 'react'

const HeaderMenu = ({title}: {title: string }) => {
  return (
    <div>
      <div className='p-8'>
        <h3 className='text-center text-2xl text-color-dark'>{title}</h3>
      </div>
    </div>
  )
} 

export default HeaderMenu