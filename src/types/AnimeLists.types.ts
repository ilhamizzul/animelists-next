export interface IAnimeLists {
  data: Array<IAnimeData>
  pagination: IPagination
}
export interface IAnimeData {
  mal_id: number,
  url: string,
  images: IAnimeImage,
  trailer: {
    youtube_id: string,
    url: string,
    embed_url: string
  }
  title: string,
  title_english: string,
  title_japanese: string,
  type: string,
  source: string,
  episodes: number,
  status: string,
  airing: boolean,
  rating: string,
  season: number,
  year: number,
  genres: Array<{
    mal_id: number,
    type: string,
    name: string,
    url: string
  }>,
  themes: Array<{
    mal_id: number,
    type: string,
    name: string,
    url: string
  }>,
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

export interface IPagination {
  last_visible_page: number,
  has_next_page: boolean,
  current_page: number,
  items: IPaginationItem
}

export interface IPaginationItem {
  count: number,
  total: number;
  per_page: number;
}