import fetchData from '@/helpers/fetchData';
import { PostPage } from './postPage';
import getStorageFile from '@/helpers/getStorageFile';
import { GetServerSidePropsContext } from 'next';
import Dump from '@/impacte/Dump';


export async function generateMetadata(slug: any) {

  const data = await  fetchData(`blog/${slug?.params?.slug}`)

    return {
      title:data?.post?.title,
      description:data?.post?.resume,
        openGraph: {
          title:data?.post?.title,
          description:data?.post?.resume,
          images: [{
            url: getStorageFile(data?.post?.file?.path),
            width: data?.post?.file?.width,
            height: data?.post?.file?.height,
          },]
        },
    }
  }

  export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { slug } = context.query;
    const meta = await generateMetadata(slug);
    const page = await PostPageWrapper(slug);

  
    return {
      props: {
        meta,
        page,
      },
    };
  }

export default async function PostPageWrapper(slug: any) {

  const data = await fetchData(`blog/${slug?.params?.slug}`)

  return (
    <>
      {/* <Dump obj={data} /> */}
      <PostPage post={data} />
    </>
    )
}