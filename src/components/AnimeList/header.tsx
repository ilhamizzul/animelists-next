import Link from 'next/link'
import React from 'react'
import { Url } from 'url'

const Header = (params: {title: String, linkURL?: String, linkTitle?: String}) => {
  return (
    <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-color-primary">{params.title}</h1>
        { params.linkTitle && params.linkTitle ? 
          <Link className="underline md:text-xl text-md transition-all text-color-primary hover:text-color-accent" href={`${params.linkURL}`}>{params.linkTitle}</Link>
          :
          null
        }
    </div>
  )
}

export default Header