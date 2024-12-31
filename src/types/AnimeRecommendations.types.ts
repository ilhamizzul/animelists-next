export interface IRequestsAnimeRecomendation {
  page?: number
}
export interface IResponsesAnimeRecomendation {
  data: {
    mal_id: string,
    entry: IResponseAnimeEntry[],
    content: string,
    user: {
      url: string,
      username: string
    }
  }[],
  pagination: IPagination
}

export interface IResponseAnimeEntry {
  mal_id: number,
  url: string,
  images: IAnimeImage,
  title: string 
}

interface IAnimeImage {
  jpg: {
    image_url: string,
    small_image_url: string,
    large_image_url: string,
  },
  webp: {
    image_url: string,
    small_image_url: string,
    large_image_url: string,
  },
}

interface IPagination {
  last_visible_page: number,
  has_next_page: boolean
}