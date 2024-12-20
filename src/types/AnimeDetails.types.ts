export interface IAnimeDetail {
  mal_id: number,
  url: string,
  images: {
    jpg: {
      image_url: string,
      small_image_url: string,
      large_image_url: string
    }
  },
  trailer: {
    youtube_id: string,
    url: string,
    embed_url: string
  },
  titles: ITitle[],
  type: "TV" | "OVA" | "Movie" | "Special" | "ONA" | "Music",
  episodes: number,
  rank: number,
  score: number,
  status: string,
  synopsis: string,
  background: string,
  season: string,
  year: number,
  genres: IGenre[]
}

export interface IGenre {
  mal_id: number,
  type: string,
  name: string,
  url: string
}

interface ITitle {
  type: string,
  title: string,
}