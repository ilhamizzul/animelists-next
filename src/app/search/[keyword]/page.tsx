'use client'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import AnimeList from "@/components/AnimeList/index";
import React, { useEffect, useState } from 'react'
import { GetAnimeSearch } from '@/app/services/api-libs'
import { IAnimeLists } from '@/types/AnimeLists.types'

const SearchPage = (url: any) => {
  const {keyword} = url.params
  const decodedKeyword = decodeURI(keyword)

  const [page, setPage] = useState(1)
  const [data, setData] = useState<IAnimeLists>()

  const fetchData = async () => {
    const response = await GetAnimeSearch({ limit: 16, q: keyword, page: page })
    setData(response)
    return true
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <section className='min-h-screen'>
        <HeaderMenu title={`Pencarian untuk ${decodedKeyword}...`} />
        <AnimeList apiData={data} />
        <Pagination 
          setPage={setPage} 
          currentPage={data?.pagination.current_page} 
          totalPage={data?.pagination.items.total}
        />
      </section>
    </>
  );
}

export default SearchPage