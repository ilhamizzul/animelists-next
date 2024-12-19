import Header from '@/components/AnimeList/header';
import AnimeList from "@/components/AnimeList/index";
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

const SearchPage = async (url : any) => {
  const {keyword} = url.params
  const fetchAPI = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?&q=${keyword}`)
  const searchAnime = await fetchAPI.json()
  // if (!searchAnime) {
  //   redirect('/not-found')
  // }

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${keyword}...`}/>
        <AnimeList apiData={searchAnime} />
      </section>
    </>
  );
}

export default SearchPage