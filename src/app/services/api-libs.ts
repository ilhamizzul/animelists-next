import {IResponseAnimeEntry, IRequestsAnimeRecomendation, IResponsesAnimeRecomendation} from "@/types/AnimeRecommendations.types"

interface IRequestAnimeListsQuery {
  type?: "tv" | "movie" | "ova" | "special" | "ona" | "music" | "cm" | "pv" | "tv_special",
  filter?: "airing" | "upcoming" | "bypopularity" | "favorite",
  rating?: "g" | "pg" | "pg13" | "r17" | "r" | "rx"
  sfw?: boolean,
  page?: number,
  limit: number
}

interface IRequestAnimeSearchQuery {
  status?: "airing" | "complete" | "upcoming" 
  page?: number,
  limit: number,
  q: string,
}

const queryParamsBuilder = (params: any) => {
  if (!params) return null
  const queryParams = new URLSearchParams(
    Object.entries(params)
      .filter(([_, value]) => value !== undefined) // Remove undefined values
      .reduce((acc, [key, value]) => {
        acc[key] = String(value); // Convert all values to strings
        return acc;
      }, {} as Record<string, string>)
  ).toString();
  return queryParams
}

export const GetAnimeLists = async (params : IRequestAnimeListsQuery) => {
  const queryParams = queryParamsBuilder(params)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?${queryParams}`)
  return await response.json()
}

export const GetAnimeRecommendationLists = async ({params, objectProperty, limit} : {params?: IRequestsAnimeRecomendation, objectProperty: any, limit: number}) => {
  const queryParams = queryParamsBuilder(params)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/recommendations/anime?${queryParams}`)
  const result : IResponsesAnimeRecomendation = await response.json()
  let dataClean : IResponseAnimeEntry[] = result.data.flatMap((item) => item.entry)
  dataClean = dataClean.sort(() => Math.random() - 0.5).slice(0, limit)
  return {data: dataClean}
}

export const GetAnimeSearch = async (params: IRequestAnimeSearchQuery) => {
  const queryParams = queryParamsBuilder(params)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?${queryParams}`)
  return await response.json()
}

export const GetAnimeById = async ({id}: {id: string | number}) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`)
  return await response.json()
}
