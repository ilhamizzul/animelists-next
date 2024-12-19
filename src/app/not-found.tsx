"use client"
import { FrownFilled, SearchOutlined } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div 
      className='flex fustify-center items-center mx-auto max-w-xl h-[calc(100vh-6.5rem)]'
    >
      <div className='text-color-accent items-center text-2xl flex flex-col gap-4 font-bold'>
        <FrownFilled className='text-4xl'/>
        <h3>Oops... The anime you search is not found</h3>
        <Link href="/" className='text-color-primary hover:text-color-accent transition-all'>Kembali</Link>
      </div>
    </div>
  )
}

export default Page