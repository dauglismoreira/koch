import styles from './page.module.css'
import { BannerVerticalSlide } from './home/sections/bannerVerticalSlide';
import { ResponsiveGridCardCarousel } from './home/sections/ResponsiveGridCardCarousel';
import { AboutSection } from './home/sections/aboutSection';
import { OpportunitiesSection } from './home/sections/opportunitiesSection';
import { InvestorSection } from './home/sections/investorSection';
import { NewsSection } from './home/sections/newsSection';
import {
  enterpriseInfo,
  aboutInfo,
  oppotunitiesButtons,
  oportunitiesInfo,
  investorButtons,
  investorInfo,
  blogInfo
} from './home/data';
import Dump from "@/impacte/Dump";
import fetchData from "@/helpers/fetchData";
import {getData} from "@/helpers/getData";
import getStorageFile from '@/helpers/getStorageFile';

export async function generateMetadata() {
  const data = await  fetchData('home')

    return {
      title:data.page.title,
      description:data.page.description,
        openGraph: {
          title:data.page.title,
          description:data.page.description,
          images: [{
            url: getStorageFile(data.page.file?.path),
            width: data.page.file?.width,
            height: data.page.file?.height,
          },]
        },
    }
  }

export default async function Home() {
  const data = await fetchData('home')

  return (

    <main className={styles.main}>

      {/* <Dump obj={data} /> */}

      <div style={{paddingTop:'70px'}}>
        <BannerVerticalSlide
          text="Construtora & incorporadora"
          autoPlayTime={5000}
          auto={true}
          images={data?.page.galleries.filter((gallery: any) => gallery.id === 1)[0].files}/>
          <ResponsiveGridCardCarousel
            data={data?.enterprises}
            info={enterpriseInfo}
          />
          <AboutSection
            info={aboutInfo}
            data={data?.page.components.filter((section: any) => section.id === 1)[0]}
          />
          <OpportunitiesSection
            buttonsList={oppotunitiesButtons}
            info={oportunitiesInfo}
            data={data?.page.components.filter((section: any) => section.id === 2)[0]}
          />
          <InvestorSection
            buttonsList={investorButtons}
            info={investorInfo}
            data={data?.page.components.filter((section: any) => section.id === 3)[0]}
          />
          <NewsSection data={data?.posts} info={blogInfo}/>
      </div>
    </main>
  )
}
