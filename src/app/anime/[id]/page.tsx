import React from 'react'
import {GetAnimeById} from '@/app/services/api-libs'
import {IAnimeDetail, IGenre} from '@/types/AnimeDetails.types'
import Image from 'next/image'
import { Tag } from 'antd'
import VideoPlayer from '@/components/Utilities/VideoPlayer'

const Page = async ({params}: {params: {id: string}}) => {
  const {data}: {data : IAnimeDetail} = await GetAnimeById({id: params.id})
  return (
    <section className='min-h-screen'>
      <div className='p-4'>
        <h3 className='text-2xl'>{data.titles[0].title} ({data.year})</h3>
      </div>
      <div className='p-4 flex gap-2 overflow-x-auto'>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-secondary p-2'>
          <h3>PERINGKAT</h3>
          <p>{data.rank}</p>
        </div>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-secondary p-2'>
          <h3>SKOR</h3>
          <p>{data.score}</p>
        </div>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-secondary p-2'>
          <h3>EPISODES</h3>
          <p>{data.episodes}</p>
        </div>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-secondary p-2'>
          <h3>SEASON</h3>
          <p>{data.season}</p>
        </div>
      </div>
      <div className='p-4 flex sm:flex-nowrap flex-wrap gap-2'>
        <Image 
          src={data.images.jpg.image_url} 
          alt={data.images.jpg.image_url}
          width={250}
          height={250}
          // className='w-auto h-40'
        />
        <div className='gap-3'>
          <p className='text-xl text-balance text-justify'><span className='font-semibold'>Synopsis:</span> {data.synopsis}</p>
          <div className='flex flex-row justify-start items-center overflow-x-auto gap-1 text-xl'>
            <p className='font-semibold'>Category: </p>
            {data?.genres.map((data: IGenre, index: number) => {
              return (
                <Tag color='orange'>{data.name}</Tag>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <VideoPlayer youtubeId={data.trailer.youtube_id} />
      </div>
    </section>
  )
}

export default Page