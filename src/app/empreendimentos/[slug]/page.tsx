import fetchData from '@/helpers/fetchData';
import { enterprise } from './data';
import { EnterPage } from './enterPage';
import getStorageFile from '@/helpers/getStorageFile';
import { GetServerSidePropsContext } from 'next';
import Dump from '@/impacte/Dump';

export async function generateMetadata(slug : any) {

  const data = await  fetchData(`empreendimentos/${slug.params.slug}`)

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

  EnterPageWrapper.getInitialProps = async (context:any) => {
    const { slug } = context.query;
    const meta = await generateMetadata(`blog/${slug?.params?.slug}`);
    const page = await fetchData(`blog/${slug?.params?.slug}`);
  
    return { meta, page };
  };

export default async function EnterPageWrapper(slug : any) {

  const data = await  fetchData(`empreendimentos/${slug.params.slug}`)

  return (
    <>
      {/* <Dump obj={data} /> */}
      <EnterPage enterprise={data} />
    </>
    )
}