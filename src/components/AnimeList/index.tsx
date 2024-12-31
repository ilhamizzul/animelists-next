"use client"
import { Card } from 'antd'
import Link from 'next/link'
import React from 'react'
import {IAnimeLists, IAnimeData} from '@/types/AnimeLists.types'
import {IResponseAnimeEntry} from '@/types/AnimeRecommendations.types'


const index = ({apiData}: { apiData?: IAnimeLists | any }) => {
  const data = apiData?.data
  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 px-4">
        {data?.map((anime: IAnimeData, index: number) => {
          let dataAnime = {
            mal_id: anime.mal_id,
            title: anime.title,
            episodes: anime.episodes,
            image: anime.images.webp.image_url,
            movieType: anime.type,
          }
          if (dataAnime.episodes && dataAnime.movieType) {
            return (
              <Link href={`anime/${dataAnime.mal_id}`} key={index}>
                <Card
                  hoverable
                  className='h-full bg-blue-400 text-color-dark'
                  cover={
                    <img
                      src={dataAnime.image}
                      alt={dataAnime.title || "anime image"}
                      className='object-cover w-full max-h-96'
                    />
                  }
                >
                  <h2 className='font-bold md:text-xl sm:text-lg'>{dataAnime.title} ({dataAnime.movieType})</h2>
                  <h4 className='font-semibold md:text-lg sm:text-base'>Total Episodes: <span className='font-semibold'>{dataAnime.episodes}</span></h4>
                </Card>
              </Link>
            )
          }
          return (
            <Link href={`anime/${dataAnime.mal_id}`} key={index}>
              <Card
                hoverable
                className='h-full bg-blue-400 text-color-dark'
                cover={
                  <img
                    src={dataAnime.image}
                    alt={dataAnime.title || "anime image"}
                    className='object-cover w-full max-h-96'
                  />
                }
              >
                <h2 className='font-bold md:text-xl sm:text-lg'>{dataAnime.title}</h2>
              </Card>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default index