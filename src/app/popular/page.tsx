'use client'
import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import AnimeList from '@/components/AnimeList/index'
import {IAnimeLists} from '@/types/AnimeLists.types'
import {GetAnimeLists} from '@/app/services/api-libs'



const Page = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<IAnimeLists>()

  const fetchData = async () => {
    const response = await GetAnimeLists({limit: 12, page: page})
    setData(response)
    return
  }

  useEffect (() => {
    fetchData()
  }, [page])

  if (!data) {
    return (
      <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
      <div className='flex justify-center items-center min-h-screen'>
        <div className=" flex justify-center items-center loading"></div>
      </div>
    </>
    )
  }
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