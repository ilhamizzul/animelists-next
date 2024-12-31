import Header from "@/components/AnimeList/header";
import AnimeList from "@/components/AnimeList/index";
import {GetAnimeLists, GetAnimeRecommendationLists} from "@/app/services/api-libs"


const Page = async () => {
  const topAnime = await GetAnimeLists({limit: 16})
  let recommendedAnime = await GetAnimeRecommendationLists({objectProperty: 'entry', limit: 8});
  return (
    <>
      <section>
        <Header title='Paling Populer' linkURL='/popular' linkTitle='Lihat Semua'/>
        <AnimeList apiData={topAnime}  />
      </section>
      <section>
        <Header title='Rekomendasi'/>
        <AnimeList apiData={recommendedAnime}  />
      </section>
    </>
  );
}


export default Page;