import Header from "@/components/AnimeList/header";
import AnimeList from "@/components/AnimeList/index";
import {GetAnimeLists} from "@/app/services/api-libs"


const Page = async () => {
  const topAnime = await GetAnimeLists({limit: 16})
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