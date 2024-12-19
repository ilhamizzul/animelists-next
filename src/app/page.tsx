import Header from "@/components/AnimeList/header";
import AnimeList from "@/components/AnimeList/index";



const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()
  return (
    <>
      <section>
        <Header title='Paling Populer' linkURL='/popular' linkTitle='Lihat Semua'/>
        <AnimeList apiData={topAnime}  />
      </section>
    </>
  );
}


export default Page;