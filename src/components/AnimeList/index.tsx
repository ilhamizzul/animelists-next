"use client"
import { PlayCircleOutlined } from '@ant-design/icons'
import { Card, Divider } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IAnime {
  mal_id: number,
  title: string,
  image: string,
  movieType: string,
  episodes: string
}

interface IAnimeLists {
  data: Array<Object>,
  pagination: Object
}


const index = (dataResponse: {apiData: IAnimeLists}) => {
  const data= dataResponse.apiData.data
  // const clickHandler = () => {
  //   alert('anime clicked with name and id of: ' + data.mal_id + ` (${data.title})`)
  // }
  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 px-4">
        {data.map((anime: any) => {
          let dataAnime : IAnime = {
            mal_id: anime.mal_id,
            title: anime.title,
            episodes: anime.episodes,
            image: anime.images.webp.image_url,
            movieType: anime.type
          }
          return(
            <Link href={`/${dataAnime.mal_id}`}>
              <Card
                hoverable
                // title={`${dataAnime.title} (${dataAnime.movieType})`}
                className='h-full bg-blue-400 text-color-primary'
                cover={
                  <img
                    src={dataAnime.image}
                    // style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
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
        })}
      </div>
    </>
  )
}

export default index