import fetchData from '@/helpers/fetchData';
import { EnterPage } from './opportunitiesPage';
import getStorageFile from '@/helpers/getStorageFile';
import { GetServerSidePropsContext } from 'next';
import EnterPageWrapper from '@/app/oportunidades/[slug]/page';
import Dump from '@/impacte/Dump';

export async function generateMetadata(slug : any) {

  const data = await  fetchData(`oportunidades/${slug.params.slug}`)

    return {
      title:data?.enterprise?.title,
      description:data?.enterprise?.seo_description,
        openGraph: {
          title:data?.enterprise?.title,
          description:data?.enterprise?.seo_description,
          images: [{
            url: getStorageFile(data?.enterprise?.horizontal_image?.path),
            width: data?.enterprise?.horizontal_image?.width,
            height: data?.enterprise?.horizontal_image?.height,
          },]
        },
    }
  }

  OpportunityPageWrapper.getInitialProps = async (context:any) => {
    const { slug } = context.query;
    const meta = await generateMetadata(`blog/${slug?.params?.slug}`);
    const page = await fetchData(`blog/${slug?.params?.slug}`);
  
    return { meta, page };
  };

export default async function OpportunityPageWrapper(slug : any) {

  const data = await  fetchData(`oportunidades/${slug.params.slug}`)
  const home = await  fetchData('home')

  return (
    <>
      {/* <Dump obj={data} /> */}
      <EnterPage opportunity={data.enterprise} home={home?.page.components.filter((section: any) => section.id === 2)[0]}/>
    </>
    )
}