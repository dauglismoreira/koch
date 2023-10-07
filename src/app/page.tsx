import styles from './page.module.css'
import { BannerVerticalSlide } from './home/sections/bannerVerticalSlide';
import { ResponsiveGridCardCarousel } from './home/sections/ResponsiveGridCardCarousel';
import { AboutSection } from './home/sections/aboutSection';
import { OpportunitiesSection } from './home/sections/opportunitiesSection';
import { InvestorSection } from './home/sections/investorSection';
import { NewsSection } from './home/sections/newsSection';
import {
  bannerImages,
  enterprises,
  enterpriseInfo,
  aboutItemsAccordion, 
  aboutInfo,
  oppotunitiesButtons,
  oportunitiesInfo,
  investorButtons,
  investorInfo,
  blogInfo,
  blog,
  meta
} from './home/data';
import Dump from "@/impacte/Dump";
import fetchData from "@/helpers/fetchData";
import {getData} from "@/helpers/getData";

export async function generateMetadata() {
  const data = await fetchData('home')

  return {
    title:meta.title,
    description:meta.description,
      openGraph: {
        title:meta.title,
        description:meta.description,
      },
  }
}

export default async function Home() {
  const data = await fetchData('home')

  return (
    <main className={styles.main}>

      {/*<Dump obj={data} />*/}

      <div style={{paddingTop:'70px'}}>
        <BannerVerticalSlide
          text="Construtora & incorporadora"
          autoPlayTime={5000}
          auto={true}
          images={bannerImages}/>
          <ResponsiveGridCardCarousel
            data={enterprises}
            info={enterpriseInfo}
          />
          <AboutSection accordionDate={aboutItemsAccordion} info={aboutInfo}/>
          <OpportunitiesSection buttonsList={oppotunitiesButtons} info={oportunitiesInfo}/>
          <InvestorSection buttonsList={investorButtons} info={investorInfo}/>
          <NewsSection data={blog} info={blogInfo}/>
      </div>
    </main>
  )
}
