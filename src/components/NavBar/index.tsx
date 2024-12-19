"use client"
import { Input } from 'antd'
import { Header } from 'antd/es/layout/layout'
import Link from 'next/link'
import React from 'react'
import type { GetProps } from 'antd';
import InputSearch from './InputSearch'

const Navbar = () => {

  return (
    <Header 
      className="
        !bg-color-accent backdrop-blur-lg sticky z-10 top-0 
        flex flex-col lg:flex-row md:flex-row
        justify-between items-center !h-16"
      // style={{ height: "auto", paddingTop: '8px', paddingBottom: '8px' }}
    >
      <Link href={'/'} className='font-bold text-color-dark hover:text-color-primary lg:text-3xl md:text-2xl sm:text-lg text-lg'>CuyAnimeList</Link>
      <InputSearch placeholder='Search Anime...'/>
    </Header>
  )
}

export default Navbar