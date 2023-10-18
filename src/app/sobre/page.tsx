import {
    aboutInfo,
  } from './data';
import { AboutPage } from './aboutPage';
import fetchData from '@/helpers/fetchData';
import Dump from '@/impacte/Dump';
import getStorageFile from '@/helpers/getStorageFile';


export async function generateMetadata() {
  const data = await  fetchData('sobre')

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

  export default async function AboutPageWrapper() {
    const data = await  fetchData('sobre')

    return (
      <>
        {/* <Dump obj={data} /> */}
        <AboutPage
            aboutInfo={aboutInfo}
            data={data.page.components}
        />
      </>
    );
}