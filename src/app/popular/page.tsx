'use client'
import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import AnimeList from '@/components/AnimeList/index'

import {IAnimeLists, IPagination} from '@/types/AnimeLists.types'



const Page = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<IAnimeLists>()

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12&page=${page}`)
    setData(await response.json())
    return
  }

  useEffect (() => {
    fetchData()
  }, [page])


  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
      <AnimeList apiData={data}/>
      <Pagination 
        // paginationProps={data?.pagination}
        currentPage={page}
        totalPage={data?.pagination.items.total}
        setPage = {setPage}
      />
    </>
  )
}

export default Page